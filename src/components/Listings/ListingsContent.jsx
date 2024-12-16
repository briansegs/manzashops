import { useEffect, useState, useRef } from "react";
import ScrollToTop from "../ScrollToTop";
import { listingSectionData } from "../../constants/Listings";
import ListingsCard from "./ListingsCard";

const ListingsContent = () => {
  const sections = listingSectionData.sections;
  const firstSection = sections[0].sectionName;

  const [activeSection, setActiveSection] = useState(firstSection || "");
  const [localSections, setLocalSections] = useState(sections || []);

  const activeSectionData = localSections?.filter(
    ({ sectionName }) => sectionName === activeSection
  )[0];

  const categoryRefs = useRef({});

  useEffect(() => {
    console.log("Category refs:", categoryRefs.current);
  }, [activeSection]);

  useEffect(() => {
    if (sections) {
      setLocalSections(sections);
    }
  }, [sections]);

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);

    document.getElementById("listings-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    Object.values(categoryRefs.current).forEach((div) => {
      if (div) {
        div.scrollLeft = 0;
      }
    });
  };

  return (
    <div id="listings-content" className={"flex flex-col h-[90%] bg-black"}>
      <div className="flex items-center gap-4 justify-between bg-[#141414] border-[3px] border-black flex-nowrap sticky px-2 top-0 z-50 overflow-x-auto h-32">
        <ScrollToTop />

        {sections?.map(({ id, sectionImg, sectionName }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleSectionChange(sectionName)}
            className={`${
              sectionName == activeSection
                ? "shadow-[3px_3px_3px_#60b3d1]"
                : "shadow-[3px_3px_3px_white]"
            } capitalize text-[28px] text-white border-[1px] border-[#1b1e23] bg-black rounded-full flex size-[100px] justify-center items-center hover:text-secondary hover:shadow-[3px_3px_3px_#60b3d1] overflow-hidden flex-shrink-0`}
          >
            <img
              src={sectionImg}
              alt={sectionName}
              className="object-fit size-full"
            />
          </button>
        ))}
      </div>

      <div className="flex size-full items-center flex-col overflow-y-hidden">
        <p className="text-white py-2 text-xl capitalize">{activeSection}</p>

        <div className="w-full items-center flex flex-col pt-4 overflow-y-auto ">
          {activeSectionData.categories.map(({ categoryTitle, listings }) => {
            return (
              <div
                key={categoryTitle}
                ref={(el) => (categoryRefs.current[categoryTitle] = el)}
                className="w-full pb-10 pt-8 flex size-full justify-between lg:gap-14 gap-6 overflow-x-auto lg:px-14 px-1"
              >
                {listings?.map(
                  ({ img, name, rate, links, rating, profession, id }) => (
                    <ListingsCard
                      rate={rate}
                      links={links}
                      img={img}
                      name={name}
                      key={id}
                      rating={rating}
                      profession={profession}
                    />
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingsContent;
