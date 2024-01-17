import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  utils: null,
  countries: null,
};

const utilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setUtils: (state, action) => {
      state.utils = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { setUtils, setCountries } = utilSlice.actions;

export default utilSlice.reducer;
