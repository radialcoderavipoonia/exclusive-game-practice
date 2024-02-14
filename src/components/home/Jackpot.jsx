import Image from "next/image";
import React from "react";
import { potenciando } from "../common/Helper";
import { RightIcon } from "../common/Icons";

const Jackpot = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 pt-14">
      <div className="flex md:flex-row flex-col justify-between items-center xl:gap-10 gap-6">
        {/* Jackpot Image */}
        <Image
          src="/assets/images/jackpot/jackpot.webp"
          width={557}
          height={439}
          alt="jackpot images"
          className="xl:w-[557px] xl:h-[439px] lg:w-[450px] w-[350px] lg:h-[400px] h-[300px]"
          data-aos="fade-right"
          data-aos-delay="100"
        />
        <div data-aos="fade-left" data-aos-delay="100">
          {/* Heading */}
          <h2 className="text-white font-anton md:text-start text-center font-normal xl:text-3xl lg:text-[36px] text-[30px] leading-[100%]">
            Potenciando sus elecciones
          </h2>
          {/* Subheading */}
          <p className="lg:pt-4 pt-3 mb-0 text-gray-dark md:text-start text-center font-inter font-medium lg:text-base text-sm">
            Con Exclusive Game lo mejor está de tu lado.
          </p>
          {/* List of Features */}
          <div className="pt-3 xl:max-w-[412px]">
            {potenciando.map((value, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 md:justify-start justify-center items-start pt-3"
                >
                  <RightIcon />
                  <p className="text-gray-dark font-inter md:text-start text-center font-medium lg:text-base text-sm mb-0">
                    {value.title}
                  </p>
                </div>
              );
            })}
          </div>
          {/* Additional Information */}
          <p className="pt-6 mb-0 text-gray-dark md:text-start text-center font-inter font-medium lg:text-base text-sm">
            Te reintegramos todo lo invertido en fichas en la moneda que elijas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jackpot;
