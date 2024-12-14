import { RxPinTop } from "react-icons/rx";

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
      className="capitalize text-[28px] text-white border-[1px] border-[#1b1e23] bg-black rounded-full flex size-[100px] justify-center items-center hover:text-secondary shadow-[3px_3px_3px_white] hover:shadow-[3px_3px_3px_#60b3d1] overflow-hidden flex-shrink-0"
    >
      <RxPinTop className="size-11" />
    </button>
  );
};

export default ScrollToTop;
