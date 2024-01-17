import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPokemon: [],
  allPokemonData: [],
  selectedPokemon: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setAllPokemon: (state, action) => {
      state.allPokemon = action.payload;
    },
    setAllPokemonData: (state, action) => {
      state.allPokemonData.push(action.payload);
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setAllPokemon, setAllPokemonData, setSelectedPokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
