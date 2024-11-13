import ImageSlider from "./components/ImageSlider";
import Languages from "./components/Languages";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Menu from "./containers/Menu";
import SpotLight from "./containers/SpotLight";
import Suggestions from "./containers/Suggestions";

const App = () => {
  return (
    <div className="">
      <Header />
      <Menu />
      <ImageSlider />
      <Languages />
      <Suggestions />
      <SpotLight />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
