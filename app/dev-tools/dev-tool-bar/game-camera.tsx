import type { FC } from "react";
import { useState, useEffect } from "react";
import { camera } from "../../camera";
import { radToDeg } from "../../math/math";
import { ViewCamera_reset } from "../../math/view-camera";

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
        <button onClick={() => ViewCamera_reset(camera)}>reset</button>
        <button onClick={() => console.log(camera)}>log</button>
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
