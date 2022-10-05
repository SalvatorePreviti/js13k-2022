import type { FC } from "react";
import { useState, useEffect } from "react";
import { debug_camera_position, debug_camera_rotation, debug_camera_zero } from "../dev";
import { camera_position_x, camera_position_y, camera_position_z } from "../../game/player";
import { camera_rotation, player_position_final } from "../../game/world-state";

let updateCounter = 0;

export const GameCameraComponent: FC = () => {
  const [debugCameraEnabled, setDebugCameraEnabled] = useState(!!window.DEBUG_CAMERA);
  const [, setUpdateCounter] = useState(0);

  const update = () => {
    setUpdateCounter(++updateCounter);
    if (debugCameraEnabled !== !!window.DEBUG_CAMERA) {
      setDebugCameraEnabled(!!window.DEBUG_CAMERA);
    }
  };

  useEffect(() => {
    const updateInterval = setInterval(update, 50);
    return () => clearInterval(updateInterval);
  }, []);

  const p = window.DEBUG_CAMERA
    ? debug_camera_position
    : { x: camera_position_x, y: camera_position_y, z: camera_position_z };

  const r = window.DEBUG_CAMERA ? debug_camera_rotation : camera_rotation;

  return (
    <div className="dev-tool-bar-camera">
      <div className="dev-tool-bar-camera-values">
        <div>
          <div className="dev-tool-bar-camera-values-title">pos</div>
          <div>{formatNumber(p.x, 4)}</div>
          <div>{formatNumber(p.y, 4)}</div>
          <div>{formatNumber(p.z, 4)}</div>
        </div>
        <div>
          <div className="dev-tool-bar-camera-values-title">rot</div>
          <div>{formatNumber(r.x, 2)}</div>
          <div>{formatNumber(r.y, 2)}</div>
        </div>
      </div>

      <div style={{ paddingLeft: 10, color: "#aaf" }}>
        <div>player</div>
        <div>
          {formatNumber(player_position_final.x, 2)} {formatNumber(player_position_final.y, 2)}{" "}
          {formatNumber(player_position_final.z, 2)}
        </div>
      </div>

      <br />
      <div>
        <label>
          debug cam
          <input
            type="checkbox"
            checked={window.DEBUG_CAMERA}
            onChange={(e) => {
              const value = !!e.target.checked;
              window.DEBUG_CAMERA = value;
              update();
            }}
          />
        </label>
      </div>
      <div>
        <button
          onClick={() => {
            debug_camera_zero();
            update();
          }}
          title="clear"
        >
          ❌
        </button>
        <button onClick={() => console.log({ p, r })} title="log">
          📜
        </button>
      </div>
    </div>
  );
};

function formatNumber(value: number, digits: number) {
  return (
    value?.toLocaleString("en", {
      useGrouping: false,
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }) || ""
  );
}
