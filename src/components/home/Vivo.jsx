import React from "react";
import { juegos } from "../common/Helper"; // Importing data for live games
import Image from "next/image"; // Importing the Image component from Next.js
import CommonButton from "../common/CustomButton"; // Importing a custom CommonButton component

// Define the Vivo component
const Vivo = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 pb-20">
      {/* Title */}
      <h2 className="text-white text-center font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] leading-[100%]">
        Juegos en vivo
      </h2>
      {/* Live games section */}
      <div className="xl:pt-[60px] pt-9 flex justify-center gap-6 flex-wrap">
        {juegos.map((value, index) => {
          return (
            <div
              key={index}
              className="relative group"
              data-aos={value.fade}
              data-aos-delay={value.delay}
            >
              {/* Live game image */}
              <Image
                src={value.image}
                width={364}
                height={256}
                alt="slots cards images"
                className="xl:w-[364px] xl:h-[256px] lg:w-[264px] sm:w-[220px] lg:h-[165px] sm:h-[150px]"
              />
              {/* Hover effect layer */}
              <Image
                src="/assets/images/vivo/bg_layer.webp"
                width={364}
                height={256}
                alt="slots cards layer"
                className="absolute top-0 start-0 xl:w-[364px] xl:h-[256px] lg:w-[264px] lg:h-[165px] sm:w-[220px] sm:h-[150px] z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              />
              {/* Button */}
              <div className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <CommonButton content="Reproducir ahora" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vivo; // Export the Vivo component
