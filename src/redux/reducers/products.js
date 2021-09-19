/* eslint-disable indent */
const initialState = {
  data: [],
  details: {},
  pageInfo: {}
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GET_PRODUCTS":
      return {
        ...state,
        data: action.payload.products,
        pageInfo: action.payload.pageInfo,
      };
    case "SET_NEXT_PRODUCTS":
      return {
        ...state,
        data: [...state.data, ...action.payload.products],
        pageInfo: action.payload.pageInfo,
      };
    case "SET_GET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default products;