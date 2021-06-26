import { combineReducers } from "redux";
import carts from "./carts";
import auth from "./auth";

const reducer = combineReducers({
  carts,
  auth
});

export default reducer;
