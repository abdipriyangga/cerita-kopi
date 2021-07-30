/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { ProductCold } from "../assets";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import NavbarMain from "../components/NavbarMain";
import { addProducts } from "../redux/actions/carts";

const { REACT_APP_URL: URL } = process.env;

function ProductDetail(props) {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${URL}/items/${id}`)
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);
      });
  }, []);
  return (
    <> 
      <div className="bg-gray-200 h-full">
        <header className="px-32 sticky top-0 bg-white">
          <NavbarMain
            home="text-gray-500"
            product="text-yellow-900 font-bold"
            cart="text-gray-500"
            history="text-gray-500"
          />
        </header>
        <div className="p-10 mt-5 ml-20">
          <span>Favorite & Promo</span><span className="text-yellow-800"> {">"} {data.name}</span>
        </div>
        <section className="h-full">
          <div className="ml-10 space-x-24 flex flex-wrap ">
            <div className="">
              <img src={ProductCold} alt="product-image" className="rounded-full w-72 ml-20" />
              <div className="mt-5 ml-20">
                <p className="text-center text-4xl font-bold">Cold Brew</p>
                <p className="text-center text-xl font-medium">IDR 30.000</p>
              </div>
              <div className="ml-20 mt-10 space-y-5">
                <button className="focus:outline-none text-white font-bold text-lg bg-yellow-900 py-4 rounded-lg w-full">Add to Cart</button>
                <button className="focus:outline-none text-yellow-900 font-bold text-lg bg-yellow-400 py-4 rounded-lg w-full">Ask a Staff</button>
              </div>
            </div>
            <div>
              <div className="bg-white w-97 h-85 rounded-lg p-12 space-y-6">
                <p className="text-yellow-900 font-semibold">Delivery only on Monday to friday at  1 - 7 pm</p>
                <p className="text-yellow-900 font-medium">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                <p className="text-center font-bold text-md">Choose Size</p>
                <div className="space-x-8 mx-16">
                  <button className="focus:outline-none text-black font-bold text-lg bg-yellow-400 py-2 rounded-full w-12 h-12">
                    <p>R</p>
                  </button>
                  <button className="focus:outline-none text-black font-bold text-lg bg-yellow-400 py-2 rounded-full w-12 h-12">
                    <p>L</p>
                  </button>
                  <button className="focus:outline-none text-black font-bold text-lg bg-yellow-400 py-2 rounded-full w-12 h-12">
                    <p>XL</p>
                  </button>
                </div>
              </div>
              <div className="mt-10 space-y-8">
                <p className="text-center font-bold text-lg">Choose Delivery Methods</p>
                <div className="flex space-x-8 mx-16">
                  <button className="flex-none focus:outline-none text-white font-medium text-md bg-yellow-900 py-2 rounded-lg w-20 h-10">
                    <p>Dine in</p>
                  </button>
                  <button className="flex-grow focus:outline-none text-white font-medium text-md bg-yellow-900 py-2 rounded-lg w-32 h-10">
                    <p>Door Delivery</p>
                  </button>
                  <button className="flex-none focus:outline-none text-white font-medium text-md bg-yellow-900 py-2 rounded-lg w-20 h-10">
                    <p>Pickup</p>
                  </button>
                </div>
                <div className="flex">
                  <p className="mx-16">Set Time: </p>
                  <div className="-ml-10 border-b-2 border-gray-400 mb-32">
                    <input className="focus:outline-none bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex">
          <div className="flex w-100 bg-white absolute -mt-16 mx-56 p-5 rounded-lg space-x-16 shadow-md">
            <div>
              <img src={ProductCold} alt="product-image" className="rounded-full w-20 ml-10" />
            </div>
            <div className="mt-3">
              <p>Cold Brew</p>
              <p>IDR 30.000</p>
            </div>
            <div>
              <Counter />
            </div>
          </div>
          <div className="absolute mx-104 -mt-16">
            <button className="focus:outline-none text-white font-bold text-2xl bg-yellow-400 py-4 rounded-lg w-72 h-29">Checkout</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default ProductDetail;
