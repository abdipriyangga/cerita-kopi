/* eslint-disable indent */
const initialState = {
  items: [],
  totalItem: 0
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GOING_TO_CHECKOUT": {
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

export default payment;