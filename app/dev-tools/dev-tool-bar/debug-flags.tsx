import type { FC } from "react";
import { useState } from "react";

export const DebugFlagsComponent: FC = () => {
  const [debugFlag0, setDebugFlag0] = useState(!!window.DEBUG_FLAG0);
  const [debugFlag1, setDebugFlag1] = useState(!!window.DEBUG_FLAG1);
  const [debugFlag2, setDebugFlag2] = useState(!!window.DEBUG_FLAG2);
  const [debugFlag3, setDebugFlag3] = useState(!!window.DEBUG_FLAG3);

  const update = () => {
    setDebugFlag0(!!window.DEBUG_FLAG0);
    setDebugFlag1(!!window.DEBUG_FLAG1);
    setDebugFlag2(!!window.DEBUG_FLAG2);
    setDebugFlag3(!!window.DEBUG_FLAG3);
  };

  return (
    <div>
      <hr />
      dbg flags
      <input
        type="checkbox"
        checked={debugFlag0}
        onChange={(e) => {
          const value = !!e.target.checked;
          window.DEBUG_FLAG0 = value;
          update();
        }}
      />
      <input
        type="checkbox"
        checked={debugFlag1}
        onChange={(e) => {
          const value = !!e.target.checked;
          window.DEBUG_FLAG1 = value;
          update();
        }}
      />
      <input
        type="checkbox"
        checked={debugFlag2}
        onChange={(e) => {
          const value = !!e.target.checked;
          window.DEBUG_FLAG2 = value;
          update();
        }}
      />
      <input
        type="checkbox"
        checked={debugFlag3}
        onChange={(e) => {
          const value = !!e.target.checked;
          window.DEBUG_FLAG3 = value;
          update();
        }}
      />
      <hr />
    </div>
  );
};
