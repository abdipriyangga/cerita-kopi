/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { CoffeeLogo, Search, Message, ProfileNav } from "../assets";

function NavbarMain({ home, product, cart, history }) {
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
              <Link className={product} to="">Product</Link>
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
            <Link>
              <img src={Search} alt="" />
            </Link>
          </div>
          <div>
            <Link>
              <img src={Message} alt="Massege " />
            </Link>
          </div>
          <div >
            <Link>
              <img src={ProfileNav} className="rounded-full" alt="Profile Nav" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarMain;
