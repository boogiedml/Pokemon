import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("POS.com.meta");
      headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountryCode: builder.query({
      query: () => "/utils/countries",
    }),
    getBizConfig: builder.query({
      query: () => "/utils/bizness-config",
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/setup/create-user",
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    authenticateUser: builder.mutation({
      query: (userData) => ({
        url: "/admin/login",
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    authenticateUserEmployee: builder.mutation({
      query: (userData) => ({
        url: "/user/login",
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userData, userId }) => ({
        url: `/setup/update-user?userId=${userId}`,
        method: "PATCH",
        body: userData,
      }),
    }),
    changePassword: builder.mutation({
      query: ({ userData }) => ({
        url: "/admin/change-password",
        method: "PUT",
        body: userData,
      }),
    }),
  }),
});

export const {
  useGetCountryCodeQuery,
  useGetBizConfigQuery,
  useCreateUserMutation,
  useAuthenticateUserMutation,
  useAuthenticateUserEmployeeMutation,
  useUpdateUserMutation,
  useChangePasswordMutation,
} = authApi;
