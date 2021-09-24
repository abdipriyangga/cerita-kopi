/* eslint-disable indent */
const initialState = {
  data: {},
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UPDATE_USER_PROFILE":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};

export default profile;