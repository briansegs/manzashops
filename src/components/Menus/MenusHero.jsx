import { sliderData } from "../../constants/Menus";
import HeroImageSlider from "../HeroImageSlider";
import LanguagesMenu from "../LanguagesMenu";
import { langItems } from "../../constants";

const MenusHero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LanguagesMenu data={langItems} />
      <HeroImageSlider data={sliderData} />
    </div>
  );
};

export default MenusHero;
