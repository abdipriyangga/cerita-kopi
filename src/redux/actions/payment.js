import Swal from "sweetalert2";

const toCheckout = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_GO_TO_CHECKOUT",
      payload: data
    });
    Swal.fire("Yeay!", "Go to checkout");
  };
};

export {
  toCheckout
};