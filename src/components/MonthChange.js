import React from "react";

function MonthChange({ onMonthChange }) {
  return (
    <div>
      <button onClick={onMonthChange.bind(this, -1)}>Prev Month</button>
      <button onClick={onMonthChange.bind(this, 1)}>Next Month</button>
    </div>
  );
}

export default MonthChange;
