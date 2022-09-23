import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_TOKEN, PATH } from "../../constants";

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async function (_id, { rejectWithValue, dispatch, getState }) {
    try {
      const response = await fetch(PATH + "products/" + _id, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Cant' delete becouse: Ошибка ${response.status} потому-что ${response.statusText}`
        );
      }
      dispatch(deleteProductId(_id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
  alert(state.error);
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function (_, { rejectWithValue }) {
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
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewProduct = createAsyncThunk(
  "products/createNewProduct",
  async function (dataFromForm, { rejectWithValue, dispatch }) {
    try {
      dataFromForm.available = Boolean(dataFromForm.available);
      dataFromForm.price = Number(dataFromForm.price);
      dataFromForm.discount = Number(dataFromForm.discount);
      dataFromForm.stock = Number(dataFromForm.stock);
      const response = await fetch(PATH + "products/", {
        method: "POST",
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFromForm),
      });
      if (!response.ok) {
        throw new Error(
          `Cant' create becouse: Ошибка ${response.status} потому-что ${response.statusText}`
        );
      }
      const data = await response.json();
      dispatch(createProduct(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
    createProduct(state, action) {
      state.products.push(action.payload);
    },
    editProduct(state, action) {},
    deleteProductId(state, action) {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
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
    [fetchProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.status = "deleted";
    },
    [deleteProduct.rejected]: setError, // вешать на всё остальное включая предыдущее,

    [createNewProduct.pending]: (state, action) => {
      state.status = "creating";
      state.error = null;
    },
    [createNewProduct.fulfilled]: (state, action) => {
      state.status = "resolved";
      // state.products = action.payload;
    },
    [createNewProduct.rejected]: setError,
  },
});

export const { createProduct, deleteProductId, likeProduct, getProducts } =
  productSlice.actions;

export default productSlice.reducer;
