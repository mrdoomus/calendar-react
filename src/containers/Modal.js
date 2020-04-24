import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColorPick from "../components/ColorPick";
import Weather from "../components/Weather";
import { connect } from "react-redux";
import {
  createReminder,
  deleteReminder,
  updateReminder,
} from "../redux/actions/index";

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

    // Default state
    this.state = {
      reminder: {
        id: 0,
        title: "",
        city: "",
        date: 0,
        month: 0,
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
      this.state.reminder.title = selectedReminder[0].title;
      this.state.reminder.city = selectedReminder[0].city;
      this.state.reminder.date = selectedReminder[0].date;
      this.state.reminder.month = selectedReminder[0].month;
      this.state.reminder.time = selectedReminder[0].time;
      this.state.reminder.color = selectedReminder[0].color;
    }
  }

  //
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

    // Correct info check of reminder
    if (checkInfo(this.state.reminder) === "TRUE") {
      this.props.onCreateReminder(this.state.reminder);
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
          title: "",
          city: "",
          date: 0,
          month: 0,
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
      return ReactDOM.createPortal(
        <div id="modal">
          <div class="modal-outside">
            <div class="modal-inside">
              <form onSubmit={this.handleSubmitCreate}>
                <h2>Create Reminder</h2>
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
                <p>Color</p>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    backgroundColor: this.state.reminder.color,
                  }}
                />
                <ColorPick onColorClick={this.handleColorChange} />
                <input type="submit" value="Save" />
              </form>
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      );

      // If we'll edit an existing Reminder
    } else if (modalStatus && modalAction === "UPDATE") {
      return ReactDOM.createPortal(
        <div id="modal">
          <div class="modal-outside">
            <div class="modal-inside">
              <form onSubmit={this.handleSubmitUpdate}>
                <h2>Edit Reminder</h2>
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
                <Weather currCity={this.state.reminder.city} />
                <p>Time</p>
                <input
                  type="time"
                  onChange={this.handleTimeChange}
                  value={this.state.reminder.time}
                />
                <p>Color</p>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    backgroundColor: this.state.reminder.color,
                  }}
                />
                <ColorPick onColorClick={this.handleColorChange} />
                <small
                  onClick={() => {
                    this.handleDelete(this.state.reminder.id);
                  }}
                >
                  Delete this reminder
                </small>
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
