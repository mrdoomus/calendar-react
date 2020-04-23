import { createStore } from "redux";
import calendarReducers from "../reducers";

const appStore = createStore(calendarReducers);

export { appStore };
