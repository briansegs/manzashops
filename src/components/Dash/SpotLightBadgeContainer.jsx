import SpotLightBadge from "./SpotLightBadge";

const SpotLightBadgeContainer = ({ data }) => (
  <div className="border-[5px] border-black rounded-[10px] w-fit flex flex-col mt-4 bg-black shadow-[10px_10px_10px_black]">
    <p className="text-[24px] text-white pb-2 pl-[2vh]">SPotLight</p>

    <div className="flex flex-wrap gap-4 pt-[22px] px-[28px] h-[272px] overflow-y-scroll">
      {data.map(({ id, href, src, title }) => (
        <SpotLightBadge key={id} id={id} href={href} src={src} title={title} />
      ))}
    </div>
  </div>
);

export default SpotLightBadgeContainer;
