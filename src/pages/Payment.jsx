/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavbarMain from "../components/NavbarMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { authLogout } from "../redux/actions/auth";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/users";
import CardItemTransaction from "../components/CardItemTransaction";
import { createTransaction } from "../redux/actions/transaction";
import { Bank, Card, Cod } from "../assets";
import { Link } from "react-router-dom";
// import { ProductImg } from "../assets";
// const { REACT_APP_URL: URL } = process.env;
const Payment = (props) => {
  const onCheckout = () => {
    const { items } = props.carts;
    const { token } = props.auth;
    props.createTransaction(items, token);
  };
  // const data = items;
  // console.log("ini data item: ", data);
  const { users } = props.users;
  const { items } = props.carts;
  const price = items.map((data) => parseInt(data.price) * parseInt(data.amount));
  const totalItem = price.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
  const tax = totalItem * (10 / 100);
  const shippingFee = 10000;
  const finalPrice = totalItem + tax + shippingFee;
  console.log("====================================");
  console.log("item dr cart: ", items);
  console.log("totalItem: ", totalItem);
  // console.log("data: ", data)
  console.log("====================================");
  useEffect(() => {
    props.getUser(props.auth.token);
    console.log("item dr cart useEfect: ", items);
  }, []);

  return (
    <>
      <header className="px-32 sticky top-0 bg-white">
        <NavbarMain />
      </header>
      <main className="bg-payment bg-cover w-full h-105 bg-center px-52 flex-row flex">
        <section>
          <h3 className="w-56 font-bold text-3xl text-white py-10">Checkout your item now!</h3>
          {items.length < 1 ? (
            <div className="w-83 bg-white h-98 py-10 rounded-md my-3">
              <h4 className="font-bold text-lg text-center">Sorry you dont have any order</h4>
            </div>
          ) : (
            <>
              <div className="w-83 bg-white h-98 py-10 rounded-md my-3">
                <h4 className="font-bold text-lg text-center">Order Summary</h4>
                <div className="mt-0">
                  {items.map((product) => {
                    console.log("====================================");
                    console.log("this is product name: ", product);
                    console.log("====================================");
                    return <CardItemTransaction
                      img={product?.images}
                      name={product?.item_name}
                      quantity={product?.amount}
                      size={product?.name}
                      price={product?.price.toLocaleString("en")}
                    />;
                  }
                  )}
                </div>
                <div className="flex flex-row items-center justify-between mt-5 md:px-10 px-5">
                  <div className="leading-relaxed flex-1">
                    <p>SUBTOTAL</p>
                    <p>TAX & FEES</p>
                    <p>SHIPPING</p>
                  </div>
                  <div className="leading-relaxed ">
                    <p>IDR {totalItem.toLocaleString("en")}</p>
                    <p>IDR {tax.toLocaleString("en")}</p>
                    <p>IDR {shippingFee.toLocaleString("en")}</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between md:px-10 px-5 text-yellow-900 font-bold text-2xl pt-5">
                  <p>TOTAL</p>
                  <p>IDR {finalPrice.toLocaleString("en")}</p>
                </div>
              </div>
            </>
          )}
        </section>
        <aside>
          <section className="mt-44 h-48 mx-20">
            {items.length < 1 ? <div></div> :
              <>
                <div className="flex flex-row mb-1">
                  <h5 className="text-white text-bold text-sm">Address details</h5>
                  <Link to="/profile">
                    <FontAwesomeIcon icon={faPencilAlt} className="text-white ml-60 mt-1 text-base" />
                  </Link>
                </div>
                {users.map((user) => {
                  return (
                    <section className="bg-white w-83 h-48 rounded-md py-5 px-8">
                      <div>
                        <span className="font-bold">Delivery</span> <span>to {user.name} </span>
                        <p>{user.address} </p>
                      </div>
                      <div className="mt-8">
                        <span>{user.phone_number}</span>
                      </div>
                    </section>
                  );
                })}
              </>
            }

          </section>

          <section className="mt-8 h-48 mx-20">
            <div className="flex flex-row mb-1">
              <h5 className="text-white text-bold">Payment Methods</h5>
            </div>
            <section className="bg-white w-83 h-56 rounded-md py-5 px-8">
              <div className="flex flex-row items-center space-x-4">
                <label className="radio mb-8">
                  <input type="radio" name="payment" />
                  <span className="item"></span>
                </label>
                <div className=" flex flex-row items-center border-b-2 pb-3 mb-3 flex-1">
                  <div className="bg-yellow-600 w-10 h-10 flex justify-center items-center rounded-lg ">
                    <img src={Card} alt="icon Card" />
                  </div>
                  <p className="ml-4 text-lg">Card</p>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <label className="radio mb-8">
                  <input type="radio" name="payment" />
                  <span className="item"></span>
                </label>
                <div className=" flex flex-row items-center border-b-2 pb-3 mb-3 flex-1">
                  <div className="bg-yellow-900 w-10 h-10 flex justify-center items-center rounded-lg ">
                    <img src={Bank} alt="icon Bank" />
                  </div>
                  <p className="ml-4 text-lg">Bank Account</p>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <label className="radio mb-8">
                  <input type="radio" name="payment" />
                  <span className="item"></span>
                </label>
                <div className=" flex flex-row items-center border-b-2 pb-3 mb-3 flex-1">
                  <div className="bg-yellow-400 w-10 h-10 flex justify-center items-center rounded-lg ">
                    <img src={Cod} alt="icon Cod" />
                  </div>
                  <span className="ml-4 text-lg">Cash on Delivery</span>
                </div>
              </div>
            </section>
          </section>
          <div className="ml-12">
            <button onClick={onCheckout} className="focus:outline-none mt-20 text-white font-bold text-lg bg-yellow-900 px-28 py-4 rounded-lg lg:ml-9">Confirm and Pay</button>
            <button onClick={props.authLogout} className="focus:outline-none mt-3 text-white font-bold text-lg bg-yellow-900 px-28 py-4 rounded-lg lg:ml-9">Logout</button>
          </div>

        </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
  carts: state.carts,
  transaction: state.transaction
});
const mapDispatchToProps = {
  authLogout,
  getUser,
  createTransaction
};
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
