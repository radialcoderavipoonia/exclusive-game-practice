import React from "react";
import { marcaCard } from "../common/Helper"; // Importing necessary components and data
import Image from "next/image";

// Define the Marca component
const Marca = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 xl:pb-24 lg:pb-16 pb-12 sm:mt-0 mt-[-50px]">
      {/* Title of the section */}
      <p className="text-center font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] text-dark-green mb-0">
        Nuestros Atributos de Marca
      </p>
      {/* Container for the brand attributes */}
      <div className="xl:pt-[60px] pt-9">
        <div className="flex flex-wrap sm:flex-row lg:gap-12 md:gap-0 gap-4 flex-col justify-between items-start relative">
          {/* Mapping through the marcaCard array to render each attribute */}
          {marcaCard.map((value, index) => {
            return (
              <div key={index} className="max-w-[263px] mx-auto">
                {/* Brand attribute image */}
                <div className="text-center flex justify-center lg:w-[100px] w-[70px] lg:h-[100px] h-[70px] mx-auto">
                  {value.image}
                </div>
                {/* Brand attribute title */}
                <p
                  className="text-center font-anton font-normal text-xl text-dark-green lg:pt-4 pt-3 mb-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {value.title}
                </p>
                {/* Brand attribute description */}
                <p
                  className="text-center font-inter font-medium lg:text-base text-sm text-
limed-pruce pt-[10px] mb-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {value.description}
                </p>
              </div>
            );
          })}
          <div className="absolute left-[22%] xl:top-[5%] top-[10%] lg:block hidden">
            <Image
              src="/assets/images/marca/top_curve_arrow.png"
              width={240}
              height={42}
              alt="Logo"
              className="xl:w-[240px] xl:h-[42px] w-[200px] h-[30px]"
            />
          </div>
          <div className="absolute right-[22%] top-[25%] lg:block hidden">
            <Image
              src="/assets/images/marca/bottom_curve_arrow.png"
              width={240}
              height={42}
              alt="Logo"
              className="xl:w-[240px] xl:h-[42px] w-[200px] h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marca; // Export the Marca component
