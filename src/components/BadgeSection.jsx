/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import BadgeItems from "./BadgeItems";
import QuickViewContainer from "./QuickViewContainer";

const BadgeSection = ({ data }) => {
  const [openContainer, setOpenContainer] = useState(null); // Track which item is open

  const handleOpenContainer = (id) => {
    setOpenContainer(id); // Set the ID of the item to open
  };

  const handleCloseContainer = () => {
    setOpenContainer(null); // Close any open container
  };

  useEffect(() => {
    const handleScrollLock = () => {
      if (openContainer) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        // Disable scrolling
        document.body.style.overflow = "hidden";

        // Compensate for scrollbar disappearance to avoid layout shift
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        // Re-enable scrolling
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    };

    handleScrollLock();

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [openContainer]);

  return (
    <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
      {data.map(({ title, content, id, btnImg, sections }) => (
        <React.Fragment key={id}>
          <div
            id={id}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]"
          >
            <div className="flex items-center justify-between w-full pb-6">
              <button
                onClick={() => handleOpenContainer(id)}
                type="button"
                className="size-[70px] border-2 border-black hover:border-white rounded-xl"
              >
                <img
                  src="/manzashops/assets/badge/qv.png"
                  alt="quick view"
                  className="size-full rounded-lg object-cover"
                />
              </button>

              <p className="bg-black justify-center h-full text-center flex text-white text-3xl ">
                {title}
              </p>

              <div className="size-[70px] border-2 border-black rounded-xl">
                <img
                  src={btnImg}
                  alt="badge"
                  className="size-full rounded-lg object-cover "
                />
              </div>
            </div>

            <div className="flex flex-wrap pl-9 pt-4 gap-4 overflow-y-scroll">
              <BadgeItems data={content} />
            </div>
          </div>

          {/* Quick view menu */}
          {openContainer === id && (
            <QuickViewContainer
              handleCloseContainer={handleCloseContainer}
              sections={sections}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BadgeSection;
