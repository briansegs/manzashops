import ImageSlider from "../components/ImageSlider";
import Languages from "../components/Languages";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <Languages />
      <ImageSlider />
    </div>
  );
};

export default Hero;
