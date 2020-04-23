import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as reminderActions from "../redux/actions/index";

import "../components/styles/modal.css";

/* Checking if passed info is correct
@reminder - object of a reminder with (id, title, city, date, time, color)
return - error if encountered or TRUE is no error encountered
*/
export const checkInfo = (reminder) => {
  if (Object.values(reminder).some((value) => value === "")) {
    return "Fields can't be empty. Please fill them.";
  }

  if (reminder.title.length > 30) {
    return "Title can't be more than 30 chars. Please correct title.";
  }

  return "TRUE";
};

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reminder: {
        id: 0,
        title: "",
        city: "",
        date: 0,
        month: 0,
        time: "",
        color: "red",
      },
    };
  }

  handleTitleChange = (event) => {
    const reminder = { ...this.state.reminder, title: event.target.value };
    this.setState({ reminder });
  };

  handleCityChange = (event) => {
    const reminder = { ...this.state.reminder, city: event.target.value };
    this.setState({ reminder });
  };

  handleTimeChange = (event) => {
    const reminder = { ...this.state.reminder, time: event.target.value };
    this.setState({ reminder });
  };

  // handleColorChange = (event) => {};

  handleSubmit = (event) => {
    event.preventDefault();

    // Setting id and date to new reminder
    this.state.reminder.id = this.props.date * Math.floor(Math.random() * 100);
    this.state.reminder.date = this.props.date;
    this.state.reminder.month = this.props.month;

    // Correct info check of reminder
    if (checkInfo(this.state.reminder) === "TRUE") {
      this.props.actions.createReminder(this.state.reminder);
      alert("A new reminder was added");
      this.props.onModalChange(null);

      // Resetting input values
      this.setState({
        reminder: {
          id: 0,
          title: "",
          city: "",
          date: 0,
          month: 0,
          time: "",
          color: "red",
        },
      });
    } else {
      alert(checkInfo(this.state.reminder));
    }
  };

  render() {
    const { modalStatus } = this.props;

    if (modalStatus) {
      return ReactDOM.createPortal(
        <div id="modal">
          <div class="modal-outside">
            <div class="modal-inside">
              <form onSubmit={this.handleSubmit}>
                <p>Title</p>
                <input
                  type="text"
                  onChange={this.handleTitleChange}
                  value={this.state.reminder.title}
                />
                <p>City</p>
                <input
                  type="text"
                  onChange={this.handleCityChange}
                  value={this.state.reminder.city}
                />
                <p>Time</p>
                <input
                  type="time"
                  onChange={this.handleTimeChange}
                  value={this.state.reminder.time}
                />
                <input type="submit" value="Save" />
              </form>
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      );
    } else {
      return null;
    }
  }
}

// Passing initial state
function mapStateToProps(state) {
  return {
    reminders: state.reminders,
  };
}

// Passing allowed actions
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reminderActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
