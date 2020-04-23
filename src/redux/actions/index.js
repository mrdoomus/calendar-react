import * as types from "./types";

export const createReminder = (reminder) => ({
  type: types.CREATE_REMINDER,
  reminder,
});

export const updateReminder = (id, reminder) => ({
  type: types.UPDATE_REMINDER,
  id,
  reminder,
});

export const deleteReminder = (id) => ({
  type: types.DELETE_REMINDER,
  id,
});

export const deleteAllReminders = (date) => ({
  type: types.DELETE_ALL_REMINDERS,
  date,
});
