import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("POS.com.meta");
      headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product/get-products`,
    }),
    getProduct: builder.query({
      query: (name) => `/product/get-product?q=${name}`,
    }),
    createProduct: builder.mutation({
      query: (productData) => ({
        url: "/product/register",
        method: "POST",
        body: productData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productData) => ({
        url: "/product/delete",
        method: "DELETE",
        body: productData,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productApi;
