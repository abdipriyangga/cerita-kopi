/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { ProductImg } from "../assets";

function CardItem({ name, img, price, id }) {
  return (
    <div>
      <Link
        to={id}
        className="space-y-2 shadow-xl rounded-2xl bg-white w-full h-full flex flex-col justify-center items-center py-5"
      >
        <img
          className="w-28 h-28 rounded-full object-cover"
          src={img ? img : ProductImg}
          alt="food"
        />
        <h4 className="text-center flex-1 font-bold w-20 flex justify-center text-xl leading-tight">
          {name}
        </h4>
        <h5 className="text-yellow-900 font-medium">IDR {price}</h5>
      </Link>
    </div>
  );
}

export default CardItem;
