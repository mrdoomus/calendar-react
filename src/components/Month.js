import React, { Component } from "react";
import WeekDay from "./Weekday";
import Day from "../containers/Day";

import { weekDays, getWeeksForMonth } from "./utils/Util";

import "./styles/calendar.css";

class Month extends Component {
  constructor(props) {
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.renderWeek = this.renderWeek.bind(this);

    this.state = {
      hoverDay: null,
    };
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
      <table className="Table">
        <tr>{weekDaysMap}</tr>
        {weeksMap}
      </table>
    );
  }

  // Rendering weeks
  renderWeek(fullDate, dayIndex) {
    const { hoverDay } = this.state;

    if (fullDate == null) {
      return <Day key={dayIndex} />;
    }
    const date = fullDate.getDate();
    return (
      <Day
        key={dayIndex}
        fullDate={fullDate}
        hovering={date === hoverDay}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onModalChange={this.props.onModalChange}
      />
    );
  }

  handleMouseEnter(date) {
    this.setState({
      hoverDay: date,
    });
  }

  handleMouseLeave() {
    this.setState({
      hoverDay: null,
    });
  }
}

export default Month;
