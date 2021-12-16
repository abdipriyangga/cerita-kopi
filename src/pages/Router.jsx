import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Product from "./Products";
import ProductDetail from "./ProductDetail";
import Register from "./Register";
import Login from "./Login";
import ForgotPass from "./ForgotPass";
import Chats from "./Chats";
import Payment from "./Payment";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "./Profile";
import History from "./History";
import HistoryDetail from "./HistoryDetail";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/items" exact component={Product} />
        <Route path="/items/:id" component={ProductDetail} />
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={ForgotPass} />
        <Route path="/chats" component={Chats} />
        {/* <Route path="/payment" component={Payment} /> */}
        <PrivateRoute component={Payment} path="/payment" exact />
        <PrivateRoute component={Profile} path="/profile" exact />
        <PrivateRoute component={History} path="/history" exact />
        <PrivateRoute component={HistoryDetail} path="/history/:id" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
