import React from "react";

import "../components/styles/modal.css";

function ColorPick({ onColorClick }) {
  const colors = {
    yellow: "#EAC435",
    red: "#CA1551",
    blue: "#345995",
    green: "#03CEA4",
  };

  return (
    <div className="row">
      <div
        className="column"
        style={{ backgroundColor: colors.yellow }}
        onClick={onColorClick.bind(this, colors.yellow)}
      >
        &nbsp;
      </div>
      <div
        className="column"
        style={{ backgroundColor: colors.red }}
        onClick={onColorClick.bind(this, colors.red)}
      >
        &nbsp;
      </div>
      <div
        className="column"
        style={{ backgroundColor: colors.blue }}
        onClick={onColorClick.bind(this, colors.blue)}
      >
        &nbsp;
      </div>
      <div
        className="column"
        style={{ backgroundColor: colors.green }}
        onClick={onColorClick.bind(this, colors.green)}
      >
        &nbsp;
      </div>
    </div>
  );
}

export default ColorPick;
