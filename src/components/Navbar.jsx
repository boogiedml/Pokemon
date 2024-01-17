import React from "react";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
};

export default Navbar;
