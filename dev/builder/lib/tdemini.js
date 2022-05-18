import { existsSync, accessSync, constants } from "node:fs";
import { extname, resolve } from "node:path";
import { EventEmitter } from "node:events";
import { Duplex } from "node:stream";
import { spawn } from "node:child_process";
import { cpus } from "node:os";
const moduleDirectory = import.meta.url.slice(7, import.meta.url.lastIndexOf("/") + 1);
const numCores = cpus().length;

/** The path to the minify binary. This can be used together with Node.js's `child_process` module to run the minifier manually (it will be useful to read the [CLI documentation](https://github.com/tdewolff/minify/tree/master/cmd/minify#usage) first). */
export const minifyPath = resolve(`${moduleDirectory}./minify${process.platform === "win32" ? ".exe" : ""}`);

if (!existsSync(minifyPath)) {
  throw Error(
    `The minify binary for your platform was not found at: ${minifyPath}\n Indicating that the install script failed to download it. Enter the directory of this module (tdewolff-minify) and run \`npm run install\` to retry installing it.`,
  );
}

try {
  accessSync(minifyPath, constants.X_OK);
} catch (error) {
  throw Error(`No execute persmission is set on the minify binary at location: ${minifyPath}\n Please fix this.`);
}

/** Create a new minify controller and optionally change the max amount of concurrent minify processes spawned by it (defaults to 4) and/or add custom CLI options to be forwarded.
 */
export class Minify extends EventEmitter {
  #workerRunning = false;
  #workerWaiting = false;
  #maxConcurrency;
  #runningJobs = 0;
  #jobQueue = [];
  #customCliOptions;

  /**
   * @param {Object} [options] Optional options to pass.
   * @param {number} [options.maxConcurrency] The max amount of concurrent minify processes. Defaults to the number of processor cores on your system.
   * @param {Array.<string>} [options.customCliOptions] Additional CLI options, see [CLI documentation](https://github.com/tdewolff/minify/tree/master/cmd/minify#usage).
   */
  constructor({ maxConcurrency = numCores, customCliOptions = [] } = {}) {
    super(); // init the EventEmitter
    this.#maxConcurrency = maxConcurrency;
    this.#customCliOptions = customCliOptions;
  }

