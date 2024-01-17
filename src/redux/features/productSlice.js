import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setAllProducts } = productSlice.actions;

export default productSlice.reducer;