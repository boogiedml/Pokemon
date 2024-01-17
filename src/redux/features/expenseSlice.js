import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allExpenses: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setAllExpenses: (state, action) => {
      state.allExpenses = action.payload;
    },
  },
});

export const { setAllExpenses } = expenseSlice.actions;

export default expenseSlice.reducer;
