import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import mainReducer from "./redux/reducers";
import * as serviceWorker from "./serviceWorker";

const storage = createStore(mainReducer);

ReactDOM.render(
  <Provider store={storage}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
