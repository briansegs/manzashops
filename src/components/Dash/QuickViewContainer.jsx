import { RxCross1 } from "react-icons/rx";
import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";

const QuickViewContainer = ({ handleCloseContainer, sections }) => {
  const firstSection = sections[0].sectionName;

  const [activeSection, setActiveSection] = useState(firstSection || "");
  const [localSections, setLocalSections] = useState(sections || []);

  const activeSectionData = localSections?.filter(
    ({ sectionName }) => sectionName === activeSection
  )[0];

  useEffect(() => {
    if (sections) {
      setLocalSections(sections);
    }
  }, [sections]);

  return (
    <div
      className={
        "fixed bg-black flex items-center justify-center size-full bg-opacity-50 inset-0 z-50 "
      }
    >
      <div className="lg:w-[75%] xl:w-[70%] 2xl:w-[60%] w-[95%] flex flex-col h-[90%] bg-black rounded-lg border-2 border-secondary relative">
        <div className="flex justify-center w-full my-1">
          <button
            type="button"
            onClick={() => handleCloseContainer()}
            className="flex absolute left-1 top-1"
          >
            <RxCross1 className="text-white size-7" />
          </button>

          <p className="text-white text-xl capitalize">Quick view</p>
        </div>

        <div className="flex px-2 items-center gap-4 justify-between bg-[#141414] border-[3px] border-black flex-nowrap overflow-x-auto overflow-y-hidden py-8">
          {sections?.map(({ sectionName }) => (
            <button
              key={sectionName}
              type="button"
              onClick={() => setActiveSection(sectionName)}
              className={` ${
                sectionName == activeSection
                  ? "text-secondary border-secondary"
                  : "text-white border-white"
              } border-[1px] rounded-[10px] flex w-fit justify-center items-center hover:border-secondary hover:text-secondary shrink-0`}
            >
              <p className="capitalize text-2xl px-5 py-2">{sectionName}</p>
            </button>
          ))}
        </div>

        <div className="flex size-full items-center flex-col overflow-y-hidden">
          <p className="text-white py-2 text-xl capitalize">{activeSection}</p>

          <div className="w-full items-center flex flex-col gap-10 pt-4 overflow-y-auto ">
            {activeSectionData.ad ? (
              <div className="w-full flex flex-col pb-6">
                {activeSectionData.ads.map(({ key, adRow }) =>
                  React.cloneElement(adRow, { key })
                )}
              </div>
            ) : (
              activeSectionData.categories.map(
                ({ categoryTitle, products }) => (
                  <div key={categoryTitle} className="w-full">
                    <p className="text-white pl-4 pb-3 capitalize">
                      {categoryTitle}
                    </p>

                    <div className="flex size-full gap-8 overflow-x-scroll px-8">
                      {products?.map(
                        ({ title, href, img, name, price, description }) => (
                          <ProductCard
                            title={title}
                            href={href}
                            img={img}
                            name={name}
                            price={price}
                            description={description}
                            key={title}
                          />
                        )
                      )}
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewContainer;
