import { useState, useEffect, useRef } from "react";
import {
  ourContentShop,
  sports,
  paidTopSpot,
  bangUrBuck,
  getYourBestBuy,
  exploreTrends,
  activeGear,
  exclusivePicks,
  valueVault,
  shopSmarter,
  freshFinds,
  gearUp,
  premiumPicks,
  dealHunters,
  smartPicks,
  topTrends,
  adventureReady,
  eliteChoices,
  savvySavings,
  brightBuys,
  latestLooks,
  outdoorEssentials,
  premiumSelections,
  budgetFinds,
  smartChoices,
  fashionForward,
  inGear,
  luxuryLines,
  savingsSpotlight,
  bestDeals,
} from "../../constants/Dash";
import ScrollToTop from "../ScrollToTop";

const Suggestions = () => {
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
      ourContentShop,
      sports,
      paidTopSpot,
      bangUrBuck,
      getYourBestBuy,
      exploreTrends,
      activeGear,
      exclusivePicks,
      valueVault,
      shopSmarter,
      freshFinds,
      gearUp,
      premiumPicks,
      dealHunters,
      smartPicks,
      topTrends,
      adventureReady,
      eliteChoices,
      savvySavings,
      brightBuys,
      latestLooks,
      outdoorEssentials,
      premiumSelections,
      budgetFinds,
      smartChoices,
      fashionForward,
      inGear,
      luxuryLines,
      savingsSpotlight,
      bestDeals,
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

      const offset = 140; // Adjust this value to set offset
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
    <div className="flex items-center gap-4 justify-between bg-[#141414] border-[3px] border-black flex-nowrap sticky px-2 top-0 z-50 overflow-x-auto h-32">
      <ScrollToTop />

      {[
        ourContentShop,
        sports,
        paidTopSpot,
        bangUrBuck,
        getYourBestBuy,
        exploreTrends,
        activeGear,
        exclusivePicks,
        valueVault,
        shopSmarter,
        freshFinds,
        gearUp,
        premiumPicks,
        dealHunters,
        smartPicks,
        topTrends,
        adventureReady,
        eliteChoices,
        savvySavings,
        brightBuys,
        latestLooks,
        outdoorEssentials,
        premiumSelections,
        budgetFinds,
        smartChoices,
        fashionForward,
        inGear,
        luxuryLines,
        savingsSpotlight,
        bestDeals,
      ].map(({ id, btnImg, title }) => (
        <button
          key={id}
          type="button"
          onClick={() => scrollToElement(id)}
          className={`capitalize text-[28px] text-white border-[1px] border-[#1b1e23] ${
            activeButton === id ? "bg-secondary" : "bg-black"
          } rounded-full flex size-[100px] justify-center items-center hover:text-secondary shadow-[3px_3px_3px_white] hover:shadow-[3px_3px_3px_#60b3d1] overflow-hidden flex-shrink-0`}
        >
          {/* <img src={btnImg} alt={title} className="object-fit size-full" /> */}
        </button>
      ))}
    </div>
  );
};

export default Suggestions;
