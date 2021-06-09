import React from 'react'
import {Link} from 'react-router-dom'

function CardItem({name, img, price, to}) {
  return (
    <div>
      <Link
        to={to}
        className="space-y-2 shadow-xl rounded-2xl bg-white w-full h-full flex flex-col justify-center items-center py-5"
      >
        <img
          className="w-28 h-28 rounded-full object-cover"
          src={img}
          alt="food"
        />
        <h4 className="text-center flex-1 font-bold w-20 flex justify-center text-xl leading-tight">
          {name}
        </h4>
        <h5 className="text-yellow-900 font-medium">IDR {price}</h5>
      </Link>
    </div>
  )
}

export default CardItem
