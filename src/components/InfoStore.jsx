/* eslint-disable react/prop-types */
import React from "react";

function InfoStore({icon, numValue, label}) {
  return (
    <div className="flex flex-row justify-center items-center space-x-5">
      <img className="bg-yellow-400 p-3 rounded-full" src={icon} alt="icon" />
      <div>
        <p className="font-bold text-2xl">{numValue}</p>
        <p className="text-lg text-gray-500">{label}</p>
      </div>
    </div>
  );
}

export default InfoStore;
