import Image from "next/image";
import React from "react";
import { footerIcon, footerLinks } from "../common/Helper";
import Link from "next/link";

// Footer component definition
const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black relative overflow-hidden">
      {/* Decorative circles */}
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[154px] h-[154px] rounded-full blur-[58px] bottom-[0%] end-[-6%] translate-y-[-50%] pointer-events-none"></div>
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[154px] h-[154px] rounded-full blur-[58px] bottom-[-30%] start-[-6%] translate-y-[-50%] pointer-events-none"></div>

      {/* Container */}
      <div className="container max-w-[1152px] mx-auto px-3 md:pt-16 sm:pt-10 pt-7 sm:pb-10 pb-4">
        <div className="flex flex-wrap">
          {/* Logo and description */}
          <div className="lg:w-4/12 w-full">
            <Image
              src="/assets/images/navbar/nav_logo.svg"
              width={210}
              height={43}
              alt="Logo"
            />
            <p className="lg:pt-4 pt-3 text-white font-inter font-medium lg:text-base text-sm mb-6 opacity-70 max-w-[500px]">
              En Exclusive Games somos un equipo apasionado de personas
              dedicadas al desarrollo de multiplataformas para juegos de azar
            </p>
            {/* Social icons */}
            <div className="flex gap-3 items-center">
              {footerIcon.map((value, index) => (
                <Link
                  aria-label={value.icon}
                  href={value.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:scale-90 transition-all ease-linear duration-200"
                  key={index}
                >
                  {value.icon}
                </Link>
              ))}
            </div>
          </div>
          {/* Footer links */}
          <div className="xl:w-8/12 w-full  flex-wrap md:flex-nowrap flex xl:mt-0 mt-5">
            {footerLinks.map((value, index) => (
              <ul
                className="lg:w-4/12 sm:w-6/12 flex flex-col w-full items-start gap-2 xl:ps-10 xl:mb-0 mb-5"
                key={index}
              >
                <li className=" font-inter font-bold lg:text-base text-sm text-white mb-2">
                  {value.tittle}
                </li>

                {value.link.map((subValue, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex items-center gap-2 opacity-70 text-white font-medium lg:text-base text-sm hover:opacity-100 duration-100 ease-in-out transition-all"
                  >
                    <Link
                      aria-label={subValue.content}
                      href={subValue.path}
                      rel="noopener noreferrer"
                    >
                      {subValue.icon} {subValue.content}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* Footer text */}
      <p className="flex items-center justify-center py-5 border-t-[1px] border-cod-gray text-center gap-2  text-white font-medium lg:text-base text-sm opacity-70 px-2">
        © Juegos exclusivos - Todos los derechos reservados {currentYear}
      </p>
    </div>
  );
};

export default Footer; // Exporting the Footer component
