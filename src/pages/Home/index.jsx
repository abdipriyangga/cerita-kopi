import React from 'react'
import { Search } from '../../assets'
import NavbarMain from '../../components/Navbar/NavbarMain'

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
        <div className=" flex-col pt-5">
          <div className="bg-gray-300 flex flex-row items-center space-x-3 px-5 py-4 w-60 rounded-full">
            <button className="focus:outline-none">
              <img src={Search} alt="icon search" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className=" text-gray-900 bg-gray-300 focus:outline-none font-bold text-sm"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
