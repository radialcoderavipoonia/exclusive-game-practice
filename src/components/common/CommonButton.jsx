"use client";
import React from "react";

const CommonButton = (props) => {
  const { content } = props;
  return (
    <div className=" relative group">
      <button
        className={`font-inter font-bold lg:text-base text-sm bg-transparent whitespace-nowrap text-white border-white border rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {content}
      </button>
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-200 group-hover:opacity-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="28"
          viewBox="0 0 106 28"
          fill="none"
        >
          <path
            d="M1 1C1 15.3594 12.6406 27 27 27H105"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default CommonButton;
