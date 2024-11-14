import Content from "./containers/Content";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import Menu from "./containers/Menu";
import SpotLight from "./containers/SpotLight";
import Suggestions from "./containers/Suggestions";

const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <Header />
      <Menu />
      <Hero />
      <Suggestions />
      <SpotLight />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
