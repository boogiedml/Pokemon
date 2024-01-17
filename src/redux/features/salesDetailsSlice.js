import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSales: [],
  customerSales: [],
  customerTotalSales: 0,
  customerSalesCount: 0,
};

const salesDetailsSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setAllSales: (state, action) => {
      state.allSales = action.payload;
    },
    setCustomerSales: (state, action) => {
      state.customerSales = action.payload;
    },
    setCustomerTotalSales: (state, action) => {
      state.customerTotalSales = action.payload;
    },
    setCustomerSalesCount: (state, action) => {
      state.customerSalesCount = action.payload;
    },
  },
});

export const {
  setAllSales,
  setCustomerSales,
  setCustomerTotalSales,
  setCustomerSalesCount,
} = salesDetailsSlice.actions;

export default salesDetailsSlice.reducer;
