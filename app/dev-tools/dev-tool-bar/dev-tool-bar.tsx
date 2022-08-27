import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import { GameCameraComponent } from "./game-camera";
import { FpsGraph } from "./fps-graph";
import { setLightRot } from "../../csm";

export const DevToolBar: FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotX, setRotX] = useState(240);
  const [rotY, setRotY] = useState(152);

  useEffect(() => {
    setLightRot(rotX, rotY);
  });

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
          </div>
        )}
        <div>
          <div>
            <input
              type="range"
              min="0"
              max="360"
              value={rotX}
              onChange={(event) => {
                setRotX(Number.parseFloat(event.target.value));
                setLightRot(rotX, rotY);
              }}
            />
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="360"
              value={rotY}
              onChange={(event) => {
                setRotY(Number.parseFloat(event.target.value));
                setLightRot(rotX, rotY);
              }}
            />
          </div>
          <div>
            {rotX.toFixed(2)} {rotY.toFixed(2)}
          </div>
        </div>
        <canvas
          id="debug-canvas"
          width={64}
          height={64}
          style={{ display: "block", marginLeft: 10, width: 128, height: 128 }}
        ></canvas>
      </div>
    </Draggable>
  );
};
