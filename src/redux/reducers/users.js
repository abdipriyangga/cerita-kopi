const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
  case "SET_GET_USER":
    return {
      ...state,
      users: action.payload,
    };
  default:
    return { ...state };
  }
};

export default users;