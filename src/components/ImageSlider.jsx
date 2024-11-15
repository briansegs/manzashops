const ImageSlider = () => {
  return (
    <>
      <div className="relative flex-1">
        <a href="" className="">
          <img
            src="/manzashop/assets/manza.png"
            className="w-[171vh] h-[59.5vh] object-cover rounded-[10px] border-secondary border-b-4 shadow-[10px_10px_10px_black]"
          />
        </a>

        <div className="border-white border-[1px] w-fit h-[4vh] pr-3 bg-black absolute text-white rounded-tr-[10px] rounded-tl-[10px] bottom-10 sm:right-96 right-20">
          <p>Hover & Scroll {">>>"}</p>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
