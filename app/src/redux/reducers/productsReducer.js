import { CREATE_PRODUCT, EDIT_PRODUCT } from "../types/productsTypes";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return action.payload;

    case EDIT_PRODUCT:
      return action.payload;

    default:
      return state;
  }
};

export default productsReducer;
