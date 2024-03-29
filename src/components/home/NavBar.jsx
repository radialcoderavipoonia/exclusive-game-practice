"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CommonButton from "../common/CustomButton";
import { navLink } from "../common/Helper";
import { MenuIcon } from "../common/Icons";

// Component for navigation bar
const NavBar = () => {
  // State to manage sidebar open/close
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to handle sidebar toggling
  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Toggle overflow hidden on body when sidebar is open
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="bg-white bg-opacity-10 p-4 flex-grow-0 relative z-50">
      <div className="flex items-center justify-between container xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/images/navbar/nav_logo.svg"
            width={210}
            height={43}
            alt="Logo"
            className="md:w-[210px] w-[190px]"
          />
        </Link>
        {/* Desktop navigation links */}
        <ul className="hidden lg:flex gap-7">
          {navLink.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  aria-label={link.title}
                  className="text-white font-inter font-medium text-base opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Access button for desktop */}
        <div className="hidden lg:flex">
          <CommonButton
            content="Acceso"
            borderColor="border-white"
            textColor="text-white"
            bgColor="bg-transparent"
          />
        </div>
        {/* Hamburger menu for mobile */}
        <button
          aria-label="menu icon"
          className="block lg:hidden text-white text-3xl"
          onClick={sidebarHandler}
        >
          <MenuIcon />
        </button>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed h-full inset-0 bg-black opacity-50 z-50"
          onClick={sidebarHandler}
        ></div>
      )}
      {/* Sidebar content */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full h-screen bg-black z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 h-screen flex justify-center items-center flex-col">
          {/* Close button for mobile */}
          <button
            aria-label="cross icon"
            className="text-white text-3xl absolute top-4 sm:end-10 end-5 z-40"
            onClick={sidebarHandler}
          >
            <RxCross2 />
          </button>
          {/* Mobile navigation links */}
          <ul className="flex flex-col w-full gap-6 justify-center items-center">
            {navLink.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    aria-label={link.title}
                    className="text-white font-inter font-medium text-base opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                    href={link.path}
                    onClick={sidebarHandler}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Access button for mobile */}
          <div className="mt-6">
            <CommonButton content="Acceso" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
