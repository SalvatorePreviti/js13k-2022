import type { FC } from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import { GameCameraComponent } from "./game-camera";
import { FpsGraph } from "./fps-graph";
import { DebugFlagsComponent } from "./debug-flags";
import { LeversComponent } from "./levers-checkboxes";
import { player_position_global } from "../../player";
import { resetGameTime } from "../../game/game-time";

function dumpPlayerZ() {
  player_position_global.z = 600;
}

function dumpPlayerX() {
  player_position_global.x = 600;
}

function dumpPlayerXZ() {
  player_position_global.x = 600;
  player_position_global.z = 600;
}

function dumpPlayerMZ() {
  player_position_global.z = -600;
}

function dumpPlayerMX() {
  player_position_global.x = -600;
}

function dumpPlayerMXZ() {
  player_position_global.x = -600;
  player_position_global.z = 600;
}

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
            <button onClick={dumpPlayerZ}>dumpZ</button>
            <button onClick={dumpPlayerX}>dumpX</button>
            <button onClick={dumpPlayerXZ}>dumpXZ</button>
            <button onClick={dumpPlayerMZ}>dumpMZ</button>
            <button onClick={dumpPlayerMX}>dumpMX</button>
            <button onClick={dumpPlayerMXZ}>dumpMXZ</button>
            <br />
            <button onClick={() => resetGameTime(0)}>reset time</button>
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
