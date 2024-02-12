import React from "react";
import { RightIcon } from "../common/Icons"; // Importing a custom RightIcon component
import Image from "next/image"; // Importing the Image component from Next.js
import CommonButton from "../common/CommonButton"; // Importing a custom button component

// Define the Platinum component
const Platinum = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 xl:py-12 py-6">
      {/* Background container */}
      <div className="lg:bg-[url('/assets/images/background/platinum_image.png')] bg-[#092423] lg:bg-dark-green rounded-2xl lg:border-0 border-[#839090] border-[1px] bg-center lg:bg-100 bg-contain bg-no-repeat">
        <div className="flex md:flex-row flex-col-reverse items-center lg:gap-20 lg:px-12 px-6 py-12">
          {/* Right side */}
          <div className="md:mt-0 mt-8">
            {/* Offer title */}
            <h3 className="text-white md:text-start text-center font-anton md:text-2xl text-[24px] font-normal">
              Platinum
            </h3>
            {/* Offer description */}
            <p className="font-inter text-white md:text-start text-center font-medium lg:text-base text-sm max-w-[364px] lg:pt-4 pt-3 mb-0">
              Diseño totalmente personalizado. Contáctanos para un presupuesto.
            </p>
            {/* Price */}
            <p className="md:pt-8 pt-5 text-white mb-0 md:text-start text-center font-anton xl:text-3xl lg:text-[36px] text-[30px] font-normal">
              Consultar precio
            </p>
            {/* Features */}
            <div className="flex gap-2 items-center md:justify-start justify-center lg:pt-4 pt-3 md:pb-10 pb-6">
              <span>
                <RightIcon />
              </span>
              <p className="font-inter font-medium lg:text-base text-sm text-white ">
                Personalizable
              </p>
            </div>
            {/* Button */}
            <div className="flex md:justify-start justify-center">
              <CommonButton content="Comprar ahora" />
            </div>
          </div>
          {/* Left side */}
          <Image
            src="/assets/images/platnium/platnium.png"
            width={602}
            height={419}
            alt="platinum image"
            className="xl:w-[602px] lg:w-[500px] sm:w-[400px] xl:h-[419px] lg:h-[345px] sm:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Platinum; // Export the Platinum component
