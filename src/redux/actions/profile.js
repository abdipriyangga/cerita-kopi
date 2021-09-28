/* eslint-disable no-undef */
import Swal from "sweetalert2";
import { http } from "../../helpers/http";
import { getUser } from "./users";
const { REACT_APP_URL: URL } = process.env;

const updateUser = (data, token) => {
  return async (dispatch) => {
    const form = new FormData();
    const limitSize = 2 * 1040 * 1040;
    if (data.file) {
      if (data.file.size > limitSize) {
        Swal.fire({
          icon: "error",
          title: "Opps!",
          text: "Sorry file too large",
          timer: 2000
        });
      }
    }
    try {
      form.append("name", data.name);
      form.append("email", data.email);
      form.append("address", data.address);
      form.append("phone_number", data.phone_number);
      form.append("images", data.file);
      const { data: updateData } = await http(token).put(`${URL}/profile`, form);
      dispatch({
        type: "SET_UPDATE_USER_PROFILE",
        payload: Swal.fire({
          icon: "success",
          title: "Yeay!",
          text: updateData.message
        }),
      });
      dispatch(getUser(token));
    } catch (error) {
      return Swal.fire({
        icon: "error",
        title: "Opps!",
        text: error
      });
    }
  };
};

export { updateUser };