/* eslint-disable indent */
const initialState = {
  data: [],
  sccMsg: "",
  errMsg: ""
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CREATE_TRANSACTION": {
      return {
        ...state,
        data: action.payload,
        sccMsg: action.payload
      };
    }
    case "SET_TRANSACTION_FAILED": {
      return {
        ...state,
        errMsg: action.payload,
        sccMsg: ""
      };
    }
    case "SET_CLEAR_PRODUCTS":
      return {
        ...state,
        data: [],
      };
    default: {
      return {
        ...state
      };
    }
  }
};

export default transaction;