import React from "react";
import { useSelector } from "react-redux";

import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ filter }) => {
  const { allPokemonData } = useSelector((state) => state.pokemon);

  const filteredPokemon = allPokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {filteredPokemon.map((p, i) => (
        <PokemonCard props={p} key={`pokemon${i}`} />
      ))}
    </div>
  );
};
