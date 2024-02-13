// components/BackToTopButton.js
import { useEffect, useState } from "react";
import { BackToTop } from "./Icons";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button aria-label="back to top"
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed md:bottom-4 md:right-4 bottom-2 right-2 bg-gable-green backtotop_animation hover:shadow-back-to-top transition-all duration-200  ease-in-out text-white md:p-2 rounded-full  z-50`}
      onClick={scrollToTop}
    >
      <BackToTop />
    </button>
  );
};

export default BackToTopButton;
