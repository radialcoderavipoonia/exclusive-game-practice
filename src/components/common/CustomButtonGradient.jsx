import { GradientButtonOutline } from "./Icons";

// CommonButtonGradient component definition
const CommonButtonGradient = (props) => {
  // Destructuring props to extract content
  const { content } = props;

  return (
    <div className=" relative group">
      {/* Button element with gradient background */}
      <button
        aria-label={content}
        className={`font-inter font-bold lg:text-base text-sm whitespace-nowrap bg-[linear-gradient(306.99deg,_#51c8ef_-13.72%,_#7af57a_102.02%)] text-black  rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {content} {/* Displaying the content */}
      </button>
      {/* SVG element for decorative purpose */}
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-200 group-hover:opacity-0">
        <GradientButtonOutline />
      </span>
    </div>
  );
};

export default CommonButtonGradient; // Exporting the CommonButtonGradient component
