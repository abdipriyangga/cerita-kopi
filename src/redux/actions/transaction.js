/* eslint-disable no-undef */
import { http } from "../../helpers/http";
import Swal from "sweetalert2";
const { REACT_APP_URL: URL } = process.env;

const createTransaction = (data, token) => {
  console.log("ini transaksi loh!", data);
  return async (dispatch) => {
    const form = new URLSearchParams();
    data.forEach((products) => {
      form.append("id_item", products.id);
      form.append("item_amount", products.amount);
      form.append("item_variant", products.id_variant);
    });
    form.append("payment_method", "Bank");
    try {
      const { data: finalData } = await http(token).post(`${URL}/transactions`, form.toString());
      dispatch({
        type: "SET_CREATE_TRANSACTION",
        payload: finalData,
      });
      dispatch({
        type: "SET_TRANSACTION_SUCCESS",
        payload: Swal.fire({
          icon: "success",
          title: "Yeay!",
          text: finalData.message,
          timer: 2000
        })
      });
      dispatch({
        type: "SET_CLEAR_PRODUCTS",
      });
    } catch (error) {
      dispatch({
        type: "SET_TRANSACTION_FAILED",
        payload: Swal.fire({
          icon: "error",
          title: "Opps!",
          text: error.response.data.message,
          timer: 2000
        })
      });
    }
  };
};

const getHistory = (token) => {
  return async (dispatch) => {
    console.log("token user: ", token);
    const { data } = await http(token).get(`${URL}/transactions`);
    console.log("data history: ", data.results);
    dispatch({
      type: "GET_HISTORY_TRANSACTIONS",
      payload: data.results
    });
  };
};
export { createTransaction, getHistory };