import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowUp } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-mainBlue w-full fixed top-0 left-0 z-30">
      <img
        onClick={() => navigate("/")}
        className="w-40 mx-auto cursor-pointer"
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*O4T4S2yqbgOpm9hzC2CxzQ.png"
        alt=""
      />
      <button
        onClick={() => navigate(-1)}
        className="absolute hidden md:block left-10 top-6 border-[1.5px] p-3 rounded-full hover:-rotate-90 transition-all duration-500"
      >
        <IoArrowUp />
      </button>
    </div>
  );
};

export default Navbar;