  async #worker() {
    this.#workerRunning = true;
    while (this.#jobQueue.length) {
      if (this.#runningJobs < this.#maxConcurrency) {
        const jobRunner = this.#jobQueue.shift();
        jobRunner(); // run it, don't worry it's async
      } else {
        // we need to wait for a job to finish first
        this.#workerWaiting = true;
        await new Promise((resolve) => this.once("stopWaiting", resolve));
        this.#workerWaiting = false;
      }
    }
    this.#workerRunning = false;
  }

  #pushJob(jobFunction) {
    let jobResolve;
    let jobReject;
    const jobDonePromise = new Promise((resolve, reject) => {
      jobResolve = resolve;
      jobReject = reject;
    });
    const jobRunner = async () => {
      this.#runningJobs++;
      try {
        jobResolve(await new Promise(jobFunction));
      } catch (error) {
        jobReject(error);
      }
      this.#runningJobs--;
      if (this.#workerWaiting) {
        this.emit("stopWaiting");
      }
    };
    // setImmediate(() => {
    this.#jobQueue.push(jobRunner);
    if (!this.#workerRunning) {
      void this.#worker();
    } // run it, don't worry it's async
    // })
    return jobDonePromise;
  }

  /**
   * Feed the minifier input from a stream and send its output to another. E.g. `fs.createReadStream` and `fs.createWriteStream`.
   * @param {string} type The type of content to minify. Valid types are html, css, js, json, svg and xml (as of minify v2.9.22).
   * @param {stream.Readable} inputStream The stream which contains the input, duh.
   * @param {stream.Writable} outputStream The stream to fill with the output...
   * @returns {Promise} A promise which resolves when done.
   */
  pipe(type, inputStream, outputStream) {
    return this.#pushJob((resolve, reject) => {
      if (typeof type !== "string") {
        return reject(`The type ('js', 'html', etc) of inputStream needs to be a string, got: ${type}`);
      }
      const minify = spawn(minifyPath, [`--type=${type}`]);
      minify.stderr.setEncoding("utf-8").on("data", reject);
      minify.stdout.pipe(outputStream);
      minify.on("error", reject);
      outputStream.on("close", resolve);
      inputStream.pipe(minify.stdin);
    });
  }

  /**
   * Minify the file at the given path. Optionally specify the content type.
   * @param {string} filePath Path to the file to minify.
   * @param {string} [type] The type of content to minify. Valid types are html, css, js, json, svg and xml (as of minify v2.9.22).
   * @returns {Promise.<string>} A promise which resolves with the minified content when done.
   */
  file(filePath, type) {
    return this.#pushJob((resolve, reject) => {
      if (!type) {
        // then check filename
        type = extname(filePath).slice(1);
        if (type == "") {
          return reject(
            `The file to minify has no extension, hence the type needs to be specified manually. File: ${filePath}`,
          );
        }
      }
      let stdout = "";
      // todo: check if path.resolve is needed
      const args = [...this.#customCliOptions, `--type=${type}`, filePath];
      const minify = spawn(minifyPath, args);
      minify.stderr.setEncoding("utf-8").on("data", reject);
      minify.stdout.setEncoding("utf-8").on("data", (string) => {
        stdout += string;
      });
      minify.on("error", reject).on("exit", (code) => {
        if (code == 0) {
          resolve(stdout);
        }
      });
      // if node reads the file:
      // const inputStream = fs.createReadStream(filePath)
      // inputStream.on('exit', () => resolve(stdout))
      // inputStream.pipe(minify.stdin)
    });
  }

  /**
   * Minify a file and save the minified version at the given path. Optionally specify the content type.
   * @param {string} inputFile Path to the file to minify.
   * @param {string} outputFile Where to save the minified file.
   * @param {string} [type] The type of content to minify. Valid types are html, css, js, json, svg and xml (as of minify v2.9.22).
   * @returns {Promise.<string>} A promise which resolves when done.
   */
  fileToFile(inputFile, outputFile, type) {
    return this.#pushJob((resolve, reject) => {
      if (!type) {
        // then check filename
        type = extname(inputFile).slice(1);
        if (type == "") {
          return reject(
            `The file to minify has no extension, hence the type needs to be specified manually. File: ${inputFile}`,
          );
        }
      }
      // todo: check if path.resolve is needed
      const args = [...this.#customCliOptions, `--type=${type}`, "--output", outputFile, inputFile];
      const minify = spawn(minifyPath, args);
      minify.stderr.setEncoding("utf-8").on("data", reject);
      minify.on("error", reject).on("exit", (code) => {
        if (code == 0) {
          resolve();
        }
      });
    });
  }

  /**
   * Minify the text input given according to the type specified.
   * @param {string} type The type of content to minify. Valid types are html, css, js, json, svg and xml (as of minify v2.9.22).
   * @param {string} textContent
   * @returns {Promise} A promise which resolves when done.
   */
  content(type, textContent) {
    return this.#pushJob((resolve, reject) => {
      let stdout = "";
      const args = [...this.#customCliOptions, `--type=${type}`];
      const minify = spawn(minifyPath, args);
      minify.stderr.setEncoding("utf-8").on("data", reject);
      minify.stdout.setEncoding("utf-8").on("data", (string) => {
        stdout += string;
      });
      minify.on("error", reject);
      minify.on("exit", (code) => {
        if (code == 0) {
          resolve(stdout);
        }
      });
      // minify.on('spawn', () => {
      if (minify.stdin.writable) {
        minify.stdin.end(textContent);
      }
      // })
    });
  }
}

/**
 * Creates a duplex (read/write) Node.js stream attached to the minifier so you can use it in a [pipeline](https://nodejs.org/api/stream.html#streampipelinestreams-callback) e.g. This function doesn't come with any concurrency controller; so beware if you want to limit the minify processes spawned.
 * @param {string} type The type of content to minify. Valid types are html, css, js, json, svg and xml (as of minify v2.9.22).
 * @returns Promise<stream.Duplex>
 */
export async function minifyStream(type) {
  if (typeof type !== "string") {
    throw Error(`The type ('js', 'html', etc) needs to be a string, got: ${type}`);
  }
  const minify = spawn(minifyPath, [`--type=${type}`]);
  minify.stdout.setEncoding("utf-8");
  minify.stderr.setEncoding("utf-8");
  await new Promise((resolve, reject) => {
    minify.on("spawn", resolve);
    minify.on("error", reject);
  });
  const duplexStream = Duplex.from({ writable: minify.stdin, readable: minify.stdout });
  minify.stderr.on("data", (text) => {
    duplexStream.destroy(Error(text));
  });
  return duplexStream;
}
