import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import { getTypeClassName, randomColors } from "../data";
import { useGetPokemonQuery } from "../redux/services/pokemon";
import { setSelectedPokemon } from "../redux/features/pokemonSlice";
import { Stat } from "../components/Stat";
import { MyTeamBtn } from "../components/MyTeamBtn";
import Preloader from "../components/Preloader";

const PokemonDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isInTeam, setIsInTeam] = useState(false);
  const [localDataArrived, setLocalDataArrived] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const pokeId = queryParams.get("pokeId");
  const { selectedPokemon } = useSelector((state) => state.pokemon);
  const { data: pokemonDetail, isLoading } = useGetPokemonQuery(pokeId);

  useEffect(() => {
    if (pokemonDetail) {
      dispatch(setSelectedPokemon(pokemonDetail));

      const existingTeam = JSON.parse(localStorage.getItem("myPokemons")) || [];
      const isAlreadyInTeam = existingTeam.some(
        (pokemon) => pokemon.id === pokemonDetail.id
      );
      setIsInTeam(isAlreadyInTeam);
      setLocalDataArrived(true);
    }
  }, [pokemonDetail, dispatch]);

  const handleAddToTeam = () => {
    const existingTeam = JSON.parse(localStorage.getItem("myPokemons")) || [];
    const isAlreadyInTeam = existingTeam.some(
      (pokemon) => pokemon.id === selectedPokemon.id
    );

    if (!isAlreadyInTeam && existingTeam.length < 6) {
      const updatedTeam = [...existingTeam, selectedPokemon];
      localStorage.setItem("myPokemons", JSON.stringify(updatedTeam));
      setIsInTeam(true);
    } else if (isAlreadyInTeam) {
      const updatedTeam = existingTeam.filter(
        (pokemon) => pokemon.id !== selectedPokemon.id
      );
      localStorage.setItem("myPokemons", JSON.stringify(updatedTeam));
      setIsInTeam(false);
    } else {
      alert("You can only have a maximum of 6 Pokémon in your team.");
    }
  };

  if (isLoading && !selectedPokemon) {
    return <Preloader show={!isLoading ? false : true} />;
  }

  return (
    <>
      <Navbar />
      <section className="px-5 md:px-10 lg:px-14 xl:px-20 mt-28 mb-10 flex flex-col gap-5">
        <div className="relative bg-white text-black p-5 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-reallyGray font-[500] mb-2">
                #{selectedPokemon?.id}
              </p>
              <h3 className="text-mainBlue font-montserrat text-lg md:text-xl font-[500] capitalize">
                {selectedPokemon?.name}
              </h3>
            </div>
            <div className="flex gap-3">
              {selectedPokemon?.types.map((t, i) => (
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
          <div className="flex flex-col-reverse md:flex-row">
            <div className="basis-1/2 pt-5 md:pt-10 xl:pr-60">
              {selectedPokemon?.stats.map((s, i) => (
                <Stat
                  key={`stat${i}`}
                  color="bg-green-500"
                  title={s.stat.name}
                  rangeValue={s.base_stat}
                />
              ))}
            </div>
            <div className="basis-1/2 relative flex justify-center items-center">
              <img
                className="w-[50%]"
                src={selectedPokemon?.sprites.other.home.front_shiny}
                alt={selectedPokemon?.name}
              />
            </div>
          </div>
          {localDataArrived && (
            <div
              onClick={handleAddToTeam}
              className={`w-fit md:absolute md:bottom-5 md:right-5 ${
                isInTeam ? "bg-[#F14B3D]" : "bg-mainBlue"
              } text-white py-1.5 px-5 rounded-full bg-[1px] border-whit font-[500] cursor-pointer`}
            >
              {isInTeam ? "Remove from team" : "Add to team"}
            </div>
          )}
        </div>

        {/* Breeding  */}
        <div className="bg-white text-black p-5 rounded-lg shadow-md">
          <h3 className="text-mainBlue font-montserrat text-lg md:text-xl font-[500] capitalize mb-3">
            Breeding
          </h3>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="w-full">
              <p className="text-center font-[500] font-poppins">Height</p>
              <div className="w-full bg-lightGray border-[1px] border-[#E3E8E6] rounded-md text-sm p-2 text-center font-[500]">
                {selectedPokemon?.height}
              </div>
            </div>
            <div className="w-full">
              <p className="text-center font-[500] font-poppins">Weight</p>
              <div className="w-full bg-lightGray border-[1px] border-[#E3E8E6] rounded-md text-sm p-2 text-center font-[500]">
                {selectedPokemon?.weight}
              </div>
            </div>
          </div>
        </div>

        {/* Moves  */}
        <div className="bg-white text-black p-5 rounded-lg shadow-md">
          <h3 className="text-mainBlue font-montserrat text-lg md:text-xl font-[500] capitalize mb-3">
            Moves
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {selectedPokemon?.moves.slice(0, 25).map((m, i) => (
              <div
                key={`move${i}`}
                className={`${
                  randomColors[Math.floor(Math.random() * randomColors.length)]
                } capitalize text-white text-center rounded-md p-2 hover:scale-105 transition-all duration-300`}
              >
                <h6 className="text-reallyGray bg-white h-6 w-6 flex justify-center items-center font-bold rounded-full mx-auto mb-2">
                  {m.move.name[0]}
                </h6>
                <span>{m.move.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Abilities  */}
        <div className="bg-white text-black p-5 rounded-lg shadow-md">
          <div className="flex justify-between mb-3">
            <h3 className="text-mainBlue font-montserrat text-lg md:text-xl font-[500] capitalize">
              Abilities
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="bg-[#F14B3D] w-3 h-3 rounded-full"></span>
                <small className="font-[500] font-poppins">Hidden</small>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-[#60D394] w-3 h-3 rounded-full"></span>
                <small className="font-[500] font-poppins">Active</small>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {selectedPokemon?.abilities.map((a, i) => (
              <div
                key={`ability${i}`}
                className="relative bg-reallyGray text-white text-center rounded-md p-2 capitalize hover:scale-105 transition-all duration-300"
              >
                <h6 className="text-reallyGray bg-white h-6 w-6 flex justify-center items-center font-semibold rounded-full mx-auto mb-2">
                  {a.ability.name[0]}
                </h6>
                <span>{a.ability.name}</span>
                {a.is_hidden ? (
                  <span className="bg-[#F14B3D] absolute top-3 right-3 w-3 h-3 rounded-full"></span>
                ) : (
                  <span className="bg-[#60D394] absolute top-3 right-3 w-3 h-3 rounded-full"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <MyTeamBtn />
    </>
  );
};

export default PokemonDetails;
