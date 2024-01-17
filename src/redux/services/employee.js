import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("POS.com.meta");
      headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => "/user/get-users",
    }),
    getEmployee: builder.query({
      query: (employeeId) => `/user/get-user?userId=${employeeId}`,
    }),
    getEmployeeRoles: builder.query({
      query: () => "/admin/get-roles",
    }),
    createEmployee: builder.mutation({
      query: (employeeData) => ({
        url: "/admin/create-user",
        method: "POST",
        body: employeeData,
      }),
    }),
    updateEmployee: builder.mutation({
      query: ({ employeeData, userId }) => ({
        url: `/admin/update-user?userId=${userId}`,
        method: "PATCH",
        body: employeeData,
      }),
    }),
    authenticateEmployee: builder.mutation({
      query: (employeeData) => ({
        url: "/user/login",
        method: "POST",
        body: employeeData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    deleteEmployee: builder.mutation({
      query: (employeeData) => ({
        url: "/admin/delete-user",
        method: "DELETE",
        body: employeeData,
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeQuery,
  useGetEmployeeRolesQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useAuthenticateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;
