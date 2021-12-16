/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { ProductCoupon } from "../assets";

const CardHistory = ({ item_name, code, total, payment, to, img }) => {
  return (
    <div className="bg-white flex flex-row rounded-lg w-full">
      <div className="flex flex-row py-6 px-5">
        <div>
          <img className="w-16 h-16 mr-5 rounded-full" src={img ? img : ProductCoupon} alt="Food Image" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">{item_name}</h3>
          <h4 className="font-bold text-sm">{code}</h4>
          <p className="text-yellow-900">IDR {total}</p>
          <p className="text-yellow-900">Payment: {payment}</p>
        </div>
      </div>
      <div>
        <Link to={to} className="focus:outline-none text-red-900 font-medium p-1 text-xs bg-yellow-400 rounded-lg">View Detail</Link>
      </div>
      {/* <div className="p-2">
        <button onClick={onDelete} className="focus:outline-none text-red-900 font-medium w-14 text-sm bg-yellow-400 rounded-lg">Delete</button>
      </div> */}
      {/* <div className="p-2 mt-4 mx-4">
        <label className="checkbox">
          <input type="checkbox" name="histo" onChange={onChange} onClick={onDelete} />
          <span className="item"></span>
        </label>
      </div> */}
    </div>
  );
};

export default CardHistory;
