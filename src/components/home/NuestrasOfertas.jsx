import Image from "next/image"; // Importing the Image component from Next.js
import React from "react";
import { ofertas } from "../common/Helper"; // Importing data for offers
import CommonButton from "../common/CustomButton"; // Importing a custom button component
import { RightIcon } from "../common/Icons";

// Define the NuestrasOfertas component
const NuestrasOfertas = () => {
  return (
    <div id="offer" className="relative z-30">
      <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 py-12">
        {/* Title */}
        <h2 className="text-white text-center font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] mb-0 leading-[100%]">
          Nuestras ofertas
        </h2>
        {/* Subtitle */}
        <p className="text-white text-center lg:pt-4 pt-3 mb-0 font-inter font-medium lg:text-base text-sm lg:pb-0 pb-8">
          Te ofrecemos las mejores experiencias de juegos para tus clientes.
        </p>
        {/* Main content */}
        <div
          className="xl:mt-[60px] bg-nuestrasOfertasBg mt-4 rounded-2xl border-oslo-gray-second border-[1px] relative z-30"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* shadow circle  */}
          <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[154px] h-[154px] rounded-full blur-[48px] top-[30%] start-[10%] translate-y-[-50%] pointer-events-none lg:block hidden"></div>
          <div className="flex md:flex-row flex-col lg:pt-14 lg:pb-8 py-8 lg:px-10 px-4 items-center lg:gap-[22px] gap-3">
            {/* Left side */}
            <div className="relative">
              {/* Image */}
              <Image
                src="/assets/images/nuestras/roultee_wheel_image.webp"
                width={587}
                height={413}
                alt="roultee wheel image"
                className="xl:w-full md:w-full w-[400px]"
              />
              <div className="absolute top-[107%] left-1/2 -translate-x-1/2 w-full h-[33px] bg-blackShadow bg-blend-multiply blur-sm"></div>
              {/* Shade overlay */}
              <div className="Nuestras_ofertas_shade"></div>
            </div>
            {/* Right side */}
            <div className="md:mt-0 mt-8">
              {/* Offer title */}
              <h3 className="text-white md:text-start text-center font-normal font-anton md:text-2xl text-[24px]">
                Silver
              </h3>
              {/* Offer description */}
              <p className="font-inter font-medium lg:pt-4 pt-3 md:text-start text-center mb-0 lg:text-base text-sm text-gray-dark">
                Diseño predeterminado, atractivo y fácil de navegar, tecnología
                HTLM5.
              </p>
              {/* Offer price */}
              <p className="text-white font-anton md:text-start text-center font-normal xl:text-3xl lg:text-[36px] text-[30px] md:pt-8 pt-4">
                $5000
              </p>
              {/* Offer features */}
              <div className="pt-1">
                {ofertas.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-2 md:items-start items-center justify-center md:justify-start pt-3"
                    >
                      {/* Icon */}
                      <p>
                        {" "}
                        <RightIcon />
                      </p>
                      {/* Feature description */}
                      <p className="text-gray-dark font-inter md:text-start text-center font-medium lg:text-base text-sm mb-0">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Button */}
              <div className="md:mt-10 mt-6 flex md:justify-start justify-center">
                <CommonButton content="Comprar ahora" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[484px] h-[484px] absolute xl:block hidden bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] opacity-50 rounded-full blur-[200px] top-[-25%] right-[-20%]"></div>
    </div>
  );
};

export default NuestrasOfertas; // Export the NuestrasOfertas component
