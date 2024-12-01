import ImageSlider from "./ImageSlider";
import Languages from "./Languages";
import { langItems } from "../../constants/Dash";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <Languages data={langItems} />
      <ImageSlider />
    </div>
  );
};

export default Hero;
