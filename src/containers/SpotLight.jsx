import SpotLightBadge from "../components/SpotLightBadge";
import { itemData } from "../constants/spotlight";

const SpotLight = () => {
  return (
    <section className="pt-[2vh] flex flex-col w-full gap-10 bg-[#121212] px-[6vh]">
      <div className="border-[5px] border-black rounded-[10px] w-fit flex flex-col mt-4 bg-black shadow-[10px_10px_10px_black]">
        <p className="text-[24px] text-white pb-2 pl-[2vh]">SPotLight</p>

        <div className="flex flex-wrap gap-4 pt-[22px] px-[28px] h-[272px] overflow-y-scroll">
          {itemData.map(({ id, href, src, title }) => (
            <SpotLightBadge
              key={id}
              id={id}
              href={href}
              src={src}
              title={title}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:gap-8 gap-10 lg:flex-row lg:justify-around items-center xl:px-36 px-8">
        <div className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]">
          <p className="bg-black text-white text-[34px] pb-6">Get A Domain</p>

          <a href="https://www.domain.com/my-account/login">
            <img
              src="/manzashops/assets/domain.jpeg"
              className="object-fit h-[265px] rounded-b-md"
            />
          </a>
        </div>

        <div className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]">
          <p className="bg-black text-white text-[34px] pb-6">
            Build Ur own site
          </p>

          <a href="https://webflow.com/">
            <img
              src="/manzashops/assets/webflow.jpeg"
              className="object-fit h-[265px] rounded-b-md"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpotLight;
