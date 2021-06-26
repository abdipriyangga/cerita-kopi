/* eslint-disable no-undef */
import { http } from "../../helpers/http";

const {REACT_APP_URL: URL} = process.env;

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
      const {data} = await http().post(`${URL}/auth/login`, form.toString());
      dispatch({
        type: "AUTH_LOGIN",
        payload: data.results.token
      });
    }
    catch(err) {
      dispatch({
        type: "AUTH_LOGIN_FAILED",
        payload: err.response.data.message
      });
      console.log(err);
    }
  };
} ;

const authRegister = (email, password, phoneNumber) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);
    form.append("phoneNumber", phoneNumber);
    try {
      const {data} = await http().post(`${URL}/auth/signup`, form.toString());
      dispatch({
        type: "AUTH_REGISTER",
        payload: data.message
      });
    }
    catch(err) {
      dispatch({
        type: "AUTH_REGISTER_FAILED",
        payload: err.response.data.message
      });
    }
  };
} ;

export{toggleAuth, authLogin, authRegister};