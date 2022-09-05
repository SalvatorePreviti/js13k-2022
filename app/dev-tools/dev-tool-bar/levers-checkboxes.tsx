import type { FC } from "react";
import { useEffect, useState } from "react";
import { levers } from "../../game/world-state";

let leverStateInitialized = false;

let savedLeversState = "";

const initSaveLeverState = () => {
  leverStateInitialized = true;
  savedLeversState = localStorage.getItem("dev_levers") || levers.map((l) => l.$value).join("");
  if (savedLeversState) {
    let idx = 0;
    for (const lever of levers) {
      if (savedLeversState[idx] !== undefined) {
        lever.$value = savedLeversState[idx] === "1" ? 1 : 0;
      }
      ++idx;
    }
  }
};

export const LeversComponent: FC = () => {
  if (!leverStateInitialized) {
    initSaveLeverState();
  }

  const [leverState, setLeverState] = useState<string>(() => levers.map((l) => l.$value).join(""));

  const update = () => {
    const newLeverState = levers.map((l) => l.$value).join("");
    if (savedLeversState !== newLeverState) {
      savedLeversState = newLeverState;
      setLeverState(newLeverState);
      localStorage.setItem("dev_levers", newLeverState);
    }
  };

  useEffect(() => {
    const updateInterval = setInterval(update, 200);
    update();
    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div style={{ maxWidth: 150 }}>
      <hr />
      <div>levers:</div>
      {levers.map((lever, index) => {
        return (
          <span key={index}>
            {" "}
            <label style={{ whiteSpace: "nowrap" }}>
              {index}
              <input
                type="checkbox"
                checked={leverState[index] === "1"}
                onChange={(e) => {
                  const value = !!e.target.checked;
                  if (levers[index]) {
                    levers[index]!.$value = value ? 1 : 0;
                  }
                  update();
                }}
              />
            </label>{" "}
          </span>
        );
      })}
      <hr />
    </div>
  );
};
