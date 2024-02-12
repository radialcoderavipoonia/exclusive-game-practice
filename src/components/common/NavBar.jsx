"use client"; // Client-side code
import Image from "next/image"; // Importing Image component from Next.js
import Link from "next/link"; // Importing Link component from Next.js
import { useState } from "react"; // Importing useState hook from React
import { FaGripLines } from "react-icons/fa6"; // Importing FaGripLines icon from react-icons/fa6
import { RxCross2 } from "react-icons/rx"; // Importing RxCross2 icon from react-icons/rx
import { navLink } from "./Helper"; // Importing navLink from Helper
import CommonButton from "./CommonButton"; // Importing CommonButton component

// NavBar component
const NavBar = () => {
  // State to manage sidebar open/close
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to handle sidebar toggling
  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggling sidebar state
    document.body.classList.toggle("overflow-hidden"); // Toggling body overflow class
  };

  return (
    <nav className="nav_bar_bg p-4 flex-grow-0 relative z-50"> {/* Navigation bar */}
      <div className="flex items-center justify-between container xl:max-w-[1140px] mx-auto xl:px-0 px-3"> {/* Container */}
        <Link href="/"> {/* Logo link */}
          <Image
            src="/assets/images/navbar/nav_logo.svg" // Logo image source
            width={210}
            height={43}
            alt="Logo"
            className="h-8"
          />
        </Link>
        <ul className="hidden lg:flex space-x-4"> {/* Navigation links */}
          {navLink.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  className="text-white font-inter font-medium text-base opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                  href={link.path}
                >
                  {link.title} {/* Link title */}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex"> {/* Access button */}
          <CommonButton
            content="Acceso"
            borderColor="border-white"
            textColor="text-white"
            bgColor="bg-transparent"
          />
        </div>
        <button
          className="block lg:hidden text-white text-3xl"
          onClick={sidebarHandler}
        >
          <FaGripLines /> {/* Sidebar toggle icon */}
        </button>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && ( // If sidebar is open
        <div
          className="lg:hidden fixed h-full inset-0 bg-black opacity-50 z-50"
          onClick={sidebarHandler}
        ></div>
      )}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full h-screen bg-black z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 h-screen flex justify-center items-center flex-col"> {/* Sidebar content */}
          <button
            className="text-white text-3xl absolute top-4 sm:end-10 end-5 z-40"
            onClick={sidebarHandler}
          >
            <RxCross2 /> {/* Close sidebar icon */}
          </button>
          <ul className="flex flex-col w-full gap-6 justify-center items-center"> {/* Sidebar navigation links */}
            {navLink.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    className="text-white font-inter font-medium text-base opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                    href={link.path}
                    onClick={sidebarHandler}
                  >
                    {link.title} {/* Link title */}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6"> {/* Access button */}
            <CommonButton content="Acceso" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; // Exporting NavBar component
