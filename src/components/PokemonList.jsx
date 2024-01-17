import React from "react";
import { useSelector } from "react-redux";

import { PokemonCard } from "./PokemonCard";
import sadPikachu from "../assets/pikachu-world-cap.png";

export const PokemonList = ({ filter }) => {
  const { allPokemonData } = useSelector((state) => state.pokemon);

  const filteredPokemon = allPokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="px-5 md:px-10 lg:px-14 xl:px-20 py-10">
      {filteredPokemon.length === 0 ? (
        <div className="max-w-sm mx-auto text-center text-reallyGray mt-20">
          <h3 className="text-3xl font-[500] mb-3">Oops! Try again</h3>
          <p className="text-sm">
            The Pokémon you're looking for is a unicron. It doesn't exist in
            this list.
          </p>
          <img className="mx-auto w-52" src={sadPikachu} alt="" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredPokemon.map((p, i) => (
            <PokemonCard props={p} key={`pokemon${i}`} />
          ))}
        </div>
      )}
    </div>
  );
};
