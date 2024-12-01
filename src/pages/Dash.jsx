import Content from "../components/Dash/Content";
import Hero from "../components/Dash/Hero";
import SpotLight from "../components/Dash/SpotLight";
import Suggestions from "../components/Dash/Suggestions";

const Dash = () => {
  return (
    <div className="bg-white w-full">
      <Hero />
      <Suggestions />
      <SpotLight />
      <Content />
    </div>
  );
};

export default Dash;
