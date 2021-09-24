import React from "react";
import { Link } from "react-router-dom";
import { ProductCoupon } from "../assets";

const CardHistory = ({ item_name, code, total, payment, to, img }) => {
  return (
    <div className="bg-white flex flex-row rounded-lg">
      <Link to={to} className="flex flex-row py-6 px-5">
        <div>
          <img className="w-16 h-16 mr-5 rounded-full" src={img ? img : ProductCoupon} alt="Food Image" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-xl">{item_name}</h3>
          <h4 className="font-bold text-sm">{code}</h4>
          <p className="text-yellow-900">IDR {total}</p>
          <p className="text-yellow-900">Payment: {payment}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardHistory;
