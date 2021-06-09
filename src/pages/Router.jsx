import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import ProductDetail from './ProductDetail'

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/items" exact component={Product} />
      <Route path="/items/:id" component={ProductDetail} />
    </BrowserRouter>
  )
}

export default Router
