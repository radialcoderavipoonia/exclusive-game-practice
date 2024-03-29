import React from "react";
import CommonButtonGradient from "../common/CustomButtonGradient";

const Lanza = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 xl:py-[150px] lg:py-20 py-12">
      {/* Background Image */}
      <div
        className="bg-[url('/assets/images/background/lanza.webp')] bg-center bg-cover  rounded-2xl border-oslo-gray-second border-[1px]  bg-no-repeat"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="px-4 md:py-[104px] py-12">
          {/* Main Heading */}
          <p className="text-center text-white font-anton font-normal md:text-2xl text-[24px] lg:mb-10 mb-6">
            Lanza tu propia plataforma en sólo 2 semanas
          </p>
          {/* Button */}
          <div className="flex justify-center">
            <CommonButtonGradient content="Leer más" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lanza;
