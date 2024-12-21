import { sliderData } from "../../constants/Menus";

const MenusHero = () => {
  return (
    <div className="flex relative w-[100vw] h-[59.5vh]">
      <div className="flex w-fit overflow-x-auto">
        {sliderData.map(({ id, href, src, styles }) => (
          <a key={id} href={href} className="w-screen flex-shrink-0">
            <img
              src={src}
              className={`w-screen h-full object-fit rounded-[10px] shadow-[10px_10px_10px_black] ${styles}`}
            />
          </a>
        ))}
      </div>

      <div className="border-white border-[1px] w-fit h-[4vh] pl-1 pr-3 bg-black absolute text-white rounded-tr-[10px] rounded-tl-[10px] bottom-10 sm:right-96 right-20">
        <p>Hover & Scroll {">>>"}</p>
      </div>
    </div>
  );
};

export default MenusHero;
