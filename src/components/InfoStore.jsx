/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InfoStore({ icon, numValue, label }) {
  return (
    <div className="flex flex-row justify-center items-center space-x-5">
      <FontAwesomeIcon icon={icon} className="bg-yellow-400" />
      <div>
        <p className="font-bold text-2xl">{numValue}</p>
        <p className="text-lg text-gray-500">{label}</p>
      </div>
    </div>
  );
}

export default InfoStore;
