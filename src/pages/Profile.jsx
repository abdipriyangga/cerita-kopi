/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useState, useEffect, useRef } from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import { ProfileNav } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { authLogout } from "../redux/actions/auth";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/users";
import { getHistory } from "../redux/actions/transaction";
import { updateUser } from "../redux/actions/profile";
const Profile = (props) => {
  const { users } = props.users;
  const { history } = props.transaction;
  const fileInputHide = useRef(null);
  const totalHistoryTrx = history?.length;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [file, setFile] = useState(null);

  const onHandleClick = (e) => {
    setFile(fileInputHide.current.click());
  };
  useEffect(() => {
    console.log("file: ", file);
    props.getUser(props.auth.token);
    props.getHistory(props.auth.token);
    users.map((user) => {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
      setPhoneNumber(user.phone_number);
      setFile(user.images || ProfileNav);
      console.log("data user useEffect", user);
    });
  }, []);
  const updateData = {
    name,
    email,
    address,
    phone_number,
    file
  };

  const formData = (e) => {
    console.log("data dari pages Formdata: ", updateData);
    e.preventDefault();
    props.updateUser(updateData, props.auth.token);
  };
  return (
    <>
      <header className="px-32 bg-white">
        <NavbarMain />
      </header>
      <main className="bg-profile bg-cover w-full h-105 bg-center px-48 py-5 flex-row flex">
        <section>
          <h3 className="w-56 font-bold text-3xl text-white py-10">User Profile</h3>
          <section className="flex flex-row ">
            {users.map((user) => {
              return (
                <>
                  <div className="bg-white w-60 h-65 rounded-md border-b-8 border-yellow-900">
                    <div className="flex justify-center mt-10">
                      <img src={user.images === null || undefined ? ProfileNav : user.images} className="md:w-20 w-14 md:h-20 h-14 rounded-full" />
                      <button onClick={onHandleClick} className="rounded-full bg-yellow-900 w-7 h-7 ml-14 mt-14 absolute">
                        <FontAwesomeIcon icon={faPencilAlt} className="text-white w-10 mt-1 text-base" />
                      </button>
                    </div>
                    <div className="text-center mt-4">
                      <input
                        type="file"
                        ref={fileInputHide}
                        onChange={(value) => setFile(value.target.files[0])}
                        style={{ display: "none" }}
                      />
                      <p className="font-bold text-sm">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-5 text-center font-semibold">Has been order {totalHistoryTrx} products.</p>
                  </div>
                  <div className="bg-white w-101 h-65 mx-5 px-10 rounded-md border-b-8 border-yellow-900">
                    <div className="py-5 ml-5 flex flex-row">
                      <h4 className="text-lg text-gray-600 font-semibold">Contacts</h4>
                      <button className="rounded-full bg-yellow-900 w-7 h-7 ml-95">
                        <FontAwesomeIcon icon={faPencilAlt} className="text-white w-10 mt-1 text-base" />
                      </button>
                    </div>
                    <div className="flex flex-row">
                      <div className="ml-5">
                        <p className="text-sm text-gray-500 font-medium mb-2">Email Address: </p>
                        <input className="border-b-2 border-black w-56 focus:outline-none" type="text" value={email} onChange={(value) => setEmail(value.target.value)} />
                      </div>
                      <div className="ml-7">
                        <p className="text-sm text-gray-500 font-medium mb-2">Mobile Number: </p>
                        <input className=" border-b-2 border-black w-56 focus:outline-none" type="text"
                          value={phone_number} onChange={(value) => setPhoneNumber(value.target.value)} />
                      </div>
                    </div>
                    <div className="ml-7 mt-7">
                      <p className="text-sm text-gray-500 font-medium mb-2">Delivery Address: </p>
                      <input className=" border-b-2 border-black w-56 focus:outline-none" type="text" value={address} onChange={(value) => setAddress(value.target.value)} />
                    </div>
                  </div>
                </>
              );
            })}
          </section>
          <section className="flex flex-row">
            <div className="bg-white w-99 h-82 my-20 rounded-md border-b-8 border-yellow-900">
              <div className="py-5 ml-5 flex flex-row">
                <h4 className="text-lg text-gray-600 font-semibold">Details</h4>
                <button className="rounded-full bg-yellow-900 w-7 h-7 ml-95">
                  <FontAwesomeIcon icon={faPencilAlt} className="text-white w-10 mt-1 text-base" />
                </button>
              </div>
              {users.map((user) => {
                console.log("====================================");
                console.log("users", user);
                console.log("====================================");
                return (
                  <>
                    <div className="flex flex-row">
                      <div className="ml-5">
                        <p className="text-sm text-gray-500 font-medium mb-2">Display Name: </p>
                        <input className="border-b-2 border-black w-56 focus:outline-none" value={name} onChange={(value) => setName(value.target.value)} />
                      </div>
                      <div className="ml-7">
                        <p className="text-sm text-gray-500 font-medium mb-2">DD/MM/YY </p>
                        <input className=" border-b-2 border-black w-56 focus:outline-none" type="date" />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="ml-7 mt-7">
                        <p className="text-sm text-gray-500 font-medium mb-2">First Name: </p>
                        <input className=" border-b-2 border-black w-56 focus:outline-none" value={user.name} />
                      </div>
                      <div className="mt-6">
                        <div className="flex flex-row items-center ml-5 space-x-4">
                          <label className="radioGender m-3 ">
                            <input type="radio" name="gender" />
                            <span className="item"></span>
                          </label>
                          <span className="font-semibold">Male</span>
                        </div>
                        <div className="flex flex-row items-center ml-5 space-x-4">
                          <label className="radioGender m-3 ">
                            <input type="radio" name="gender" />
                            <span className="item"></span>
                          </label>
                          <span className="font-semibold">Female</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-7 mt-7">
                      <p className="text-sm text-gray-500 font-medium mb-2">Last Name: </p>
                      <input value={user.name} className=" border-b-2 border-black w-56 focus:outline-none" />
                    </div>
                  </>
                );
              })}

            </div>
            <div className="mx-20 my-20 w-72">
              <div className=" mx-8 w-2/3">
                <h4 className="text-white font-semibold text-center">Do you want to save the change?</h4>
              </div>
              <div className="-ml-10">
                <button className="focus:outline-none mt-10 w-full text-white font-bold text-sm bg-yellow-900 px-24 py-4 rounded-lg lg:ml-0" onClick={formData}>Save Change</button>
              </div>
              <div className="-ml-10">
                <button className="focus:outline-none mt-5 w-full text-white font-bold text-sm bg-yellow-600 px-24 py-4 rounded-lg lg:ml-0">Cancel</button>
              </div>
              <div className="-ml-10">
                <button className="focus:outline-none mt-5 w-full text-yellow-900 font-bold text-sm bg-yellow-50 px-24 py-4 rounded-lg lg:ml-0">Edit Password</button>
              </div>
              <div className="-ml-10">
                <button onClick={props.authLogout} className="focus:outline-none mt-5 w-full text-yellow-900 font-bold text-sm bg-yellow-50 px-24 py-4 rounded-lg lg:ml-0">Logout</button>
              </div>
            </div>
          </section>
        </section>
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
  transaction: state.transaction,
  profile: state.profile
});
const mapDispatchToProps = {
  authLogout,
  getUser,
  getHistory,
  updateUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);