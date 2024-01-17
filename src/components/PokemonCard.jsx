import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSelectedPokemon } from "../redux/features/pokemonSlice";
import { getTypeClassName } from "../data";

export const PokemonCard = ({ props }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setSelectedPokemon(props));
        navigate(`/pokemón/${props.name}?pokeId=${props.id}`);
      }}
      className="bg-white text-black hover:bg-lightGray transition-all duration-500 p-5 rounded-lg shadow-md cursor-pointer"
    >
      <div className="flex justify-between gap-3">
        <h3 className="text-mainBlue font-montserrat font-[500] capitalize">
          {props.name}
        </h3>
        <p className="text-reallyGray font-[500]">#{props.id}</p>
      </div>
      <div className="pb-10">
        <img
          className="w-[80%] mx-auto"
          src={props.sprites.other.home.front_shiny}
          alt={props.name}
        />
      </div>
      <div className="flex justify-between items-center">
        {props.types.map((t, i) => (
          <span
            key={`type${i}`}
            className={`${getTypeClassName(
              t.type.name
            )} capitalize text-white py-1 px-5 text-sm font-[500] rounded-full`}
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};
