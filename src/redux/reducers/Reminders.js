import * as types from "../actions/types";

const reminders = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_REMINDER:
      return [
        ...state,
        {
          id: action.reminder.id,
          title: action.reminder.title,
          city: action.reminder.city,
          date: action.reminder.date,
          month: action.reminder.month,
          time: action.reminder.time,
          color: action.reminder.color,
        },
      ];
    case types.UPDATE_REMINDER:
      return state.map((reminder) => {
        if (reminder.id === action.id) {
          return action.reminder;
        }
        return reminder;
      });
    case types.DELETE_REMINDER:
      return state.filter((reminder) => reminder.id !== action.id);
    default:
      return state;
  }
};

export default reminders;
