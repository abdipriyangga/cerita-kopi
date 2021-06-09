import React, { useEffect, useState } from 'react'
import NavbarSec from '../../components/Navbar/NavbarSec'
import { useParams } from "react-router"
import axios from 'axios'
import { ProductCold } from '../../assets';

function ProductDetail() {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8081/items/${id}`)
      .then((response) => {
        console.log(response.data.results)
        setData(response.data.results)
      })
  }, [])
  return (
    <div>
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
        <div className="w-72 text-center space-y-5">
          <img src={ProductCold} alt="" />
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
