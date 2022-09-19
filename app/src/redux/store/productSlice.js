import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    createProduct(state, action) {
      console.log(state);
      console.log(action);
      state.products.push({
        available: action.payload.available, // boolean
        pictures: action.payload.pictures, // string
        name: action.payload.name, // string, обязательное
        price: action.payload.price, // number, обязательное
        discount: action.payload.discount, // number
        stock: action.payload.discount, // number
        wight: action.payload.wight, // string
        description: action.payload.description, // string, обязательное
      });
    },
    editProduct(state, action) {},
    deleteProduct(state, action) {},
    likeProduct(state, action) {},
  },
});

export const { createProduct, deleteProduct, likeProduct } =
  productSlice.actions;

export default productSlice.reducer;
