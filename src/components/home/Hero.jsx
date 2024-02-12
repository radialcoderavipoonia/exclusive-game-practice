import React from "react";
import NavBar from "../common/NavBar";
import CommonButtonGradient from "../common/CommonButtonGradient";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/assets/images/background/hero_image.png')] bg-cover bg-no-repeat">
        <NavBar />
        <div className="h-screen flex justify-center items-center container xl:max-w-[1140px] mx-auto xl:px-0 px-3">
          <div className="max-w-[727px] mx-auto">
            <h1 className="font-anton max-w-[505px] leading-[1.2] mx-auto text-center text-white xl:text-4xl sm:text-[52px] text-[40px] font-normal">
              Exclusive Games. Pasión por ganar
            </h1>
            <p className="text-white font-inter font-medium lg:text-base text-sm text-center lg:pt-4 pt-3 mb-0">
              En Exclusive Games somos un equipo apasionado de personas
              dedicados al desarrollo de multiplataformas para juegos de azar. A
              lo largo de nuestra vida consumimos todo tipo de juegos hasta que
              un día decidimos crear los propios.
            </p>
            <div className="flex justify-center pt-10">
              <CommonButtonGradient content="Empezar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
