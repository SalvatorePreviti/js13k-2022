import "./dev-main.less";
import ReactDOM from "react-dom/client";
import { DevToolBar } from "./dev-tool-bar/dev-tool-bar";

console.info(
  "%c 🚧 DEV TOOLS ENABLED ",
  "border:2px solid #3ae;margin:10px;padding:10px;background:#002;border-radius:5px;color:#55bafa;font-weight:bolder;font-size:13px;",
);

const container = document.createElement("div");
document.body.appendChild(container);

const root = ReactDOM.createRoot(container);
root.render(<DevToolBar />);

/* const _requestAnimationFrame = window.requestAnimationFrame;
const _performanceNow = performance.now.bind(performance);

const _timePaused = false;
const _globalTime = _performanceNow();
let _lastFrameTime = _globalTime

performance.now = () => {
  //_globalTime;
}

function _globalAnimationFrame() {
  _performanceNow() - _lastFrameTime

  // console.log("time");
  _requestAnimationFrame(_globalAnimationFrame);
}

_requestAnimationFrame(_globalAnimationFrame);

/* window.requestAnimationFrame = (callback: FrameRequestCallback): number => {
  const _requestAnimationFrameWrapper = (time: DOMHighResTimeStamp) => {
    callback(_globalTime);
  };

  _requestAnimationFrame(_requestAnimationFrameWrapper);
};
*/
