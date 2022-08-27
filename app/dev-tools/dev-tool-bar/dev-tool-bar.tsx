import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import { GameCameraComponent } from "./game-camera";
import { FpsGraph } from "./fps-graph";
import { lightMatrix, setLightRot } from "../../csm";

export const DevToolBar: FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotX, setRotX] = useState(243);
  const [rotY, setRotY] = useState(152);
  const [rotZ, setRotZ] = useState(1);

  useEffect(() => {
    setLightRot(rotX, rotY, 0);
    setRotZ(0);
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
                const v = Number.parseFloat(event.target.value);
                setLightRot(v, rotY, rotZ);
                setRotX(v);
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
                const v = Number.parseFloat(event.target.value);
                setLightRot(rotX, v, rotZ);
                setRotY(v);
              }}
            />
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="360"
              value={rotZ}
              onChange={(event) => {
                const v = Number.parseFloat(event.target.value);
                setLightRot(rotX, rotY, v);
                setRotZ(v);
              }}
            />
          </div>
          <div>
            {rotX.toFixed(2)} {rotY.toFixed(2)} {rotZ.toFixed(2)}
          </div>
          <div>
            {lightMatrix.m13.toFixed(3)} {lightMatrix.m23.toFixed(3)} {lightMatrix.m33.toFixed(3)}
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
