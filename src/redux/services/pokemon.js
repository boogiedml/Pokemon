import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => "pokemon?limit=151",
    }),
    getPokemon: builder.query({
      query: (pokeId) => `pokemon/${pokeId}`,
    }),
  }),
});

export const { useGetAllPokemonQuery, useGetPokemonQuery } = pokemonApi;
