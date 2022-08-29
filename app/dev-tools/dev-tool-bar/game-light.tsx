import type { FC } from "react";
import { useState } from "react";
import { lightMatrix, lightRotX, lightRotY, setLightRot } from "../../csm";

export const GameLightComponent: FC = () => {
  const [rotX, setRotX] = useState(lightRotX);
  const [rotY, setRotY] = useState(lightRotY);

  return (
    <div>
      Light:
      <div>
        <input
          type="range"
          min="0"
          max="360"
          value={rotX}
          onChange={(event) => {
            const v = Number.parseFloat(event.target.value);
            setLightRot(v, rotY);
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
            setLightRot(rotX, v);
            setRotY(v);
          }}
        />
      </div>
      <div>
        rx:{rotX.toFixed(1)} ry:{rotY.toFixed(1)}
      </div>
      <div>
        x:{lightMatrix.m13.toFixed(2)} y:{lightMatrix.m23.toFixed(2)} z:{lightMatrix.m33.toFixed(2)}
      </div>
    </div>
  );
};
