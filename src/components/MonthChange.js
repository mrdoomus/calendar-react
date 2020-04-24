import React from "react";

import "../components/styles/calendar.css";

function MonthChange({ onMonthChange }) {
  return (
    <div>
      <button className="prev-month" onClick={onMonthChange.bind(this, -1)}>
        <b>&lt;&lt; Prev</b>
      </button>
      <button className="next-month" onClick={onMonthChange.bind(this, 1)}>
        <b>Next &gt;&gt;</b>
      </button>
    </div>
  );
}

export default MonthChange;
