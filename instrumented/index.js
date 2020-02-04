import React from "react";
import { render } from "react-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
