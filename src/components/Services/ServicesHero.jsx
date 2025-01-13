import { sliderData } from "../../constants/Services";
import HeroImageSlider from "../HeroImageSlider";
import LanguagesMenu from "../LanguagesMenu";
import { langItems } from "../../constants";

const ServicesHero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LanguagesMenu data={langItems} />
      <HeroImageSlider data={sliderData} />
    </div>
  );
};

export default ServicesHero;
