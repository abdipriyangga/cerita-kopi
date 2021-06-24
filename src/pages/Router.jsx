import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Products";
import ProductDetail from "./ProductDetail";
import Register from "./Register";
import Login from "./Login";

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/items" exact component={Product} />
      <Route path="/items/:id" component={ProductDetail} />
      <Route path="/signup" component={Register}/>
      <Route path="/signin" component={Login} />
    </BrowserRouter>
  );
}

export default Router;
