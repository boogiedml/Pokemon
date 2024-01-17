import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const invoiceApi = createApi({
  reducerPath: "invoiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("POS.com.meta");
      headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGeneratedInvoice: builder.query({
      query: (trnRef) => `/user/get-invoice?trnRef=${trnRef}`,
    }),
    prepareInvoice: builder.mutation({
      query: (invoiceData) => ({
        url: `/user/prepare-invoice`,
        method: "POST",
        body: invoiceData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetGeneratedInvoiceQuery, usePrepareInvoiceMutation } =
  invoiceApi;
