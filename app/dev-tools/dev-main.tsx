import "./dev-main.less";
import ReactDOM from "react-dom/client";
import { DevToolBar } from "./dev-tool-bar/dev-tool-bar";

console.info(
  "%c 🚧 DEV TOOLS ENABLED ",
  "border:2px solid #3ae;margin:10px;padding:10px;background:#002;border-radius:5px;color:#55bafa;font-weight:bolder;font-size:13px;",
);

/* const declaredGlobals = new Set<string>();

function dev_declareGlobal<R>(name: string, value: R): R {
  (globalThis as any)[name] = value;
  declaredGlobals.add(name);
  return value;
}

console.info(
  "%cglobals: %c" + Array.from(declaredGlobals).join(" "),
  "color:#55bafa;background:#000;padding:5px;font-size:13px;",
  "color:#aabafa;background:#000;padding:5px;font-size:13px;font-weight:bold;",
); */

const container = document.createElement("div");
document.body.appendChild(container);

const root = ReactDOM.createRoot(container);
root.render(<DevToolBar />);
