import React from "react";
import { connect } from "react-redux";

import "../components/styles/calendar.css";

function Day({
  fullDate,
  hovering,
  onMouseEnter,
  onMouseLeave,
  onModalChange,
  reminders,
}) {
  if (fullDate == null) {
    return <th className="Table-no-th" />;
  }

  const date = fullDate.getDate();
  const month = fullDate.getMonth();

  if (hovering) {
    return (
      <th className="Table-th" onMouseLeave={onMouseLeave}>
        <div
          className="Table-th-div"
          onClick={onModalChange.bind(this, date, month, null, "CREATE")}
        >
          + new reminder
        </div>
        {reminders.map((reminder) =>
          reminder.date === date && reminder.month === month ? (
            <div
              key={reminder.id}
              onClick={onModalChange.bind(
                this,
                date,
                month,
                reminder.id,
                "UPDATE"
              )}
            >
              {reminder.title}
            </div>
          ) : null
        )}
      </th>
    );
  } else {
    return (
      <th className="Table-th" onMouseEnter={onMouseEnter.bind(this, date)}>
        {date}

        {reminders.map((reminder) =>
          reminder.date === date && reminder.month === month ? (
            <div key={reminder.id}>{reminder.title}</div>
          ) : null
        )}
      </th>
    );
  }
}

// Passing initial state
function mapStateToProps(state) {
  return {
    reminders: state.reminders,
  };
}

export default connect(mapStateToProps, {})(Day);
