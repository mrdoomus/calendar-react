import React, { Component } from "react";
import Calendar from "./components/Calendar";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMonthChange = this.handleMonthChange.bind(this);

    this.state = {
      getMonthNumber: new Date().getMonth(),
      getYearNumber: new Date().getFullYear(),
    };
  }

  render() {
    const { getMonthNumber, getYearNumber } = this.state;

    return (
      <div className="Calendar">
        <div className="Main">
          <Calendar
            monthNumber={getMonthNumber}
            yearNumber={getYearNumber}
            onMonthChange={this.handleMonthChange}
          />
        </div>
        <small>Developed by Camilo Villegas</small>
      </div>
    );
  }

  handleMonthChange(modf) {
    // IF we want to go to the next year
    if (this.state.getMonthNumber === 11 && modf === 1) {
      this.setState({
        getMonthNumber: 0,
        getYearNumber: this.state.getYearNumber + 1,
      });

      //IF we want to go back to the previous year
    } else if (this.state.getMonthNumber === 0 && modf === -1) {
      this.setState({
        getMonthNumber: 11,
        getYearNumber: this.state.getYearNumber - 1,
      });

      //Normal month change
    } else {
      this.setState({ getMonthNumber: this.state.getMonthNumber + modf });
    }
  }
}

export default App;
