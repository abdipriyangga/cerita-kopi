/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import NavbarSec from "../components/NavbarSec";
import { useParams } from "react-router";
import axios from "axios";
import { ProductCold } from "../assets";

const { REACT_APP_URL: URL } = process.env;

function ProductDetail() {
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
    <div className="bg-gray-200">
      <header className="px-32 sticky top-0 bg-white">
        <NavbarSec
          home="text-gray-500"
          product="text-yellow-900 font-bold"
          cart="text-gray-500"
          history="text-gray-500"
        />
      </header>
      <div className="p-10 mt-5 ml-20">
        <span>Favorite & Promo</span><span className="text-yellow-800"> {">"} {data.name}</span>
      </div>
      <section>
        <div className="w-72 text-center space-y-5 flex flex-row">
          <div>
            <img src={ProductCold} alt="product-image" className="rounded-full" />
          </div>
          <div>
            <p>Delivery</p> 
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
