/* eslint-disable no-undef */

import Swal from "sweetalert2";

const addProducts = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_CARTS_ADD_ITEM",
      payload: data
    });
    Swal.fire("Yeay!", "Your product is added to cart");
  };
};



export {
  addProducts
};