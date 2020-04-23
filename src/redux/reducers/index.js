import { combineReducers } from "redux";
import reminders from "./Reminders";

const calendarStore = combineReducers({
  reminders,
});

export default calendarStore;
