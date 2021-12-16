/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavbarMain from "../components/NavbarMain";
import { connect, useDispatch } from "react-redux";
import { getHistory, deleteHistory } from "../redux/actions/transaction";
import { authLogout } from "../redux/actions/auth";
import { useHistory } from "react-router-dom";
import CardHistory from "../components/CardHistory";
import Swal from "sweetalert2";
const { REACT_APP_URL: URL } = process.env;
const History = (props) => {
  const { history } = props.transaction;
  const [selected, setSelected] = useState("");
  let histo = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    props.getHistory(props.auth.token);
    console.log("tooken from useEffect: ", props.auth.token);
  }, []);

  return (
    <div>
      <header className="px-32 bg-white">
        <NavbarMain
          home="text-gray-500"
          product="text-gray-500"
          cart="text-gray-500 "
          history="text-yellow-900 font-bold"
        />
      </header>
      <main className="bg-history bg-cover w-full h-105 bg-center ">
        <div className="py-16 ml-82">
          <h3 className="font-bold text-3xl text-white">Lets see what you have bought!</h3>
          <p className="font-normal mt-3 mx-40 text-sm text-white"> Select item to delete</p>
        </div>
        <div>

        </div>
        <section className="grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-5 md:px-32 px-16 overflow-y-scroll no-scrollbar">
          {history?.map((product, idx) => {
            console.log("====================================");
            console.log("IDX: ", idx);
            console.log("====================================");
            return (
              <>
                <CardHistory
                  key={product.id}
                  img={`${URL}${product.images}`}
                  to={`/history/${product.id}`}
                  item_name={product.item_name}
                  total={product.total.toLocaleString("en")}
                  payment={product.payment_method}
                />
              </>

            );
          })}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
  transaction: state.transaction
});
const mapDispatchToProps = {
  authLogout,
  getHistory,
  deleteHistory
};
export default connect(mapStateToProps, mapDispatchToProps)(History);
