import Image from "next/image";
import React from "react";
import { chooseUs } from "../common/Helper";

const Elegirnos = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 xl:py-[100px] md:py-20 pt-20 pb-10">
      <div className="flex md:flex-row flex-col items-center xl:gap-11 gap-8">
        <Image
          src="/assets/images/elegirnos/tripple_seven.png"
          width={558}
          height={514}
          alt="tripple seven images"
          className="xl:w-[558px] lg:w-[458px] w-[358px] xl:h-[514px] lg:h-[440px] h-[358px]"
        />
        <div>
          <h2 className="text-white leading-[100%] font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px]">
            Más razones para elegirnos
          </h2>
          <div className="xl:pt-9 lg:pt-4 pt-3">
            {chooseUs.map((value, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-[374px] md:w-[280px] sm:mx-0 mx-auto lg:h-[116px] lg:py-0 py-3 rounded-2xl flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-elegirnos-box-shadow gap-9 mt-6 border-transparent-green border-[1px] "
                >
                  <div>{value.image}</div>
                  <div>
                    <p className="text-white font-anton md:text-2xl text-[24px] font-normal mb-0">
                      {value.number}
                    </p>
                    <p className="text-white font-inter font-medium lg:text-base text-sm mb-0">
                      {value.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elegirnos;
