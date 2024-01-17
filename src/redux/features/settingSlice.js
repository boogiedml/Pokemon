import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    openSetting: (state) => {
      state.isOpened = true;
    },
    closeSetting: (state) => {
      state.isOpened = false;
    },
  },
});

export const { openSetting, closeSetting } = settingSlice.actions;

export default settingSlice.reducer;
