// Import necessary modules from React and Next.js
import Image from "next/image";
import React from "react";

// Importing the helper function chooseUs from a common directory
import { chooseUs } from "../common/Helper";

// Functional component definition for Elegirnos
const Elegirnos = () => {
  return (
    // Main container with responsive styling classes
    <div  className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 xl:py-[100px] md:py-20 pt-20 pb-10">
      {/* Flex container with gap and responsive styling */}
      <div className="flex md:flex-row flex-col items-center xl:gap-11 gap-8">
        {/* Image component with specific source, dimensions, alt text, and styling */}
        <Image
          src="/assets/images/elegirnos/tripple_seven.png"
          width={558}
          height={514}
          alt="tripple seven images"
          className="xl:w-[558px] lg:w-[458px] w-[358px] xl:h-[514px] lg:h-[440px] h-[358px]"
        />
        {/* Div containing heading and reasons to choose */}
        <div>
          {/* Heading with specific styling */}
          <h2 className="text-white leading-[100%] font-anton font-normal xl:text-3xl lg:text-[36px] text-[30px]">
            Más razones para elegirnos
          </h2>
          {/* Div containing reasons to choose */}
          <div className="xl:pt-9 lg:pt-4 pt-3">
            {/* Mapping through array of reasons to choose */}
            {chooseUs.map((value, index) => {
              return (
                // Div for each reason with specific styling and hover effect
                <div
                  key={index}
                  className="lg:w-[374px] md:w-[280px] sm:mx-0 mx-auto lg:h-[116px] lg:py-0 py-3 rounded-2xl flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-elegirnos-box-shadow gap-9 mt-6 border-transparent-green border-[1px] "
                >
                  {/* Div containing image for the reason */}
                  <div>{value.image}</div>
                  {/* Div containing number and title for the reason */}
                  <div>
                    {/* Paragraph for reason number */}
                    <p className="text-white font-anton md:text-2xl text-[24px] font-normal mb-0">
                      {value.number}
                    </p>
                    {/* Paragraph for reason title */}
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

// Exporting the Elegirnos component as default
export default Elegirnos;
