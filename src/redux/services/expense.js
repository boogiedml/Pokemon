import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const expenseApi = createApi({
  reducerPath: "expenseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("POS.com.meta");
      headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllExpenses: builder.query({
      query: () => "/user/expense/fetch",
    }),
    getExpense: builder.query({
      query: (expenseId) => `/user/expense/fetch/${expenseId}`,
    }),
    getTotalExpense: builder.query({
      query: ({ startDate, endDate }) =>
        `/user/expense/total?startDate=${startDate}&endDate=${endDate}`,
    }),
    createExpense: builder.mutation({
      query: (expenseData) => ({
        url: "/user/expense/register",
        method: "POST",
        body: expenseData,
      }),
    }),
    updateExpense: builder.mutation({
      query: ({ expenseData, expenseId }) => ({
        url: `/user/expense/edit?id=${expenseId}`,
        method: "PATCH",
        body: expenseData,
      }),
    }),
    deleteExpense: builder.mutation({
      query: (expenseData) => ({
        url: "/user/expense/delete",
        method: "DELETE",
        body: expenseData,
      }),
    }),
  }),
});

export const {
  useGetAllExpensesQuery,
  useGetExpenseQuery,
  useGetTotalExpenseQuery,
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expenseApi;
