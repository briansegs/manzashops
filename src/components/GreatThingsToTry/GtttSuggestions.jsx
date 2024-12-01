import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from "../../constants/GreatThingsToTry";

const GtttSuggestions = () => {
  const scrollToElement = (id) => {
    const targetElement = document.getElementById(id);

    targetElement?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex items-center gap-4 justify-between bg-[#141414] border-[3px] border-black flex-nowrap sticky px-2 top-0 z-50 overflow-x-auto h-32">
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
          className="capitalize text-[28px] text-white border-[1px] border-[#1b1e23] bg-black rounded-full flex size-[100px] justify-center items-center hover:text-secondary shadow-[3px_3px_3px_white] hover:shadow-[3px_3px_3px_#60b3d1] overflow-hidden flex-shrink-0"
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default GtttSuggestions;
