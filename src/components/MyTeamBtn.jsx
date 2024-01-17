import React from 'react'
import { useNavigate } from 'react-router-dom';

export const MyTeamBtn = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/pokemón/my-team")}
      className="fixed bottom-5 right-5 bg-mainBlue py-1.5 px-5 rounded-full border-[2px] border-white font-inter font-[500] cursor-pointer"
    >
      My Team
    </div>
  );
}
