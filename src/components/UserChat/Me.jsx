/* eslint-disable react/prop-types */
import React from "react";
import { DefaultPic } from "../../assets";

function Me({ img, name, chat }) {
  return (
    <div className='bg-white px-8 py-3 rounded-xl flex flex-row items-center'>
      <img src={img !== null ? img : DefaultPic} className="w-16 h-16 object-cover mr-5 rounded-full" />
      <div className='flex flex-col'>
        <h3 className="text-black font-bold text-lg capitalize">{name}</h3>
        <p className="text-black flex text-justify text-sm">
          {chat}
        </p>
      </div>
    </div>
  );
}

export default Me;
