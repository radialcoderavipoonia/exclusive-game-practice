import React from "react";

const Plataforma = () => {
  return (
    <div className="container xl:max-w-[1043px] mx-auto xl:px-0 px-3 xl:py-[150px] lg:py-20 py-10">
      <div className="bg-[url('/assets/images/background/plataforma_image.png')] sm:h-[308px] sm:py-0 py-6 flex justify-center items-center bg-100 w-full bg-center bg-no-repeat">
        <div className=" max-w-[552px] mx-auto px-4">
          <p className="text-center font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px] text-white leading-[1.2]">
            {" "}
            lanza tu propia plataforma en sólo 2 semanas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plataforma;
