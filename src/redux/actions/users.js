/* eslint-disable no-undef */
import { http } from "../../helpers/http";
import { authLogout } from "./auth";
const { REACT_APP_URL: URL } = process.env;

const getUser = (token) => {
  return async (dispatch) => {
    try{
      const { data } = await http(token).get(`${URL}/profile`);
      console.log(data.results);
      dispatch({
        type: "SET_GET_USER",
        payload: data.results,
      });
    }catch (err){
      dispatch(authLogout);
    }
  };
};

export { getUser };