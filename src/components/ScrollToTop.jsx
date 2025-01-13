import { RiArrowUpSFill } from "react-icons/ri";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="border-[1px] rounded-[10px] flex w-fit justify-center items-center border-white hover:bg-secondary hover:border-secondary shrink-0 bg-white"
    >
      <RiArrowUpSFill className="size-11 text-header" />
    </button>
  );
};

export default ScrollToTop;
