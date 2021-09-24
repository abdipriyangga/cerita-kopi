/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Swal from "sweetalert2";
import { http } from "../../helpers/http";

const { REACT_APP_URL: URL } = process.env;

const toggleAuth = () => {
  return {
    type: "AUTH_TOGGLE"
  };
};

const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);
    try {
      const { data } = await http().post(`${URL}/auth/login`, form.toString());
      dispatch({
        type: "AUTH_LOGIN",
        payload: data.results.token
      });
    }
    catch (err) {
      dispatch({
        type: "AUTH_LOGIN_FAILED",
        payload: err.response.data.message
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.message,
      });
    }
  };
};

const authRegister = (email, password, phone_number) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);
    form.append("phone_number", phone_number);
    try {
      const { data } = await http().post(`${URL}/auth/signup`, form.toString());
      dispatch({
        type: "AUTH_REGISTER",
        payload: Swal.fire({
          icon: "success",
          title: "Yeay...",
          text: data.message,
        })
      });
    }
    catch (err) {
      dispatch({
        type: "AUTH_REGISTER_FAILED",
        payload: err.response.data.message
      });
    }
  };
};
const authLogout = () => {
  return async (dispatch) => {
    dispatch({ type: "SET_AUTH_LOGOUT" });
    dispatch({ type: "SET_CLEAR_HISTORY" });
    dispatch({ type: "CLEAR_CHAT" });
  };
};
export { toggleAuth, authLogin, authLogout, authRegister };