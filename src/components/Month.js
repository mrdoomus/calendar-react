import React, { Component } from "react";
import WeekDay from "./Weekday";
import Day from "./Day";
import { weekDays, getWeeksForMonth } from "./utils/Util";

//import "./styles/calendar.css";

class Month extends Component {
  constructor(props) {
    super(props);
    this.renderWeek = this.renderWeek.bind(this);
  }

  render() {
    const { month, year } = this.props;

    // Printing days of the week
    const weekDaysMap = weekDays.map((weekDay) => {
      return <WeekDay key={weekDay} title={weekDay} label={weekDay} />;
    });

    // Amoun of weeks per month
    const weeks = getWeeksForMonth(month, year);
    // Mapping days of weeks for rendering
    const weeksMap = weeks.map((week, index) => {
      return <tr key={index}>{week.map(this.renderWeek)}</tr>;
    });

    return (
      <table>
        <tr>{weekDaysMap}</tr>
        {weeksMap}
      </table>
    );
  }

  // Rendering weeks
  renderWeek(fullDate, dayIndex) {
    if (fullDate == null) {
      return <Day key={dayIndex} />;
    }
    const date = fullDate.getDate();
    return <Day key={dayIndex} fullDate={fullDate} />;
  }
}

export default Month;
