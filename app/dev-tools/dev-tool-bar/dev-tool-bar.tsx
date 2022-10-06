import type { FC } from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import { GameCameraComponent } from "./game-camera";
import { FpsGraph } from "./fps-graph";
import { DebugFlagsComponent } from "./debug-flags";
import { LeversComponent } from "./levers-checkboxes";

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
            <GameCameraComponent />
            <LeversComponent />
            <DebugFlagsComponent />
            <br />
            <div id="dbg"></div>
            <canvas
              id="debug-canvas"
              width={128}
              height={128}
              style={{ display: "block", marginLeft: 10, width: 128, height: 128 }}
            ></canvas>
          </div>
        )}
      </div>
    </Draggable>
  );
};
