import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from "./features/pokemonSlice";

import { pokemonApi } from "./services/pokemon";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === "development"
      ? getDefaultMiddleware({
          serializableCheck: false,
        }).concat(pokemonApi.middleware)
      : getDefaultMiddleware().concat(pokemonApi.middleware),
});
