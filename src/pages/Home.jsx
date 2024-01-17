import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { PokemonSearch } from "../components/PokemonSearch";
import { PokemonList } from "../components/PokemonList";
import { useGetAllPokemonQuery } from "../redux/services/pokemon";
import {
  setAllPokemon,
  setAllPokemonData,
} from "../redux/features/pokemonSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: pokemonList, error, isLoading } = useGetAllPokemonQuery();

  useEffect(() => {
    if (pokemonList) {
      dispatch(setAllPokemon(pokemonList.results));
      pokemonList?.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    }
  }, [pokemonList]);

  function fetchPokemonData(pokemon) {
    let url = pokemon.url;
    fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        dispatch(setAllPokemonData(pokeData));
      });
  }

  return (
    <>
      <header className="bg-mainBlue text-white py-16 px-5">
        <div className="max-w-xs mx-auto mb-5">
          <img
            className="w-[60%] md:w-[70%] lg:w-[80%] xl:w-auto mx-auto"
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*O4T4S2yqbgOpm9hzC2CxzQ.png"
            alt=""
          />
        </div>
        <h4 className="font-[500] text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-3">
          Who are you looking for?
        </h4>
        <PokemonSearch setSearchQuery={setSearchQuery} />
      </header>
      <PokemonList filter={searchQuery} />
    </>
  );
};

export default Home;
