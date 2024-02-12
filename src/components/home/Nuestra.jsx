import Image from "next/image";
import React from "react";
import { GreenArrow } from "../common/Icons";

const Nuestra = () => {
  return (
    <>
      <div className="bg-[url('/assets/images/background/nuestra_image.png')] md:bg-100 bg-cover bg-center bg-no-repeat mt-[-1px]">
        <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3">
          <div className="xl:pt-[74px] lg:pb-[243px] md:pb-44 pb-44">
            <div className="flex md:flex-row flex-col justify-center items-center xl:gap-16 gap-8">
              <div className="col-6">
                <Image
                  src="/assets/images/nuestra/pocker_with_friends.webp"
                  width={538}
                  height={536}
                  alt="poker with friends image"
                  className="lg:w-[538px] w-[438px] lg:h-[536px] h-[370px]"
                />
                <div className="lg:xl:pt-[60px] pt-9 max-w-[444px]">
                  <h2 className="text-white font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] leading-[100%]">
                    Nuestra Visión
                  </h2>
                  <p className="lg:lg:pt-4 pt-3 pt-2 text-gray-dark font-inter font-medium lg:text-base text-sm mb-0">
                    Nuestra visión es ser líderes indiscutibles en la industria
                    de los juegos de azar y llevar nuestra pasión por el
                    entretenimiento más allá de las fronteras. Imagina un mundo
                    donde la emoción y la diversión no tengan límites, y ese es
                    el mundo que queremos crear contigo.
                  </p>
                  <p className="lg:pt-6 pt-2 font-inter flex items-center font-bold lg:text-base text-sm text-Screamin-green">
                    Aprende más
                    <span className="ms-2">
                      <GreenArrow />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="max-w-[444px]">
                  <h2 className="text-white font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] leading-[100%]">
                    Nuestra Misión
                  </h2>
                  <p className="lg:lg:pt-4 pt-3 pt-2 text-gray-dark font-inter font-medium lg:text-base text-sm mb-0">
                    Nuestra misión es simple pero poderosa: proporcionarte la
                    más amplia gama de soluciones de entretenimiento de alta
                    calidad y rentabilidad. Estamos comprometidos a elevar tus
                    expectativas y brindarte experiencias inigualables.
                  </p>
                  <p className="lg:pt-6 pt-2 font-inter flex items-center font-bold lg:text-base text-sm text-Screamin-green">
                    Aprende más
                    <span className="ms-2">
                      <GreenArrow />
                    </span>
                  </p>
                </div>
                <Image
                  src="/assets/images/nuestra/aviator.webp"
                  width={538}
                  height={536}
                  alt="poker with friends image"
                  className="lg:xl:pt-[60px] pt-9 lg:w-[538px] w-[438px] lg:h-[536px] h-[370px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nuestra;
