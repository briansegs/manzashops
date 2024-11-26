import {
  block01BadgeGroup1Data,
  block01BadgeGroup2Data,
  block02BadgeGroup1Data,
  block02BadgeGroup2Data,
  block03BadgeGroup1Data,
  block03BadgeGroup2Data,
} from "../constants";

const Suggestions = () => {
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
        block01BadgeGroup1Data,
        block01BadgeGroup2Data,
        block02BadgeGroup1Data,
        block02BadgeGroup2Data,
        block03BadgeGroup1Data,
        block03BadgeGroup2Data,
      ].map((item) =>
        item.map(({ id, btnImg, title }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollToElement(id)}
            className="capitalize text-[28px] text-white border-[1px] border-[#1b1e23] bg-black rounded-full flex size-[100px] justify-center items-center hover:text-secondary shadow-[3px_3px_3px_white] hover:shadow-[3px_3px_3px_#60b3d1] overflow-hidden flex-shrink-0"
          >
            <img src={btnImg} alt={title} className="object-cover size-full" />
          </button>
        ))
      )}
    </div>
  );
};

export default Suggestions;
