import React from "react";
import { connect } from "react-redux";
import moment from "moment";

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

  if (hovering) {
    return (
      <th className="Table-th" onMouseLeave={onMouseLeave}>
        <div
          className="Table-th-div-hover"
          onClick={onModalChange.bind(this, fullDate.getDate(), null, "CREATE")}
        >
          + new reminder
        </div>

        {/* Rendering stored reminders for a date or null*/}
        {reminders.map((reminder) =>
          reminder.date === fullDate.getDate() &&
          reminder.month === fullDate.getMonth() &&
          reminder.year === fullDate.getFullYear() ? (
            <div
              className="Table-th-reminder-div"
              key={reminder.id}
              style={{ backgroundColor: reminder.color }}
              onClick={onModalChange.bind(
                this,
                fullDate.getDate(),
                reminder.id,
                "UPDATE"
              )}
            >
              <b>{reminder.reminder}</b> | {reminder.time}
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
      <th
        className="Table-th"
        onMouseEnter={onMouseEnter.bind(this, fullDate.getDate())}
      >
        <div className="Table-th-div">{fullDate.getDate()}</div>

        {/* Rendering stored reminders for a date or null*/}
        {reminders.map((reminder) =>
          reminder.date === fullDate.getDate() &&
          reminder.month === fullDate.getMonth() &&
          reminder.year === fullDate.getFullYear() ? (
            <div
              className="Table-th-reminder-div"
              key={reminder.id}
              style={{ backgroundColor: reminder.color }}
            >
              <b>{reminder.reminder}</b> | {reminder.time}
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
  state.reminders.sort((a, b) => (a.time > b.time ? 1 : -1));

  return {
    reminders: state.reminders,
  };
}

export default connect(mapStateToProps, {})(Day);
