export const getTypeClassName = (typeName) => {
  const typeColors = {
    bug: "bg-[#049669]",
    dragon: "bg-[#2EC5B6]",
    grass: "bg-[#15C173]",
    steel: "bg-[#72E3A6]",
    dark: "bg-[#43474A]",
    flying: "bg-[#8A9CAD]",
    normal: "bg-[#C18CB9]",
    ghost: "bg-[#9A55A1]",
    rock: "bg-[#63320B]",
    ground: "bg-[#875629]",
    fighting: "bg-[#C75001]",
    fire: "bg-[#F0271B]",
    electric: "bg-[#FEBF02]",
    poison: "bg-[#6E45FF]",
    psychic: "bg-[#DB00B5]",
    fairy: "bg-[#EF4268]",
    water: "bg-[#4360ED]",
    ice: "bg-[#90E0EE]",
    default: "bg-black",
  };

  return typeColors[typeName] || typeColors.default;
};

export const randomColors = [
  "bg-[#049669]",
  "bg-[#2EC5B6]",
  "bg-[#15C173]",
  "bg-[#72E3A6]",
  "bg-[#43474A]",
  "bg-[#8A9CAD]",
  "bg-[#C18CB9]",
  "bg-[#9A55A1]",
  "bg-[#63320B]",
  "bg-[#875629]",
  "bg-[#C75001]",
  "bg-[#F0271B]",
  "bg-[#FEBF02]",
  "bg-[#6E45FF]",
  "bg-[#DB00B5]",
  "bg-[#EF4268]",
  "bg-[#4360ED]",
  "bg-[#90E0EE]",
];
