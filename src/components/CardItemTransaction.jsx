/* eslint-disable react/prop-types */
import React from "react";
// import { ProductImg } from "../assets";

function CardItemTransaction({ name, img, price, size, quantity }) {
  return (
    <div className="bg-white flex flex-row py-5">
      <div className="mx-3">
        <img
          className="md:w-20 w-14 md:h-20 h-14 rounded-xl"
          src={img}
          alt="food"
        />
      </div>
      <div className="flex flex-col flex-1 md:ml-8">
        <p>{name}</p>
        <p>x {quantity}</p>
        <p>{size}</p>
      </div>
      <h5 className="text-yellow-900 font-medium mt-10 mx-3">IDR {price}</h5>
    </div>
  );
}

export default CardItemTransaction;