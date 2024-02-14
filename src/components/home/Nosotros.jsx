import React from "react";
import { eligieron } from "../common/Helper"; // Importing necessary data
import Image from "next/image"; // Importing the Image component from Next.js
import CommonButton from "../common/CustomButton"; // Importing a custom button component

// Define the Nosotros component
const Nosotros = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 md:py-24 py-20">
      {/* Title */}
      <h2 className="text-white text-center font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] leading-[100%] lg:pb-0 pb-2">
        Ellos eligieron apostar con nosotros
      </h2>
      {/* Container for client images */}
      <div className="flex justify-center gap-5 sm:gap-6 items-center flex-wrap pt-9">
        {/* Mapping through the clients data */}
        {eligieron.map((value, index) => {
          return (
            <div
              key={index}
              className="relative group/items lg:mt-6"
              data-aos={value.fade}
              data-aos-delay={value.delay}
            >
              {/* Client image */}
              <Image
                src={value.image}
                width={364}
                height={265}
                alt="slots cards images"
                className="lg:w-[364px] lg:h-[265px] sm:w-[264px] sm:h-[165px]"
              />
              {/* Overlay image */}
              <Image
                src="/assets/images/vivo/bg_layer.webp"
                width={364}
                height={265}
                alt="slots cards layer"
                className="absolute top-0 start-0 w-full h-full lg:w-[364px] lg:h-[265px] z-10 opacity-0 group-hover/items:opacity-100 transition-all duration-300 ease-in-out"
              />
              {/* Button */}
              <div className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] z-20 opacity-0 group-hover/items:opacity-100 transition-all duration-300 ease-in-out">
                <CommonButton content="Rcasinovip" />
              </div>
            </div>
          );
        })}
      </div>
      {/* Additional information (visible on larger screens) */}
      <div
        className="text-center pt-[38px] lg:block hidden"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <p className="text-white lg:text-base text-sm font-inter font-semibold ">
          Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
          de emocionantes experiencias de juego.
        </p>
        <p className="text-white lg:text-base text-sm font-inter font-semibold ">
          Ahora, la próxima apuesta está en tus manos.
        </p>
        <p className="text-white lg:text-base text-sm font-inter font-semibold ">
          Elige ganar. Elige exclusive game.
        </p>
      </div>
      {/* Additional information (visible on smaller screens) */}
      <p
        className="text-white lg:text-base text-sm font-inter font-semibold lg:hidden block pt-8 text-center px-3"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
        de emocionantes experiencias de juego. Ahora, la próxima apuesta está en
        tus manos. Elige ganar. Elige exclusive game.
      </p>
    </div>
  );
};

export default Nosotros; // Export the Nosotros component
