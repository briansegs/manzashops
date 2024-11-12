import ImageSlider from "./components/ImageSlider";
import Languages from "./components/Languages";
import Header from "./containers/Header";
import Menu from "./containers/Menu";
import Suggestions from "./containers/Suggestions";

const App = () => {
  return (
    <div className="">
      <Header />
      <Menu />
      <ImageSlider />
      <Languages />
      <Suggestions />
    </div>
  );
};

export default App;
