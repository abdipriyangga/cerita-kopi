import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import { ProfileNav } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  return (
    <>
      <header className="px-32 sticky top-0 bg-white">
        <NavbarMain />
      </header>
      <main className="bg-profile bg-cover w-full h-105 bg-center px-48 py-5 flex-row flex">
        <section>
          <h3 className="w-56 font-bold text-3xl text-white py-10">User Profile</h3>
          <section className="flex flex-row ">
            <div className="bg-white w-60 h-60 rounded-md border-b-8 border-yellow-900">
              <div className="flex justify-center mt-10">
                <img src={ProfileNav} className="md:w-20 w-14 md:h-20 h-14 rounded-full" />
                <button className="rounded-full bg-yellow-900 w-7 h-7 ml-14 mt-14 absolute">
                  <FontAwesomeIcon icon={faPencilAlt} className="text-white w-10 mt-1 text-base" />
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="font-bold text-sm">Zula</p>
                <p className="text-xs text-gray-400">email</p>
              </div>
              <p className="text-sm text-gray-400 mt-5 text-center font-semibold">Has been order 15 products.</p>
            </div>
            <div className="bg-white w-99 h-60 mx-5 rounded-md border-b-8 border-yellow-900">

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

export default Profile;
