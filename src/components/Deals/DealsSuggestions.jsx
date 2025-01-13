import { useState, useEffect, useRef } from "react";
import ScrollToTop from "../ScrollToTop";
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from "../../constants/Deals";

const DealsSuggestions = () => {
  const [activeButton, setActiveButton] = useState(null);
  const clickedButtonRef = useRef(null); // Track the last clicked button
  const isScrollingRef = useRef(false); // Prevent updates during scrolling

  useEffect(() => {
    const observerCallback = (entries) => {
      if (isScrollingRef.current) return; // Ignore updates during scrolling

      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          clickedButtonRef.current === entry.target.id
        ) {
          setActiveButton(entry.target.id);
        } else if (!entry.isIntersecting && activeButton === entry.target.id) {
          clickedButtonRef.current = null;
          setActiveButton(null);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 1,
    });

    const elements = [
      adSectionData01,
      adSectionData02,
      adSectionData03,
      adSectionData04,
      adSectionData05,
      adSectionData06,
      { id: "gtttsec0007", title: "glasses" },
      { id: "gtttsec0008", title: "shoes" },
      { id: "gtttsec0009", title: "jewelery" },
      { id: "gtttsec0010", title: "carparts" },
      { id: "gtttsec0011", title: "sports" },
      { id: "gtttsec0012", title: "luxury" },
    ].map(({ id }) => document.getElementById(id));

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeButton]);

  const scrollToElement = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      isScrollingRef.current = true;
      clickedButtonRef.current = id;
      setActiveButton(id);

      const offset = 100; // set offset
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });

      // Stop scrolling after a delay to allow smooth scrolling to complete
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500); // Adjust this duration to match scroll speed
    }
  };

  return (
    <div className="flex items-center gap-4 justify-between bg-[#141414] border-[3px] border-black flex-nowrap sticky px-3 top-0 z-50 overflow-x-auto h-24">
      <ScrollToTop />

      {[
        adSectionData01,
        adSectionData02,
        adSectionData03,
        adSectionData04,
        adSectionData05,
        adSectionData06,
        { id: "gtttsec0007", title: "glasses" },
        { id: "gtttsec0008", title: "shoes" },
        { id: "gtttsec0009", title: "jewelery" },
        { id: "gtttsec0010", title: "carparts" },
        { id: "gtttsec0011", title: "sports" },
        { id: "gtttsec0012", title: "luxury" },
      ].map(({ id, title }) => (
        <button
          key={id}
          type="button"
          onClick={() => scrollToElement(id)}
          className={` ${
            activeButton === id
              ? "text-secondary border-secondary"
              : "text-white border-white"
          } border-[1px] rounded-[10px] flex w-fit justify-center items-center hover:border-secondary hover:text-secondary shrink-0`}
        >
          <p className="capitalize text-2xl px-5 py-2">{title}</p>
        </button>
      ))}
    </div>
  );
};

export default DealsSuggestions;
