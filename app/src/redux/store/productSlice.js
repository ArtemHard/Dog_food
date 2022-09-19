import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    createProduct(state, action) {
      // console.log(state);

      action.payload.available = Boolean(action.payload.available);
      action.payload.price = Number(action.payload.price); // number, обязательное
      action.payload.discount = Number(action.payload.discount); // number
      action.payload.stock = Number(action.payload.stock); // number

      console.log(JSON.stringify(action.payload));

      state.products.push(action.payload);
    },
    editProduct(state, action) {},
    deleteProduct(state, action) {},
    likeProduct(state, action) {},
  },
});

export const { createProduct, deleteProduct, likeProduct } =
  productSlice.actions;

export default productSlice.reducer;
