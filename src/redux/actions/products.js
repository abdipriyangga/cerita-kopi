/* eslint-disable no-undef */
import { http } from "../../helpers/http";
const { REACT_APP_URL: URL } = process.env;

const getProducts = (url) => {
  if (!url) {
    return async (dispatch) => {
      const {
        data
      } = await http().get(`${URL}/items`);
      dispatch({
        type: "SET_GET_PRODUCTS",
        payload: {
          products: data.results,
          pageInfo: data.pageInfo
        },

      });
      console.log(data);
    };
  } else {
    return async (dispatch) => {
      const {
        data
      } = await http().get(url);
      dispatch({
        type: "SET_NEXT_PRODUCTS",
        payload: {
          products: data.results,
          pageInfo: data.pageInfo
        },
      });
    };
  }
};

const getDetailProducts = (id) => {
  return async (dispatch) => {
    const {
      data
    } = await http().get(`${URL}/items/${id}`);
    dispatch({
      type: "SET_GET_DETAILS",
      payload: data.results,
    });
  };
};

export {
  getProducts,
  getDetailProducts
};