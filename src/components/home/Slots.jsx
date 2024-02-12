import React from "react";
import { slotsCard } from "../common/Helper";
import Image from "next/image";
import CommonButton from "../common/CommonButton";
import CommonButtonGradient from "../common/CommonButtonGradient";

const Slots = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 sm:py-14 pb-14 pt-6">
      <div className="max-w-[944px] mx-auto px-3">
        <h2 className="text-center xl:text-3xl lg:text-[36px] text-[30px] font-anton font-normal text-dark-green leading-[100%]">
          Slots
        </h2>
        <p className="lg:pt-4 pt-3 mb-0 font-inter font-medium lg:text-base text-sm text-dark-green text-center">
          En Exclusive Games, ofrecemos una selección de más de 600 juegos de
          los principales desarrolladores, como Aristocrat, Amatic, EGT,
          Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
          incansablemente para innovar y ampliar nuestra oferta de experiencias,
          garantizando la máxima seguridad con operaciones protegidas por
          cifrado SSL de 256 bits.
        </p>
      </div>
      <div className="lg:pt-9 pt-8">
        <div className="flex md:justify-center justify-between md:gap-6 items-center flex-wrap">
          {slotsCard.map((value, index) => {
            return (
              <div key={index} className="relative group mt-6 md:mt-0">
                <Image
                  src={value.image}
                  width={364}
                  height={265}
                  alt="slots cards images"
                  className="xl:w-[364px] xl:h-[265px] sm:w-[264px] sm:h-[165px]"
                />
                <Image
                  src="/assets/images/slots/background_layer.png"
                  width={364}
                  height={265}
                  alt="slots cards layer"
                  className="absolute top-0 xl:w-[364px] xl:h-[265px] md:w-[264px] md:h-[165px] start-0 w-full h-full z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                />
                <div className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <CommonButton content="Jugar" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center pt-10">
          <CommonButtonGradient content="Mostrar más" />
        </div>
      </div>
    </div>
  );
};

export default Slots;
