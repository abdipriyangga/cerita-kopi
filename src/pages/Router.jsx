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
        <Route path="/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
