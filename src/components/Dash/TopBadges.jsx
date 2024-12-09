import React, { useEffect, useState } from "react";
import QuickViewContainer from "./QuickViewContainer";

const TopBadges = ({ data }) => {
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
    <div className="flex flex-col gap-2 items-center w-full">
      <div className="bg-black rounded-[10px] xl:w-[1496px] md:w-[95%] w-[99%]">
        <h3 className="text-white text-[24px] pl-5 pt-2 w-full flex justify-center capitalize">
          top badges
        </h3>

        <div className="items-center px-10 pb-10 pt-3 flex justify-between overflow-x-auto gap-4">
          {data.map(({ title, id, btnImg, sections, href }) => (
            <React.Fragment key={id}>
              <div
                id={id}
                className="text-white flex flex-col items-center rounded-[10px] border-[1px] border-white p-1 bg-black w-[384px] h-[352px] flex-shrink-0"
              >
                <div className="flex items-center justify-between w-full pb-1">
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

                  <p className="bg-black justify-center h-full text-center flex text-white text-3xl capitalize">
                    {title}
                  </p>

                  <div className="size-[70px] border-2 border-black rounded-xl">
                    <img
                      src={btnImg}
                      alt="badge"
                      className="size-full rounded-lg object-fill "
                    />
                  </div>
                </div>

                <a href={href} className="size-full overflow-hidden">
                  <img
                    src={btnImg}
                    alt="badge"
                    className="size-full rounded-lg object-fill"
                  />
                </a>
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
      </div>
    </div>
  );
};

export default TopBadges;
