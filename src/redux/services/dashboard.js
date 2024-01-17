import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("POS.com.meta");
      headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDashboardTotalWithoutQuery: builder.query({
      query: () => "/admin/dashboard/totals",
    }),
    getDashboardTotalWithQuery: builder.query({
      query: (dateQuery) => `/admin/dashboard/totals?date=${dateQuery}`,
    }),
    getDashboardTotalByDateRange: builder.query({
      query: ({ startDate, endDate }) =>
        `/admin/dashboard/totals?startDate=${startDate}&endDate=${endDate}`,
    }),
  }),
});

export const {
  useGetDashboardTotalWithoutQueryQuery,
  useGetDashboardTotalWithQueryQuery,
  useLazyGetDashboardTotalWithQueryQuery,
  useGetDashboardTotalByDateRangeQuery,
} = dashboardApi;
