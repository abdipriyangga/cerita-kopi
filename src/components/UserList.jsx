/* eslint-disable react/prop-types */
import React from "react";

function UserList({ name, chat, images, onClick, onDelete, me }) {

  if (me) {
    return (
      <button onClick={onClick} className="flex w-80 flex-row mt-5 items-center border-b-2 pb-3 border-white focus:outline-none">
        <img src={images} className="w-16 h-16 object-cover mr-5 rounded-full bg-white" />
        <div className='flex flex-col items-start flex-1'>
          <h3 className="text-white font-bold text-lg capitalize">{name}</h3>
          <p className="text-white flex text-justify text-sm">
            {chat}
          </p>
        </div>
        {
          onDelete && <button onClick={onDelete} className='w-8 h-8 focus:outline-none'>
            <p className='text-2xl text-white'>X</p>
          </button>
        }
      </button>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default UserList;
