const initialState = {
  data: [],
  productCategory: [],
  pageInfo: {},
};

const category = (state = initialState, action) => {
  switch (action.type) {
  case "SET_GET_CATEGORY":
    return {
      ...state,
      data: action.payload.category,
    };
  case "SET_PRODUCT_CATEGORY":
    return {
      ...state,
      productCategory: action.payload.productCategory
    };
  case "SET_NEXT_PRODUCTS_CATEGORY":
    return {
      ...state,
      productCategory: [...state.productCategory, ...action.payload.productCategory]
    };
  default:
    return {
      ...state
    };
  }
};

export default category;