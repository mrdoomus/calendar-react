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
      getDateNumber: 0,
      getMonthNumber: new Date().getMonth(),
      getYearNumber: new Date().getFullYear(),
      getModalStatus: false,
      getModalAction: "",
      getId: 0,
    };
  }

  render() {
    const {
      getDateNumber,
      getMonthNumber,
      getYearNumber,
      getModalStatus,
      getModalAction,
      getId,
    } = this.state;

    return (
      <div className="Calendar">
        <div className="Main">
          {getModalStatus ? (
            <Modal
              modalStatus={getModalStatus}
              modalAction={getModalAction}
              date={getDateNumber}
              month={getMonthNumber}
              year={getYearNumber}
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

  handleModalChange(date, id, action) {
    if (date && action === "CREATE") {
      this.setState({
        getModalStatus: true,
        getDateNumber: date,
        getModalAction: "CREATE",
      });
    } else if (date && id && action === "UPDATE") {
      this.setState({
        getModalStatus: true,
        getDateNumber: date,
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
