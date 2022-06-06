import type { FC } from "react";
import { useState, useRef } from "react";
import Draggable from "react-draggable";
import { FpsGraph } from "./fps-graph";

export const DevToolBar: FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [hidden, setHidden] = useState(false);
  return (
    <Draggable
      onStop={(_, element) => {
        setPosition({ x: element.x, y: element.y });
      }}
      position={position}
      handle=".dev-tool-bar-title"
    >
      <div className="dev-tool-bar">
        <div className="dev-tool-bar-title">
          dev tools
          <button onClick={() => setHidden(!hidden)}>{hidden ? "▼" : "▲"}</button>
          {position.x !== 0 || position.y !== 0 ? <button onClick={() => setPosition({ x: 0, y: 0 })}>↖</button> : null}
        </div>
        {hidden ? null : (
          <div className="dev-tool-bar-body">
            <FpsGraph />
          </div>
        )}
      </div>
    </Draggable>
  );
};
