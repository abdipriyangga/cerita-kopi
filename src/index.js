import React from "react";
import ReactDOM from "react-dom";
import Router from "./pages/Router";
import "./index.css";
import { Provider } from "react-redux";
import reduxConfig from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const redux = reduxConfig();
ReactDOM.render(
  <Provider store={redux.store}>
    <PersistGate persistor={redux.persistor}>
      <Router />
    </PersistGate>
    {/* <Router /> */}
  </Provider>,
  document.getElementById("root")
);

