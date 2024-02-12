import React from "react";
import { NuestrosCards, marcaCard } from "../common/Helper";

const Marca = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 xl:py-24 lg:pb-16 pb-12 sm:mt-0 mt-[-50px]">
      <p className="text-center font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] text-dark-green mb-0">
        Nuestros Atributos de Marca
      </p>
      <div className="xl:pt-[60px] pt-9">
        <div className="flex flex-wrap sm:flex-row lg:gap-12 md:gap-0 gap-4 flex-col justify-between items-start">
          {marcaCard.map((value, index) => {
            return (
              <div key={index} className="max-w-[263px] mx-auto">
                <div className="text-center flex justify-center lg:w-[100px] w-[70px] lg:h-[100px] h-[70px] mx-auto">
                  {value.image}
                </div>
                <p className="text-center font-anton font-normal text-xl text-dark-green lg:pt-4 pt-3 mb-0">
                  {value.title}
                </p>
                <p className="text-center font-inter font-medium lg:text-base text-sm text-dark-green pt-[10px] mb-0">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Marca;
