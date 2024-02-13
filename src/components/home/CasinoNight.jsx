import React from "react";
import CommonButtonGradient from "../common/CommonButtonGradient"; // Importing CommonButtonGradient component
import Image from "next/image"; // Importing Image component from Next.js

// CasinoNight component
const CasinoNight = () => {
  return (
    <div id="choose" className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 md:py-20 pb-20 sm:mt-0 mt-[-50px]"> {/* Container */}
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-14 gap-8"> {/* Flex container */}
        <div className="max-w-[526px]"  data-aos="fade-right"> {/* Text content */}
          <h2 className="text-dark-green md:text-start text-center leading-[100%] font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] mb-0">
            Por qué elegirnos {/* Heading */}
          </h2>
          <p className="mb-0 lg:pt-4 pt-3 font-inter md:text-start text-center font-medium lg:text-base text-sm text-dark-green">
            Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
            todo lo invertido en fichas en la moneda que elijas. En Exclusive
            Games siempre sumamos nuevos juegos. Juegos crash, los juegos
            interactivos que más pide la gente. Con Exclusive Games empezás a
            ganar ya! Creamos tu plataforma en solo 2 semanas. {/* Paragraph */}
          </p>
          <div className="mt-6 flex md:justify-start justify-center"> {/* Button */}
            <CommonButtonGradient content="Aprende más" /> {/* CommonButtonGradient component */}
          </div>
        </div>
        <Image
          src="/assets/images/casino_night/casino_night.webp" // Image source
          width={558}
          height={439}
          alt="casino night images" // Image alt text
          className="xl:w-[558px] lg:w-[458px] w-[358px] xl:h-[439px] lg:h-[370px] h-[300px]"  data-aos="fade-left" // Image styles
        />
      </div>
    </div>
  );
};

export default CasinoNight; // Exporting CasinoNight component
