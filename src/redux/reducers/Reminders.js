import * as types from "../actions/types";

const reminders = (state = [], action) => {
  switch (action.type) {
    // Creates a new state with passed object
    case types.CREATE_REMINDER:
      return [
        ...state,
        {
          id: action.reminder.id,
          title: action.reminder.title,
          user: action.reminder.user,
          city: action.reminder.city,
          date: action.reminder.date,
          month: action.reminder.month,
          time: action.reminder.time,
          color: action.reminder.color,
        },
      ];
    // Returns object with equeals passed id
    case types.UPDATE_REMINDER:
      return state.map((reminder) => {
        if (reminder.id === action.id) {
          return action.reminder;
        }
        return reminder;
      });
    // Returns every object, except the one with the id passed
    case types.DELETE_REMINDER:
      return state.filter((reminder) => reminder.id !== action.id);
    default:
      return state;
  }
};

export default reminders;
