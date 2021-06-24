import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faMapMarkedAlt, faHeart, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Teamwork } from "../assets";

function Home() {
  return (
    <div>
      <header className="px-32 sticky top-0 bg-white">
        <NavbarMain
          home="text-yellow-900 font-bold"
          product="text-gray-500"
          cart="text-gray-500"
          history="text-gray-500"
        />
      </header>
      <section className="bg-bg-banner bg-cover w-full h-screen bg-center px-32 flex-row flex">
        <div className="pt-20 tracking-wide flex-1 flex-col space-y-7">
          <h2 className="text-white text-5xl font-bold leading-tight">
            Start Your Day with <br /> Coffee and Good Meals
          </h2>
          <p className="text-white text-lg font-bold leading-relaxed tracking-wide ">
            We provide high quality beans, good taste, and healthy <br />
              meals made by love just for you. Start your day with us <br /> for
              a bigger smile!
          </p>
          <div className="w-60">
            <button className="focus:outline-none text-red-900 font-bold text-lg bg-yellow-400 px-16 py-4 rounded-lg w-full">Get Started</button>
          </div>
        </div>
        <div className="flex-col pt-5">
          <div className="bg-gray-300 flex flex-row items-center space-x-3 p-2 py-4 w-60 rounded-full">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search"
              className=" w-44 bg-gray-300 text-gray-900 focus:outline-none font-bold text-sm"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex -mt-20 w-2/3 h-40 shadow-lg items-center bg-white rounded-lg justify-center space-x-24 divide-x divide-gray-300">
          <div className="flex flex-row justify-center items-center space-x-5">
            <div className="flex bg-yellow-400 w-10 h-10 rounded-full justify-center items-center">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <p className="font-bold text-lg">90+</p>
              <p className="text-gray-400">Staff</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-5">
            <div className="flex bg-yellow-400 w-10 h-10 ml-10 rounded-full justify-center items-center">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </div>
            <div>
              <p className="font-bold text-lg">30+</p>
              <p className="text-gray-400">Stores</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-5">
            <div className="flex bg-yellow-400 w-10 h-10 ml-10 rounded-full justify-center items-center">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div>
              <p className="font-bold text-lg">800+</p>
              <p className="text-gray-400">Customers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row p-20">
        <div>
          <img src={Teamwork} alt="images" />
        </div>
        <div className="flex flex-col">
          <div className="w-83 font-bold ml-28 p-10">
            <p className="text-2xl">We Provide Good Coffee and Healthy Meals</p>
          </div>
          <div className="w-auto ml-36 ">
            <p className="text-sm w-83">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            <ul className="mt-10 space-y-5">
              <div className="flex space-x-5">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                <li className="-mt-1">High quality beans</li>
              </div>
              <div className="flex space-x-5">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                <li className="-mt-1">Healthy meals, you can request the ingredients</li>
              </div>
              <div className="flex space-x-5">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                <li className="-mt-1">Chat with our staff to get better experience for ordering</li>
              </div>
              <div className="flex space-x-5">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                <li className="-mt-1">Free member card with a minimum purchase of IDR 200.000.</li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
