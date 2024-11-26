/* eslint-disable react/prop-types */
const SpotLightBadge = ({ href, src, title }) => (
  <a
    className="size-[80px] mb-8 text-white flex flex-col gap-1 capitalize"
    href={href}
  >
    <div className="rounded-[10px] bg-[#800080] text-white shadow-[2px_2px_5px_white] border-[1px] border-black hover:shadow-[2px_2px_5px_#60b3d1]">
      <img src={src} className="size-[80px] rounded-[10px] object-cover" />
    </div>

    <p>{title}</p>
  </a>
);

export default SpotLightBadge;
