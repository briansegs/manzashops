/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const QuickViewContainer = ({ handleCloseContainer, sections }) => {
  const [active, setActive] = useState("main");
  const [localSections, setLocalSections] = useState(sections || []);

  const activeSection = localSections?.filter(
    ({ sectionName }) => sectionName === active
  );

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
      <div className="lg:w-[75%] xl:w-[60%] w-[95%] flex flex-col h-[90%] bg-black rounded-lg border-2 border-secondary relative">
        <div className="flex justify-center w-full my-1">
          <button
            type="button"
            onClick={() => handleCloseContainer()}
            className="flex absolute left-1 top-1"
          >
            <RxCross1 className="text-white size-7" />
          </button>

          <p className="text-white text-lg">Quick view</p>
        </div>

        <div className="flex px-1 items-center gap-4 justify-between bg-[#141414] border-[3px] border-black flex-nowrap overflow-x-auto min-h-32">
          {sections?.map(({ sectionName, sectionImg }) => (
            <button
              key={sectionName}
              type="button"
              onClick={() => setActive(sectionName)}
              className="capitalize text-[28px] text-white border-[1px] border-[#1b1e23] bg-black rounded-full flex size-[100px] justify-center items-center hover:text-secondary shadow-[3px_3px_3px_white] hover:shadow-[3px_3px_3px_#60b3d1] overflow-hidden shrink-0"
            >
              <img
                src={sectionImg}
                alt={"Test"}
                className="object-cover size-full"
              />
            </button>
          ))}
        </div>

        <div className="flex size-full items-center flex-col overflow-y-hidden">
          <p className="text-white text-lg">Products</p>

          <div className="size-full flex flex-col gap-10 pt-4 overflow-y-auto">
            {activeSection &&
              activeSection[0]?.categories?.map(
                ({ categoryTitle, products }) => (
                  <div key={categoryTitle} className="w-full">
                    <p className="text-white pl-4 pb-3 capitalize">
                      {categoryTitle}
                    </p>
                    <div className="flex size-full gap-8 overflow-x-scroll pl-8">
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
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewContainer;
