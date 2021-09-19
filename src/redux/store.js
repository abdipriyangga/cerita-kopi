import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(
        thunk,
        logger
      )
    )
  );
  const persistor = persistStore(store);
  return { store, persistor };
};