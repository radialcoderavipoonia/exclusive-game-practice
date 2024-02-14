import React from "react";

// Define the Plataforma component
const Plataforma = () => {
  return (
    <div className="container xl:max-w-[1043px] mx-auto xl:px-0 px-3 xl:py-[150px] lg:py-20 py-10">
      {/* Background container */}
      <div
        className="bg-[url('/assets/images/background/plataforma_image.webp')] sm:h-[308px] sm:py-0 py-12 flex justify-center items-center bg-99 w-full bg-center bg-no-repeat"
        data-aos="zoom-in"
      >
        <div className=" max-w-[552px] mx-auto px-4">
          {/* Text */}
          <p className="text-center font-anton font-normal xl:text-3xl lg:text-[36px] sm:text-[30px] text-[24px] text-white leading-[1.2]">
            lanza tu propia plataforma en sólo 2 semanas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plataforma; // Export the Plataforma component
