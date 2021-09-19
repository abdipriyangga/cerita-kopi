/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {http} from "../../helpers/http";
import Swal from "sweetalert";

const {REACT_APP_URL : URL} = process.env;


export const getUserChat = (token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/chats/list`);
    dispatch({type :"GET_USER_CHAT", payload: data.results});
  };
};

export const getAllUser = (token, search) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/chats/search?q=${search}`);
    dispatch({type :"GET_ALL_USER", payload: data.results});
  };
};

export const getChat = (token, num) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/chats/all?recipient=${num}`);
    dispatch({type :"GET_DETAIL_CHAT", payload: data.results});
  };
};

export const sendChat = (token, datauser) => {
  const form = new URLSearchParams();
  form.append("message", datauser.message);
  form.append("recipient", datauser.recipient);
  console.log("send",form);
  return async (dispatch) => {
    const { data } = await http(token).post(`${URL}/chats`, form.toString());
    dispatch(getChat(token, datauser.recipient));
    dispatch(getUserChat(token));
  };
};

export const deleteChat = (token, id, recipient, myPhone) => {
  return async (dispatch) => {
    console.log(id);
    const form = new URLSearchParams();
    form.append("recipient", recipient);
    const { data } = await http(token).delete(`${URL}/chats/${id}`, {data: form});
    dispatch(getChat(token, recipient));
    dispatch(getUserChat(token));
  };
};
