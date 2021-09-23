/* eslint-disable indent */
const initialState = {
  items: [],
  totalItem: 0
};

const carts = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARTS_ADD_ITEM": {
      return {
        ...state,
        items: [...state.items, ...action.payload]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default carts;