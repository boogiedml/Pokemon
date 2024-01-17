import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEmployees: null,
  employeeRoles: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setAllEmployee: (state, action) => {
      state.allEmployees = action.payload;
    },
    setEmployeeRoles: (state, action) => {
      state.employeeRoles = action.payload;
    },
  },
});

export const { setAllEmployee, setEmployeeRoles } = employeeSlice.actions;

export default employeeSlice.reducer;
