import { useState, useRef } from "react";
import ScrollToTop from "../ScrollToTop";
import { suggetionsItems } from "../../constants/Jobs";
import UseIntersectionObserver from "../../hooks/UseIntersectionObserver";
import SuggestionsButton from "../SuggestionsButton";

const JobsSuggestions = () => {
  const [activeButton, setActiveButton] = useState(null);
  const clickedButtonRef = useRef(null); // Track the last clicked button
  const isScrollingRef = useRef(false); // Prevent updates during scrolling

  UseIntersectionObserver({
    suggetionsItems,
    activeButton,
    setActiveButton,
    clickedButtonRef,
    isScrollingRef,
  });

  return (
    <div className="flex items-center gap-4 justify-between bg-[#141414] border-[3px] border-black flex-nowrap sticky px-3 top-0 z-10 overflow-x-auto h-24">
      <ScrollToTop />

      {suggetionsItems.map(({ id, title }) => (
        <SuggestionsButton
          key={id}
          id={id}
          title={title}
          scrollingProps={{
            activeButton,
            isScrollingRef,
            clickedButtonRef,
            setActiveButton,
          }}
          offset={100}
        />
      ))}
    </div>
  );
};

export default JobsSuggestions;
