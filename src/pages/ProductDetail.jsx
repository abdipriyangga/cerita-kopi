/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { ProductCold } from "../assets";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import NavbarMain from "../components/NavbarMain";
import { addProducts } from "../redux/actions/carts";
import { getDetailProducts } from "../redux/actions/products";
import { connect } from "react-redux";
import { toCheckout } from "../redux/actions/payment";
import SectionBar from "../components/SectionBar";
const { REACT_APP_URL: URL } = process.env;

function ProductDetail(props) {
  // const [data, setData] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const { detail } = props.products;
  const [price, setPrice] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [variant, setVariant] = useState(null);
  // const {payment} = props.payment;
  useEffect(() => {
    if (detail?.variants) {
      console.log("changing");
      const data = detail?.variants.map((variant) => {
        return { ...variant, amount: 0 };
      });
      setVariant(data);
      console.log("data", data);
    }
  }, [detail?.variants]);

  useEffect(() => {
    if (detail?.base_price) {
      setPrice(detail?.base_price);
    }
  }, [detail]);

  useEffect(() => {
    props.getDetailProducts(id);
    return () => {
      setVariant(null);
    };
  }, []);

  const getPrice = (idx) => {
    const getPrice = detail.variants[idx].price;
    setPrice(getPrice);
    setSelectedVariant(getPrice);
  };
  return (
    <>
      <div className="bg-gray-200 h-full">
        <header className="px-32 sticky top-0 bg-white">
          <NavbarMain
            home="text-gray-500"
            product="text-yellow-900 font-bold"
            cart="text-gray-500"
            history="text-gray-500"
          />
        </header>
        <div className="p-10 mt-5 ml-20">
          <span>Favorite & Promo {""}</span><span className="text-yellow-800"> {">"} {detail?.name}</span>
        </div>
        <section className="h-full">
          <div className="ml-10 space-x-24 flex flex-wrap ">
            <div className="">
              <img src={detail?.images} alt="product-image" className="rounded-full w-72 ml-20" />
              <div className="mt-5 ml-20">
                <p className="text-center text-4xl font-bold">{detail?.name}</p>
                <p className="text-center text-xl font-medium">IDR {price.toLocaleString("en")}</p>
              </div>
              <div className="ml-20 mt-10 space-y-5">
                <button onClick={() => props.addProducts(variant)} className="focus:outline-none text-white font-bold text-lg bg-yellow-900 py-4 rounded-lg w-full">Add to Cart</button>
                <button className="focus:outline-none text-yellow-900 font-bold text-lg bg-yellow-400 py-4 rounded-lg w-full">Ask a Staff</button>
              </div>
            </div>
            <div>
              <div className="bg-white w-97 h-85 rounded-lg p-12 space-y-6">
                <p className="text-yellow-900 font-semibold">{detail?.delivery_on}</p>
                <p className="text-yellow-900 font-medium">{detail?.detail}</p>
                <p className="text-center font-bold text-md">Choose Size</p>
                <div className="space-x-8 mx-16">
                  {detail?.variants?.map((variant, idx) => {
                    return (
                      <button onClick={() => getPrice(idx)} className="focus:outline-none text-black font-bold text-lg bg-yellow-400 py-2 rounded-full w-12 h-12">
                        <p>{variant.code}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mt-10 space-y-8">
                <p className="text-center font-bold text-lg">Choose Delivery Methods</p>
                <div className="flex space-x-8 mx-16">
                  <button className="flex-none focus:outline-none text-white font-medium text-md bg-yellow-900 py-2 rounded-lg w-20 h-10">
                    <p>Dine in</p>
                  </button>
                  <button className="flex-grow focus:outline-none text-white font-medium text-md bg-yellow-900 py-2 rounded-lg w-32 h-10">
                    <p>Door Delivery</p>
                  </button>
                  <button className="flex-none focus:outline-none text-white font-medium text-md bg-yellow-900 py-2 rounded-lg w-20 h-10">
                    <p>Pickup</p>
                  </button>
                </div>
                <div className="flex">
                  <p className="mx-16">Set Time: </p>
                  <div className="-ml-10 border-b-2 border-gray-400 mb-32">
                    <input className="focus:outline-none bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex">
          <SectionBar
            variant={variant || []}
            onClick={() => props.toCheckout(variant)}
            ProductsName={detail?.name}
            images={detail?.images}
            type="counter"
            stateValue={0}
            max={detail?.quantity}
          />
          {/* <div className="flex w-100 bg-white absolute -mt-16 mx-56 p-5 rounded-lg space-x-16 shadow-md">
            <div>
              <img src={detail?.images} alt="product-image" className="rounded-full w-20 ml-10" />
            </div>
            <div className="mt-3">
              <h4>{detail?.name}</h4>
              <h5></h5>
            </div>
            <div>
              <Counter />
            </div>
          </div>
          <div className="absolute mx-104 -mt-16">
            <button onClick={() => props.addProducts(variant)} className="focus:outline-none text-white font-bold text-2xl bg-yellow-400 py-4 rounded-lg w-72 h-29">Checkout</button>
          </div> */}
        </section>
        <Footer />
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  products: state.products,
  payment: state.payment
});
const mapDispatchToProps = {
  getDetailProducts,
  addProducts,
  toCheckout
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
