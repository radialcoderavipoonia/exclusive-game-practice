import React from "react";
import { playingGames } from "../common/Helper"; // Importing data from Helper.js
import CommonButtonGradient from "../common/CustomButtonGradient"; // Importing a common button component
import { RightIcon } from "../common/Icons";

const Luxury = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 py-4">
      {/* Background */}
      <div
        className="md:bg-[url('/assets/images/background/luxury.webp')] bg-[url('/assets/images/background/luxury_sm.webp')] rounded-2xl border-oslo-gray-second border-[1px] bg-center md:bg-100 bg-cover bg-no-repeat"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {/* Content */}
        <div className="flex justify-center py-11 flex-col max-w-[419px] mx-auto px-3">
          {/* Main Heading */}
          <h2 className="font-normal text-white md:text-2xl text-[24px] font-anton text-center leading-[100%]">
            Luxury
          </h2>
          {/* Description */}
          <p className="lg:pt-4 pt-3 text-center font-inter font-medium lg:text-base text-sm text-gray-dark">
            lleva tu experiencia de juego al siguiente nivel. Con todas las
            características de la versión Silver y la potencia adicional de la
            tecnología React .
          </p>
          {/* Price */}
          <h2 className="pt-8 text-center text-white xl:text-3xl lg:text-[36px] text-[30px] font-normal font-anton mb-0 leading-[100%]">
            $9000
          </h2>
          {/* List of Features */}
          <div className="pt-1">
            {playingGames.map((value, index) => {
              return (
                <div key={index} className="flex gap-2 items-start pt-3">
                  <p>
                    <RightIcon />
                  </p>
                  <p className="text-gray-dark text-center font-inter mx-auto font-medium lg:text-base text-sm mb-0">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* Button */}
          <div className="mt-9 mx-auto">
            <CommonButtonGradient content="Comprar ahora" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
