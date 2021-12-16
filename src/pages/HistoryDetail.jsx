/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { ProductImg } from "../assets";
import NavbarMain from "../components/NavbarMain";
import { connect, useDispatch } from "react-redux";
import { getHistoryDetail, deleteHistory } from "../redux/actions/transaction";
import { authLogout } from "../redux/actions/auth";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
const { REACT_APP_URL: URL } = process.env;

const HistoryDetail = (props) => {
  const { id } = useParams();
  const { detail } = props.transaction;
  let histo = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    props.getHistoryDetail(props.auth.token, id);
    console.log("tooken from useEffect: ", props.auth.token);
    console.log("HISTORY DETAIL: ", detail);
  }, []);

  const onDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteHistory(props.auth.token, id));
        Swal.fire(
          "Deleted!",
          "Your history has been deleted.",
          "success"
        );
        histo.push("/history");
        setTimeout(() => {
          window.location.reload(false);
        }, 500);
        console.log("page to reload");
      }
    });
  };
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
      <main className="bg-history bg-cover w-full h-105 bg-center">
        <div className="py-16 ml-82">
          <h3 className="font-bold text-3xl text-white">Lets see your history detail!</h3>
        </div>
        <div className="bg-white w-100 h-82 mx-64 rounded-md">
          <h5 className="font-semibold p-5 text-center underline">INVOICE</h5>
          <div className="p-5 flex flex-row space-x-12">
            <div>
              <img className="w-48 h-44 mr-5 rounded-md" src={detail[0].images === null || undefined ? ProductImg : `${URL}${detail[0].images}`} />
            </div>
            <div className="text-justify">
              <p className="font-semibold text-md">Code Transaction: {detail[0].code_transaction}</p>
              <p className="font-semibold text-md">Product Name: {detail[0].name}</p>
              <p className="font-semibold text-md">Price: {detail[0].price}</p>
              <p className="font-semibold text-md">Amount: {detail[0].amount}</p>
              <p className="font-semibold text-md">Tax: {detail[0].tax}</p>
              <p className="font-semibold text-md">Shipping Cost: {detail[0].shipping_cost}</p>
              <p className="font-semibold text-md">Payment Method: {detail[0].payment_method}</p>
              <p className="font-semibold text-md">Total: {detail[0].total}</p>
            </div>
          </div>
          <div className="flex justify-end p-5">
            <button onClick={onDelete} className="focus:outline-none text-red-900 font-medium p-1 text-sm bg-yellow-400 rounded-lg">Delete</button>
          </div>
        </div>
      </main>
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
  getHistoryDetail,
  deleteHistory
};
export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail);
