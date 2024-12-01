import Content from "../containers/Content";
import Hero from "../containers/Hero";
import SpotLight from "../containers/SpotLight";
import Suggestions from "../containers/Suggestions";

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
