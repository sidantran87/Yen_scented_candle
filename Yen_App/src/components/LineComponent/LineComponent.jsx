import React from "react";
import { success } from "../../color";

const LineComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        display: "inline-flex",
      }}
    >
      <div
        style={{ width: 12, height: 4, opacity: 0.3, background: success.default }}
      />
      <div style={{ width: 40, height: 4, background: success.default} } />
      <div
        style={{ width: 12, height: 4, opacity: 0.3, background: success.default }}
      />
    </div>
  );
};

export default LineComponent;
