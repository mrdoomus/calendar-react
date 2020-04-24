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
      getModalAction: "",
      getDate: 0,
      getMonth: 0,
      getId: 0,
    };
  }

  render() {
    const {
      getMonthNumber,
      getYearNumber,
      getModalStatus,
      getModalAction,
      getDate,
      getMonth,
      getId,
    } = this.state;

    return (
      <div className="Calendar">
        <div className="Main">
          {getModalStatus ? (
            <Modal
              modalStatus={getModalStatus}
              modalAction={getModalAction}
              date={getDate}
              month={getMonth}
              id={getId}
              onModalChange={this.handleModalChange}
            />
          ) : null}

          <Calendar
            monthNumber={getMonthNumber}
            yearNumber={getYearNumber}
            onMonthChange={this.handleMonthChange}
            onModalChange={this.handleModalChange}
          />
        </div>
        <br />
        <small>
          <a
            className="Calendar-dev"
            href="https://www.github.com/mrdoomus"
            target="_blank"
          >
            Developed by Camilo Villegas
          </a>
        </small>
      </div>
    );
  }

  handleModalChange(date, month, id, action) {
    if (date && month && action === "CREATE") {
      this.setState({
        getModalStatus: true,
        getDate: date,
        getMonth: month,
        getModalAction: "CREATE",
      });
    } else if (date && month && id && action === "UPDATE") {
      this.setState({
        getModalStatus: true,
        getDate: date,
        getMonth: month,
        getId: id,
        getModalAction: "UPDATE",
      });
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
