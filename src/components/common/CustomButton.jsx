"use client"; // Comment indicating module usage
import React from "react";
import { ButtonOutline } from "./Icons";

// CommonButton component definition
const CommonButton = (props) => {
  const { content } = props; // Destructuring props to extract content
  return (
    <div className=" relative group">
      {/* Button element */}
      <button
        aria-label={content}
        className={`font-inter font-bold lg:text-base text-sm bg-transparent whitespace-nowrap text-white border-white border rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {content} {/* Displaying the content */}
      </button>
      {/* SVG element for decorative purpose */}
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-200 group-hover:opacity-0">
        <ButtonOutline />
      </span>
    </div>
  );
};

export default CommonButton; // Exporting the CommonButton component
