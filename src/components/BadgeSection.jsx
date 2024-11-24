/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BadgeItems from "./BadgeItems";
import { RxCross1 } from "react-icons/rx";

const BadgeSection = ({ data }) => {
  const [openContainer, setOpenContainer] = useState(false);

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
      {data.map(({ title, content, id, btnImg }) => (
        <>
          <div
            id={id}
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]"
          >
            <div className="flex items-center justify-between w-full pb-6">
              <button
                onClick={() => setOpenContainer(true)}
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
          {openContainer && (
            <div
              className={
                "fixed bg-black flex items-center justify-center bg-opacity-20 inset-0 z-50 "
              }
            >
              <div className="size-[500px] bg-header rounded-lg  border-4 border-secondary">
                <button
                  type="button"
                  onClick={() => setOpenContainer(false)}
                  className="flex"
                >
                  <RxCross1 className="text-white size-7" />
                </button>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default BadgeSection;
