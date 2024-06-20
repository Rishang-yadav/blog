import React from "react";

export const Hero = ({ item:{image} }: { item: any }) => {
//   console.log("log", item);
  return (
    <div className="text-white w-full h-[400px] rounded">
      <img src={image} alt="logo" className="w-full h-full object-cover rounded"/>
    </div>
  );
};
