/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable indent */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Coupon from "../components/Coupon";
import NavbarMain from "../components/NavbarMain";
// import axios from "axios";
import CardItem from "../components/CardItem";
import { ProductImg } from "../assets";
import Footer from "../components/Footer";
import { getProducts, searchProducts } from "../redux/actions/products";
import { getCategory, getProductCategory } from "../redux/actions/category";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import qs from "querystring";
import { useHistory, useLocation } from "react-router-dom";

const { REACT_APP_URL: URL } = process.env;

function Product(props) {
  // const [items, setItems] = useState([]);
  // const [data] = useState([]);
  const { data } = props.products;
  console.log("data redux: ", props.products);
  const { data: dataCategory } = props.category;
  console.log("data categroy: ", dataCategory);
  const { productCategory } = props.category;
  const parseQuery = (str) => {
    return qs.parse(str.slice("1"));
  };
  const location = useLocation();
  const urlSearch = parseQuery(location.search).search;
  useEffect(() => {
    // console.log("ini getProducts action: ", getProducts());
    props.getProducts();
    console.log("data categroy: ", dataCategory);
    console.log("data categroy sfdasfa: ", productCategory);

    props.getCategory();
    // getItemByCategory(id);
  },
    []);
  // console.log("data categroy: ", dataCategory);
  const loadMore = () => {
    const { nextPage } = props.products.pageInfo;
    if (nextPage !== null) {
      props.getProducts(nextPage);
    } else {
      Swal.fire({
        icon: "error",
        title: "no more items"
      });
    }
  };
  const loadMoreCategory = () => {
    const { nextPage } = props.category.pageInfo;
    if (nextPage !== null) {
      props.getProductCategory(null, nextPage);
    } else {
      Swal.fire({
        icon: "error",
        title: "no more items"
      });
    }
  };
  const [searchTemp, setSearchTemp] = useState(urlSearch ? urlSearch : "");
  const [search, setSearch] = useState(urlSearch ? urlSearch : "");

  const history = useHistory();

  const onSearch = (e) => {
    if (e.key === "Enter") {
      history.push("/items");
      setSearchTemp(search);
      setSearch(searchTemp);
      props.searchProducts(searchTemp);
    }
  };
  console.log("search", urlSearch);

  useEffect(() => {
    setSearchTemp(urlSearch);
  }, [location.search]);

  return (
    <div>
      <header className="px-32 bg-white">
        <NavbarMain
          home="text-gray-500"
          product="text-yellow-900 font-bold"
          cart="text-gray-500"
          history="text-gray-500"
          onKeyDown={onSearch}
          onChange={(e) => setSearchTemp(e.target.value)}
          value={searchTemp}
          onClickSearch={onSearch}
        />
      </header>
      <section className="flex flex-row">
        <div className="w-1/4 bg-white h-full border-t-2 border-gray-300 border-r-2">
          <div className="flex flex-col items-center">
            <h4 className="text-center text-xl text-yellow-900 font-semibold my-8">Promo For You</h4>
            <p className="text-center text-sm mb-10 w-64">
              Coupons will be updated every weeks. Check them out!
            </p>
            <Coupon />
          </div>
          <button className="focus:outline-none ml-28 mt-10 text-white font-bold text-lg bg-yellow-900 px-16 py-4 rounded-lg lg:ml-9"> Apply Coupon</button>
          <div className="px-20 py-16">
            <h5 className="text-black font-semibold -ml-4">
              Terms and Condition
            </h5>
            <ol className="text-gray-500 list-decimal text-sm">
              <li>You can only apply 1 coupon per day</li>
              <li>It only for dine in</li>
              <li>Buy 1 get 1 only for new user</li>
              <li>Should make member card to apply coupon</li>
            </ol>
          </div>
        </div>
        <div className="flex-1 bg-white h-full border-t-2 border-gray-300">
          <ul className="my-8 flex flex-row space-x-16 justify-center">
            {dataCategory.map((dc) => {
              return (
                <li>
                  <button className="px-2 font-bold text-lg text-yellow-900 border-yellow-900" onClick={() => props.getProductCategory(dc.id)}>
                    {dc.name}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="grid grid-cols-4 grid-rows-7 gap-7 px-32">
            {props.category.productCategory < 1 ? data.map((products) => {

              // {console.log("ini item: ",item);
              //   console.log("ini images: ", item.images);
              // }
              {/* {
                console.log("====================================");
                console.log(products);
                products.images;
                console.log("====================================");

              } */}
              {/* console.log("====================================");
              console.log("name product atas : ", products.name);
              console.log("===================================="); */}
              return (
                <CardItem key={products.id} id={`/items/${products.id}`} name={products.name} price={products.price} img={products.images === null || undefined ? ProductImg : `${URL}${products.images}`} />
              );
            }) : productCategory.map((prod) => {

              if (props.category.productCategory === 0) {
                return (
                  <>
                    <div>sdlfadl</div>
                  </>
                );
              } else {
                {/* console.log("====================================");
                console.log("product name: ", prod.name);
                console.log("===================================="); */}
                return (
                  <CardItem key={prod.id} id={`/items/${prod.id}`} name={prod.name} price={prod.price} img={prod.images === null || undefined ? ProductImg : `${URL}${prod.images}`} />
                );
              }
            })}
          </div>
          <div className=" flex flex-row justify-center ">
            {urlSearch ? <div className="my-10 flex justify-center items-center">
              <button onClick={loadMore} className="focus:outline-none ml-28  text-white font-bold text-lg bg-yellow-400 px-16 py-4 rounded-lg lg:ml-9" >LoadMore</button>
            </div> :
              <>
                {
                  props.category.productCategory < 1 ? (
                    <div className="my-10 flex justify-center items-center">
                      <button onClick={loadMore} className="focus:outline-none ml-28  text-white font-bold text-lg bg-yellow-400 px-16 py-4 rounded-lg lg:ml-9" >LoadMore</button>
                    </div>
                  ) : (
                    <div className="my-10 flex justify-center items-center">
                      <button onClick={loadMoreCategory} className="focus:outline-none ml-28  text-white font-bold text-lg bg-yellow-400 px-16 py-4 rounded-lg lg:ml-9" >LoadMore</button>
                    </div>
                  )
                }
              </>
            }

          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  category: state.category,
  auth: state.auth,
});
const mapDispatchToProps = {
  getProducts,
  getCategory,
  getProductCategory,
  searchProducts
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
