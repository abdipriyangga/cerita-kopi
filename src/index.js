import React from "react";
import ReactDOM from "react-dom";
import Router from "./pages/Router";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

