import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("POS.com.meta");
      headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userId) => `/user/get-user?userId=${userId}`,
    }),
    getAccountBal: builder.query({
      query: () => "/admin/account-balance",
    }),
  }),
});

export const { useGetUserQuery, useGetAccountBalQuery } = userApi;
