import React from 'react'
import { Link } from 'react-router-dom'
import {CoffeeLogo} from '../../assets'

function NavbarMain({home, product, cart, history}) {
  return (
    <>
      <nav className="flex flex-row py-10 justify-between items-center">
        <div className="flex space-x-2">
          <img src={CoffeeLogo} alt="Coffee Logo" />
          <span className="text-lg font-bold">Cerita Kopi</span>
        </div>
        <div>
          <ul className="flex space-x-7 text-md">
            <li>
              <Link className={home} to="/">Home</Link>
            </li>
            <li>
              <Link className={product} to="/items">Product</Link>
            </li>
            <li>
              <Link className={cart} to="">Your Cart</Link>
            </li>
            <li>
              <Link className={history} to="">History</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <div>
            <Link className="font-medium" to="/login">
              Login
            </Link>
          </div>
          <div>
            <Link className="bg-yellow-400 px-8 py-3 rounded-full font-medium text-yellow-900"
              to="/register">
              SignUp
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarMain
