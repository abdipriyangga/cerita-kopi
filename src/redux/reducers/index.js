import { combineReducers } from "redux";
import carts from "./carts";
import auth from "./auth";
import chats from "./chats";
import users from "./users";
import products from "./products";
import category from "./category";
import payment from "./payment";
import transaction from "./transaction";
import profile from "./profile";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistAuth = {
  storage,
  key: "auth",
};
const reducer = combineReducers({
  carts,
  auth: persistReducer(persistAuth, auth),
  chats,
  users: users,
  products,
  category,
  payment,
  transaction,
  profile
});

export default reducer;
