import SpotLightAdCard from "../components/SpotLightAdCard";
import SpotLightBadgeContainer from "../components/SpotLightBadgeContainer";
import { itemData } from "../constants/spotlight";

const SpotLight = () => {
  return (
    <section className="pt-[2vh] flex flex-col w-full gap-10 bg-[#121212] px-[6vh]">
      <SpotLightBadgeContainer data={itemData} />

      <div className="flex flex-col lg:gap-8 gap-10 lg:flex-row lg:justify-around items-center xl:px-36 px-8">
        <SpotLightAdCard
          title={"Get A Domain"}
          href={"https://www.domain.com/my-account/login"}
          src={"/manzashops/assets/domain.jpeg"}
          alt={"domain.com"}
        />

        <SpotLightAdCard
          title={"Build Ur own site"}
          href={"https://webflow.com/"}
          src={"/manzashops/assets/webflow.jpeg"}
          alt={"webflow"}
        />
      </div>
    </section>
  );
};

export default SpotLight;
