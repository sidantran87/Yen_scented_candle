import React from "react";

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
        style={{ width: 12, height: 4, opacity: 0.3, background: "#00B207" }}
      />
      <div style={{ width: 40, height: 4, background: "#00B207" }} />
      <div
        style={{ width: 12, height: 4, opacity: 0.3, background: "#00B207" }}
      />
    </div>
  );
};

export default LineComponent;
