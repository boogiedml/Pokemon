import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("POS.com.meta");
      headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => `/customers/fetch-all`,
    }),
    getCustomer: builder.query({
      query: (userName) => `/customers/fetch?q=${userName}`,
    }),
    createCustomer: builder.mutation({
      query: (customerData) => ({
        url: `/customers/register`,
        method: "POST",
        body: customerData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    updateCustomer: builder.mutation({
      query: ({ customerData, phoneNumber, companyId }) => ({
        url: `/customers/edit?phoneNumber=${phoneNumber}&companyId=${companyId} `,
        method: "PATCH",
        body: customerData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useGetCustomerQuery,
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
} = customerApi;
