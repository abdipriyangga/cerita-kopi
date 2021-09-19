/* eslint-disable react/prop-types */
import React, {useState, useEffect} from "react";
import { CoffeeLogo, Google } from "../assets";
import {Link} from "react-router-dom";
import { toggleAuth, authRegister } from "../redux/actions/auth";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom";

function Register(props) {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const { token } = props.auth;
  useEffect(() => {
    props.toggleAuth();
    if (token !== null) {
      history.push("/home");
    }
  }, []);
  const onRegister = (e) => {
    e.preventDefault();
    props.authRegister(email, password, phone_number);
    console.log(email);
    console.log(password);
    console.log(phone_number);
  };

  
  return (
    <>
      <div className="flex flex-row">
        <div className="bg-auth bg-cover w-1/2 h-105"></div>
        <div>
          <div className="flex flex-row space-x-96 p-10">
            <Link to="/">
              <div className="w-40 flex space-x-3 justify-center items-center font-bold">
                <img src={CoffeeLogo} alt="logo-kopi" />
                <p>Cerita Kopi</p>
              </div>
            </Link>
            <div className="bg-yellow-400 p-10 py-3 rounded-full font-bold text-yellow-900 shadow-lg">
              <Link to="/login">
                Login
              </Link>
            </div>
          </div>
          <div>
            <p className="text-yellow-900 font-bold text-xl text-center">Sign Up</p>
          </div>
          <div className="p-12 mx-8">
            <form onSubmit={onRegister} className="space-y-8">
              <div>
                <label className="text-gray-500 font-bold text-lg">Email Address :
                  <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className="w-44 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="Name" />
                  </div>
                </label>
              </div>
              <div>
                <label className="text-gray-500 font-bold text-lg">Password :
                  <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="w-44 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="Password" />
                  </div>
                </label>
              </div>
              <div>
                <label className="text-gray-500 font-bold text-lg">Phone Number:
                  <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                    <input onChange={(e) => setPhoneNumber(e.target.value)} type="phone" className="w-44 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="Phone Number" />
                  </div>
                </label>
              </div>
              <div>
                <button className="focus:outline-none text-red-900 font-bold text-lg bg-yellow-400 py-4 rounded-lg w-full" type="submit">Sign Up</button>
                <div className="py-3">
                  <button className="focus:outline-none text-black font-bold text-lg bg-white border-2 border-gray-400 py-4 rounded-lg w-full shadow-lg">
                    <img src={Google} alt="google-logo" className="px-40" />
                    <p className="-mt-7">Sign Up with Google</p></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section className="flex justify-center">
        <div className="flex -mt-20 w-2/3 h-44 shadow-lg bg-white rounded-lg space-x-24">
          <div className="flex flex-row space-x-5 p-10 space-x-64 ">
            <div>
              <p className="font-bold text-lg w-40">Get your member card now!</p>
              <p className="text-sm text-gray-400 mt-4">Lets join with our member and enjoy the deals.</p>
            </div>
            <div className="mt-5">
              <button className="focus:outline-none text-red-900 font-bold text-lg bg-yellow-400 py-5 rounded-lg w-52">Create Now!</button>
            </div>
          </div>
        </div>
      </section>
      <div className="-mt-20">
        <Footer />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = { toggleAuth, authRegister };
export default connect(mapStateToProps, mapDispatchToProps)(Register);
