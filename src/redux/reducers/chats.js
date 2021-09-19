const initialState = {
  users: [],
  chats: [],
  allUser: []
};

const chats = (state=initialState, action) => {
  switch (action.type){
  case "GET_USER_CHAT":
    return {
      ...state,
      users: action.payload
    };
  case "GET_DETAIL_CHAT":
    return {
      ...state,
      chats: action.payload
    };
  case "GET_ALL_USER":
    return {
      ...state,
      allUser: action.payload
    };
  case "CLEAR_CHAT":
    return {
      ...state,
      chats: []
    };
  default:
    return {
      ...state
    };
  }
};

export default chats;