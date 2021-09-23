import Swal from "sweetalert2";

const toCheckout = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_GOING_TO_CHECKOUT",
      payload: data
    });
    Swal.fire("Yeay!", "Go to checkout");
    console.log("data items: ", data);
  };
};
const cannotToCheckout = () => {
  return async (dispatch) => {
    dispatch({
      type: "SET_GO_TO_LOGIN"
    });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You must login for checkout!!",
    });
  };
};


export {
  toCheckout,
  cannotToCheckout
};