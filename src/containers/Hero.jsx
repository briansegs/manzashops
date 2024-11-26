import ImageSlider from "../components/ImageSlider";
import Languages from "../components/Languages";
import { langItems } from "../constants";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <Languages data={langItems} />
      <ImageSlider />
    </div>
  );
};

export default Hero;
