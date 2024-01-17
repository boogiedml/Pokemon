import React from "react";

import Navbar from "../components/Navbar";
import { PokemonCard } from "../components/PokemonCard";
import pik from "../assets/pokemon_delivery.svg";

const MyTeam = () => {
  const existingTeam = JSON.parse(localStorage.getItem("myPokemons")) || [];

  return (
    <>
      <Navbar />
      <section className="px-5 md:px-10 lg:px-14 xl:px-20 mt-28 mb-10">
        <h3 className="text-mainBlue font-montserrat text-xl md:text-2xl font-[500] capitalize py-5">
          My Team
        </h3>
        <img className="w-28 fixed bottom-5 right-5" src={pik} alt="" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {existingTeam.map((p, i) => (
            <PokemonCard props={p} key={`pokemon${i}`} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MyTeam;
