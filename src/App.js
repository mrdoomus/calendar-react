import React, { Component } from "react";
import Calendar from "./components/Calendar";
import Modal from "./containers/Modal";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleModalChange = this.handleModalChange.bind(this);

    this.state = {
      getMonthNumber: new Date().getMonth(),
      getYearNumber: new Date().getFullYear(),
      getModalStatus: false,
      getDate: 0,
      getMonth: 0,
    };
  }

  render() {
    const {
      getMonthNumber,
      getYearNumber,
      getModalStatus,
      getDate,
      getMonth,
    } = this.state;

    return (
      <div className="Calendar">
        <div className="Main">
          <Modal
            modalStatus={getModalStatus}
            date={getDate}
            month={getMonth}
            onModalChange={this.handleModalChange}
          />
          <Calendar
            monthNumber={getMonthNumber}
            yearNumber={getYearNumber}
            onMonthChange={this.handleMonthChange}
            onModalChange={this.handleModalChange}
          />
        </div>
        <br />
        <small className="Calendar-dev">Developed by Camilo Villegas</small>
      </div>
    );
  }

  handleModalChange(date, month) {
    if (date && month) {
      this.setState({ getModalStatus: true, getDate: date, getMonth: month });
    } else {
      this.setState({ getModalStatus: false });
    }
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
