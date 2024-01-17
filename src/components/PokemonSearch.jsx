import React from "react";
import { FiSearch } from "react-icons/fi";

export const PokemonSearch = ({ setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(searchInput);
  };

  return (
    <div className="bg-white text-black max-w-lg mx-auto rounded-full py-2.5 md:py-3 px-5 relative">
      <FiSearch size={20} className="absolute left-4 top-3.5 md:top-4" />
      <input
        type="text"
        className="w-full h-full outline-none border-none ps-6 pe-9 placeholder:text-reallyGray font-poppins"
        placeholder="Eg. Pikahu"
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearchClick}
        className="absolute right-1 top-1 bg-black text-white px-3 py-1.5 md:py-2 rounded-full font-[500] hover:-rotate-45 transition-all duration-300"
      >
        Go
      </button>
    </div>
  );
};
