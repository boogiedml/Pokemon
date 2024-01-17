import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const salesApi = createApi({
  reducerPath: "salesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("POS.com.meta");
      headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllSales: builder.query({
      query: () => "/user/get-sales",
    }),
    getCustomerSales: builder.query({
      query: (phoneNumber) => `/user/get-sales?phoneNumber=${phoneNumber}`,
    }),
    getSale: builder.query({
      query: (trnRef) => `/user/get-sale?trnRef=${trnRef}`,
    }),
    getSalesSummary: builder.query({
      query: (userId) => `/user/get-sales-summary?userId=${userId}`,
    }),
    initiateSalesProcess: builder.mutation({
      query: (saleDetail) => ({
        url: "/user/make-sales",
        method: "POST",
        body: saleDetail,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    updateSaleStatus: builder.mutation({
      query: (saleDetail) => ({
        url: "/admin/change-sales-status",
        method: "PATCH",
        body: saleDetail,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllSalesQuery,
  useGetSaleQuery,
  useInitiateSalesProcessMutation,
  useUpdateSaleStatusMutation,
  useGetCustomerSalesQuery,
  useGetSalesSummaryQuery,
} = salesApi;
