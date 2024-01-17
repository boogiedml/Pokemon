import React from "react";

import loaderImg from "../assets/pokemon_delivery.svg";

export default (props) => {
  const { show } = props;

  return (
    <div
      className={`z-50 bg-white fixed w-full h-full top-0 right-0 flex justify-center items-center ${
        show ? "block" : "hidden"
      }`}
    >
      <img className="animate-spin w-16" src={loaderImg} alt="" />
    </div>
  );
};
