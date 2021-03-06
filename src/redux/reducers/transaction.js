/* eslint-disable indent */
const initialState = {
  data: [],
  sccMsg: "",
  errMsg: "",
  history: [],
  items: [],
  detail: {},
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
        items: [],
      };
    case "GET_HISTORY_TRANSACTIONS":
      return {
        ...state,
        history: action.payload,
      };
    case "SET_GET_HISTORY_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };
    case "DELETE_HISTORY": {
      return {
        ...state,
        sccMsg: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default transaction;