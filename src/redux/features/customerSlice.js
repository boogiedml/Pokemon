import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCustomers: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setAllCustomers: (state, action) => {
      state.allCustomers = action.payload;
    },
  },
});

export const { setAllCustomers } = customerSlice.actions;

export default customerSlice.reducer;
