/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CoffeeLogo, Message, ProfileNav } from "../assets";
import Search from "./Search";
import { getUser } from "../redux/actions/users";

function NavbarMain({ home, product, cart, history, auth, users, img,
  onChange,
  onKeyDown,
  value,
  onClickSearch }) {
  useEffect(() => {
    console.log("====================================");
    console.log("user: ", users.users);
    console.log("====================================");
    getUser(auth.token);
  });

  return (
    <>
      <nav className="flex flex-row py-10 justify-between items-center">
        <Link to="/">
          <div className="flex space-x-2">
            <img src={CoffeeLogo} alt="Coffee Logo" />
            <span className="text-lg font-bold">Cerita Kopi</span>
          </div>
        </Link>
        <div>
          <ul className="flex space-x-7 text-md">
            <li>
              <Link className={home} to="/">Home</Link>
            </li>
            <li>
              <Link className={product} to="/items">Product</Link>
            </li>
            <li>
              <Link className={cart} to="/payment">Your Cart</Link>
            </li>
            <li>
              <Link className={history} to="/history">History</Link>
            </li>

          </ul>
        </div>
        <div className="flex flex-row items-center space-x-5">
          {auth.token !== null ? (
            <>
              <div>
                <Search onClickSearch={onClickSearch} value={value} onKeyDown={onKeyDown} onChange={onChange} />
              </div>
              <div>
                <Link to="/chats">
                  <img src={Message} alt="Massege " />
                </Link>
              </div>
              <div >
                <Link to="/profile">
                  {users.users.map((user) => {
                    return user.images !== null ? (
                      <img key={user.id} src={user.images || ProfileNav} className="rounded-full w-12 h-12" alt="Profile Nav" />
                    ) : (
                      <img key={user.id} src={ProfileNav} className="rounded-full w-12 h-12" alt="Profile Nav" />
                    );
                  })}
                  {/* <img src={ProfileNav} className="rounded-full" alt="Profile Nav" /> */}
                </Link>
              </div>

            </>
          ) : (
            <>
              <div>
                <Link className="font-medium" to="/login">
                  Login
                </Link>
              </div>
              <div>
                <Link className="bg-yellow-400 px-8 py-3 rounded-full font-medium text-yellow-900"
                  to="/signup">
                  SignUp
                </Link>
              </div>
            </>
          )};
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users
});

const mapDispatchToProps = {
  getUser
};
export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain);
