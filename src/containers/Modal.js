import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColorPick from "../components/ColorPick";
import Weather from "../components/Weather";

import { checkInfo } from "../components/utils/Util";
import { connect } from "react-redux";
import {
  createReminder,
  deleteReminder,
  updateReminder,
} from "../redux/actions/index";

import "../components/styles/modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      reminder: {
        id: 0,
        reminder: "",
        user: "",
        city: "",
        date: 0,
        month: 0,
        year: 0,
        time: "",
        color: "",
      },
    };

    // If a Reminder wants to be UPDATED, set state to Reminder vaules
    if (this.props.modalAction === "UPDATE") {
      const selectedReminder = this.props.reminders.filter(
        (reminder) => reminder.id === this.props.id
      );

      // Setting state with selected reminder
      this.state.reminder.id = selectedReminder[0].id;
      this.state.reminder.reminder = selectedReminder[0].reminder;
      this.state.reminder.user = selectedReminder[0].user;
      this.state.reminder.city = selectedReminder[0].city;
      this.state.reminder.date = selectedReminder[0].date;
      this.state.reminder.month = selectedReminder[0].month;
      this.state.reminder.year = selectedReminder[0].year;
      this.state.reminder.time = selectedReminder[0].time;
      this.state.reminder.color = selectedReminder[0].color;
    }
  }

  // Input handlers
  handleReminderChange = (event) => {
    const reminder = { ...this.state.reminder, reminder: event.target.value };
    this.setState({ reminder });
  };

  handleUserChange = (event) => {
    const reminder = { ...this.state.reminder, user: event.target.value };
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

  handleColorChange = (color) => {
    const reminder = { ...this.state.reminder, color: color };
    this.setState({ reminder });
  };

  // Handling Reminder Creation
  handleSubmitCreate = (event) => {
    event.preventDefault();

    // Setting id and date to new reminder
    this.state.reminder.id = this.props.date * Math.floor(Math.random() * 100);
    this.state.reminder.date = this.props.date;
    this.state.reminder.month = this.props.month;
    this.state.reminder.year = this.props.year;

    // Correct info check of reminder
    if (checkInfo(this.state.reminder) === "TRUE") {
      this.props.onCreateReminder(this.state.reminder);
      alert("A new reminder was added");
      this.props.onModalChange(null);

      // Resetting input values
      this.setState({
        reminder: {
          id: 0,
          reminder: "",
          user: "",
          city: "",
          date: 0,
          month: 0,
          year: 0,
          time: "",
          color: "",
        },
      });
    } else {
      alert(checkInfo(this.state.reminder));
    }
  };

  // Handling Reminder Update
  handleSubmitUpdate = (event) => {
    event.preventDefault();

    // Correct info check of reminder
    if (checkInfo(this.state.reminder) === "TRUE") {
      this.props.onUpdateReminder(this.state.reminder);
      alert("Reminder updated succesfully");
      this.props.onModalChange(null);

      // Resetting input values
      this.setState({
        reminder: {
          id: 0,
          reminder: "",
          user: "",
          city: "",
          date: 0,
          month: 0,
          year: 0,
          time: "",
          color: "",
        },
      });
    } else {
      alert(checkInfo(this.state.reminder));
    }
  };

  // Handling Reminder Delete
  handleDelete(id) {
    this.props.onDeleteReminder(id);
    alert("Reminder deleted succesfully");
    this.props.onModalChange(null);
  }

  render() {
    const { modalStatus, modalAction } = this.props;

    // If we'll create a new reminder
    if (modalStatus && modalAction === "CREATE") {
      // If Escp is pressed, exit modal
      window.onkeydown = (e) => {
        if (e.key === "Escape") {
          this.props.onModalChange(null);
        }
      };

      return ReactDOM.createPortal(
        <div id="modal">
          <div className="modal-outside">
            <div className="modal-inside">
              <form className="modal-form" onSubmit={this.handleSubmitCreate}>
                <h2 class="modal-title">Create Reminder</h2>
                <hr style={{ marginBottom: "20px" }} />

                {/* Reminder */}
                <b>
                  <p className="modal-subtitle">Reminder</p>
                </b>
                <input
                  className="modal-input-subtitle"
                  type="text"
                  onChange={this.handleReminderChange}
                  value={this.state.reminder.reminder}
                  placeholder="Make dinner"
                />

                {/* User */}
                <b>
                  <p className="modal-user">User</p>
                </b>
                <input
                  className="modal-input-user"
                  type="text"
                  onChange={this.handleUserChange}
                  value={this.state.reminder.user}
                  placeholder="Camilo"
                />

                {/* City */}
                <b>
                  <p className="modal-city">City</p>
                </b>
                <input
                  className="modal-input-city"
                  type="text"
                  onChange={this.handleCityChange}
                  value={this.state.reminder.city}
                  placeholder="Medellin"
                />

                {/* Time */}
                <b>
                  <p className="modal-time">Time</p>
                </b>
                <input
                  className="modal-input-time"
                  type="time"
                  onChange={this.handleTimeChange}
                  value={this.state.reminder.time}
                />

                {/* Color Pick */}
                <div
                  className="modal-input-color"
                  style={{ color: this.state.reminder.color }}
                >
                  <b>Selected color</b>
                </div>
                <ColorPick onColorClick={this.handleColorChange} />

                {/* Update Reminder */}
                <input
                  className="modal-input-save"
                  type="submit"
                  value="Create Reminder"
                />
              </form>
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      );

      // If we'll edit an existing Reminder
    } else if (modalStatus && modalAction === "UPDATE") {
      // If Escp is pressed, exit modal
      window.onkeydown = (e) => {
        if (e.key === "Escape") {
          this.props.onModalChange(null);
        }
      };
      return ReactDOM.createPortal(
        <div id="modal">
          <div class="modal-outside">
            <div class="modal-inside">
              <form onSubmit={this.handleSubmitUpdate}>
                <h2>Update Reminder</h2>
                <hr style={{ marginBottom: "20px" }} />

                {/* Reminder */}
                <b>
                  <p className="modal-subtitle">Reminder</p>
                </b>
                <input
                  className="modal-input-subtitle"
                  type="text"
                  onChange={this.handleReminderChange}
                  value={this.state.reminder.reminder}
                />

                {/* User */}
                <b>
                  <p className="modal-user">User</p>
                </b>
                <input
                  className="modal-input-user"
                  type="text"
                  onChange={this.handleUserChange}
                  value={this.state.reminder.user}
                />

                {/* City */}
                <b>
                  <p className="modal-city">City</p>
                </b>
                <Weather currCity={this.state.reminder.city} />
                <input
                  className="modal-input-city"
                  type="text"
                  onChange={this.handleCityChange}
                  value={this.state.reminder.city}
                />

                {/* Time */}
                <b>
                  <p className="modal-time">Time</p>
                </b>
                <input
                  className="modal-input-time"
                  type="time"
                  onChange={this.handleTimeChange}
                  value={this.state.reminder.time}
                />

                {/* Color Pick */}
                <div
                  className="modal-input-color"
                  style={{ color: this.state.reminder.color }}
                >
                  <b>Selected color</b>
                </div>
                <ColorPick onColorClick={this.handleColorChange} />

                {/* Update Reminder */}
                <input
                  className="modal-input-save"
                  type="submit"
                  value="Update Reminder"
                />

                {/* Delete reminder*/}
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    this.handleDelete(this.state.reminder.id);
                  }}
                >
                  <i>
                    <small>Delete this reminder</small>
                  </i>
                </p>
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
    onCreateReminder: (reminder) => {
      dispatch(createReminder(reminder));
    },
    onUpdateReminder: (reminder) => {
      dispatch(updateReminder(reminder.id, reminder));
    },
    onDeleteReminder: (id) => {
      dispatch(deleteReminder(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
