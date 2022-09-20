import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Api";
import { API_TOKEN, PATH } from "../../constants";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function () {
    try {
      const response = await fetch(PATH + "products", {
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Ошибка ${response.status} потому-что ${response.statusText}`
        );
      }

      const data = await response.json();

      return data;
    } catch (error) {}
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: null,
    error: null,
  },
  reducers: {
    async createProduct(state, action) {
      const data = action.payload;

      data.available = Boolean(data.available);
      data.price = Number(data.price); // number, обязательное
      data.discount = Number(data.discount); // number
      data.stock = Number(data.stock); // number

      console.log(JSON.stringify(data));

      const response = await fetch(PATH + "products", {
        method: "POST",
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const postFromApi = await response.json();

      state.products.push(postFromApi);
    },
    editProduct(state, action) {},
    deleteProduct(state, action) {},
    likeProduct(state, action) {},
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.products = action.payload.products;
    },
    [fetchProducts.rejected]: (state, action) => {},
  },
});

export const { createProduct, deleteProduct, likeProduct, getProducts } =
  productSlice.actions;

export default productSlice.reducer;
