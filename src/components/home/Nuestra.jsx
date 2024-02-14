import Image from "next/image"; // Importing the Image component from Next.js
import React from "react";
import { GreenArrow } from "../common/Icons"; // Importing a custom GreenArrow component

// Define the Nuestra component
const Nuestra = () => {
  return (
    <>
      {/* Background container */}
      <div
        id="mission"
        className="bg-[url('/assets/images/background/nuestra_image.webp')] md:bg-100 bg-cover bg-center bg-no-repeat mt-[-1px] relative z-40"
      >
        <div className="h-[15px] w-full bg-blue-charcoal blur-md"></div>
        <div className="w-[384px] h-[284px] absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] opacity-50 md:hidden block rounded-full blur-[50px] top-[-5%] left-[-20%] z-10"></div>
        <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3">
          <div className="xl:pt-[74px] lg:pb-[313px] md:pb-48 sm:pb-52 pb-44">
            {/* Main content */}
            <div className="flex md:flex-row flex-col justify-center items-center xl:gap-16 gap-8">
              {/* First column */}
              <div className="col-6">
                {/* Image */}
                <Image
                  src="/assets/images/nuestra/pocker_with_friends.webp"
                  width={538}
                  height={536}
                  alt="poker with friends image"
                  className="lg:w-[538px] w-[438px] lg:h-[536px] h-[370px] relative z-40"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
                {/* Text */}
                <div
                  className="lg:xl:pt-[60px] pt-9 max-w-[444px]"
                  data-aos="fade-right"
                >
                  <h2 className="text-white font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] leading-[100%]">
                    Nuestra Visión
                  </h2>
                  <p className="lg:lg:pt-4 pt-3 text-gray-dark font-inter font-medium lg:text-base text-sm mb-0">
                    Nuestra visión es ser líderes indiscutibles en la industria
                    de los juegos de azar y llevar nuestra pasión por el
                    entretenimiento más allá de las fronteras. Imagina un mundo
                    donde la emoción y la diversión no tengan límites, y ese es
                    el mundo que queremos crear contigo.
                  </p>
                  {/* Button */}
                  <p className="lg:pt-6 pt-2 font-inter w-[150px] flex items-center font-bold lg:text-base text-sm text-Screamin-green cursor-pointer group">
                    Aprende más
                    <span className="ms-2 group-hover:translate-x-3 transition-all duration-300 ease-in-out">
                      <GreenArrow />
                    </span>
                  </p>
                </div>
              </div>
              {/* Second column */}
              <div className="col-6 flex md:flex-col flex-col-reverse">
                <div
                  className="max-w-[444px] md:pt-0 pt-9"
                  data-aos="fade-left"
                >
                  <h2 className="text-white font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] leading-[100%]">
                    Nuestra Misión
                  </h2>
                  <p className="lg:lg:pt-4 pt-3 text-gray-dark font-inter font-medium lg:text-base text-sm mb-0">
                    Nuestra misión es simple pero poderosa: proporcionarte la
                    más amplia gama de soluciones de entretenimiento de alta
                    calidad y rentabilidad. Estamos comprometidos a elevar tus
                    expectativas y brindarte experiencias inigualables.
                  </p>
                  {/* Button */}
                  <p className="lg:pt-6 pt-2  w-[150px] font-inter flex items-center font-bold lg:text-base text-sm text-Screamin-green group cursor-pointer">
                    Aprende más
                    <span className="ms-2 group-hover:translate-x-3 transition-all duration-300 ease-in-out">
                      <GreenArrow />
                    </span>
                  </p>
                </div>
                {/* Image */}
                <Image
                  src="/assets/images/nuestra/aviator.webp"
                  width={538}
                  height={536}
                  alt="poker with friends image"
                  className="lg:xl:pt-[60px] md:pt-9 lg:w-[538px] w-[438px] lg:h-[536px] h-[370px]"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nuestra; // Export the Nuestra component
