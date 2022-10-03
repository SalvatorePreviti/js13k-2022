window.DEBUG_CAMERA = false;
window.DEBUG_FLAG0 = false;
window.DEBUG_FLAG1 = false;
window.DEBUG_FLAG2 = false;
window.DEBUG_FLAG3 = false;

import { devInit } from "./dev";
import "./dev-main.less";
import ReactDOM from "react-dom/client";

import { DevToolBar } from "./dev-tool-bar/dev-tool-bar";

console.info(
  "%c 🚧 DEV TOOLS ENABLED ",
  "border:2px solid #3ae;margin:10px;padding:10px;background:#002;border-radius:5px;color:#55bafa;font-weight:bolder;font-size:13px;",
);

devInit();

const container = document.createElement("div");
document.body.appendChild(container);

const root = ReactDOM.createRoot(container);
root.render(<DevToolBar />);
