import type { FC } from "react";
import { useState, useEffect } from "react";
import { camera } from "../../camera";
import { radToDeg } from "../../math/math";
import { vec3_set } from "../../math/vectors";

let updateCounter = 1;

export const GameCameraComponent: FC = () => {
  const [, setUpdateCounter] = useState(0);

  const update = () => {
    setUpdateCounter(++updateCounter);
  };

  useEffect(() => {
    const updateInterval = setInterval(update, 300);
    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div className="dev-tool-bar-camera">
      <div className="dev-tool-bar-camera-values">
        <div>
          <div className="dev-tool-bar-camera-values-title">pos</div>
          <div>{formatNumber(camera.$position.x, 4)}</div>
          <div>{formatNumber(camera.$position.y, 4)}</div>
          <div>{formatNumber(camera.$position.z, 4)}</div>
        </div>
        <div>
          <div className="dev-tool-bar-camera-values-title">rot</div>
          <div>{formatNumber(radToDeg(camera.$rotation.x), 2)}</div>
          <div>{formatNumber(radToDeg(camera.$rotation.y), 2)}</div>
          <div>{formatNumber(radToDeg(camera.$rotation.z), 2)}</div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            vec3_set(camera.$position, 0, 0, 10);
            vec3_set(camera.$rotation, 0, 0, 0);
            update();
          }}
          title="clear"
        >
          ❌
        </button>
        <button onClick={() => console.log(camera)} title="log">
          📜
        </button>
      </div>
    </div>
  );
};

function formatNumber(value: number, digits: number) {
  return value.toLocaleString("en", {
    useGrouping: false,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}
