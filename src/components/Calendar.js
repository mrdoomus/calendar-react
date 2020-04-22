import React, { Component } from "react";
import Month from "./Month";
import MonthChange from "./MonthChange";
import { getMonthName } from "./utils/Util";

//import "./styles/calendar.css";

class Calendar extends Component {
  render() {
    const { monthNumber, yearNumber, onMonthChange } = this.props;

    const monthName = getMonthName(monthNumber);
    return (
      <div>
        <h1>
          {monthName} {yearNumber}
        </h1>
        <Month month={monthNumber} year={yearNumber} />
        <MonthChange onMonthChange={onMonthChange} />
      </div>
    );
  }
}

export default Calendar;
