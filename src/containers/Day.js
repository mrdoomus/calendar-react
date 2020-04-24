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
          className="Table-th-div-hover"
          onClick={onModalChange.bind(this, date, month, null, "CREATE")}
        >
          + new reminder
        </div>

        {/* Rendering stored reminders for a date or null*/}
        {reminders.map((reminder) =>
          reminder.date === date && reminder.month === month ? (
            <div
              className="Table-th-reminder-div"
              key={reminder.id}
              style={{ backgroundColor: reminder.color }}
              onClick={onModalChange.bind(
                this,
                date,
                month,
                reminder.id,
                "UPDATE"
              )}
            >
              <b>{reminder.title}</b> | {reminder.time}
              <div>
                <small>{reminder.user}</small>
              </div>
            </div>
          ) : null
        )}
      </th>
    );
  } else {
    return (
      <th className="Table-th" onMouseEnter={onMouseEnter.bind(this, date)}>
        <div className="Table-th-div">{date}</div>

        {/* Rendering stored reminders for a date or null*/}
        {reminders.map((reminder) =>
          reminder.date === date && reminder.month === month ? (
            <div
              className="Table-th-reminder-div"
              key={reminder.id}
              style={{ backgroundColor: reminder.color }}
            >
              <b>{reminder.title}</b> | {reminder.time}
              <div>
                <small>{reminder.user}</small>
              </div>
            </div>
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
