import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetail: null,
  accountBalance: "",
  expenseBalance: "",
};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    clearUserDetail: (state) => {
      state.userDetail = null;
    },
    setAccountBal: (state, action) => {
      state.accountBalance = action.payload;
    },
    setExpenseBal: (state, action) => {
      state.expenseBalance = action.payload;
    },
  },
});

export const { setUserDetail, clearUserDetail, setAccountBal, setExpenseBal } =
  userDetailSlice.actions;

export default userDetailSlice.reducer;
