import { sliderData } from "../../constants/Jobs";
import HeroImageSlider from "../HeroImageSlider";
import LanguagesMenu from "../LanguagesMenu";
import { langItems } from "../../constants";

const JobsHero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LanguagesMenu data={langItems} />
      <HeroImageSlider data={sliderData} />
    </div>
  );
};

export default JobsHero;
