import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const transactionBalSlice = createSlice({
  name: "transactionBal",
  initialState,
  reducers: {
    openNav: (state) => {
      state.isOpened = true;
    },
    closeNav: (state) => {
      state.isOpened = false;
    },
  },
});

export const { openNav, closeNav } = transactionBalSlice.actions;

export default transactionBalSlice.reducer;
