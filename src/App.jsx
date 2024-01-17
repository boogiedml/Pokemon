import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import MyTeam from "./pages/MyTeam";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/pokemón/:pokemonName"
          element={<PokemonDetails />}
        />
        <Route exact path="/pokemón/my-team" element={<MyTeam />} />
      </Routes>
    </>
  );
}

export default App;
