import type { FC } from "react";
import { useState, useEffect } from "react";
import { camera_position, camera_rotation } from "../../camera";

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
          <div>{formatNumber(camera_position.x, 4)}</div>
          <div>{formatNumber(camera_position.y, 4)}</div>
          <div>{formatNumber(camera_position.z, 4)}</div>
        </div>
        <div>
          <div className="dev-tool-bar-camera-values-title">rot</div>
          <div>{formatNumber(camera_rotation.x, 2)}</div>
          <div>{formatNumber(camera_rotation.y, 2)}</div>
          <div>{formatNumber(camera_rotation.z, 2)}</div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            camera_position.x = 0;
            camera_position.y = 0;
            camera_position.z = 10;

            camera_rotation.x = 0;
            camera_rotation.y = 0;
            camera_rotation.z = 0;

            update();
          }}
          title="clear"
        >
          ❌
        </button>
        <button onClick={() => console.log({ camera_position, camera_rotation })} title="log">
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
