/* eslint-disable no-undef */

const addProducts = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_CART_ADD_ITEM",
      payload: data
    });
    window.alert("product added to cart");
  };
};



export {
  addProducts
};