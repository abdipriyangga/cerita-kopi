/* eslint-disable indent */
const initialState = {
  onAuth: false,
  token: null,
  errMsg: "",
  sccMsg: "",
  isRegister: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_TOGGLE": {
      return {
        ...state,
        onAuth: !state.onAuth
      };
    }
    case "AUTH_LOGIN": {
      return {
        ...state,
        token: action.payload
      };
    }
    case "AUTH_LOGIN_FAILED": {
      return {
        ...state,
        errMsg: action.payload
      };
    }
    case "AUTH_REGISTER": {
      return {
        ...state,
        isRegister: state.isRegister,
        sccMsg: action.payload
      };
    }
    case "AUTH_REGISTER_FAILED": {
      return {
        ...state,
        errMsg: action.payload
      };
    }
    case "SET_AUTH_LOGOUT": {
      return {
        ...state,
        token: null
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default auth;
