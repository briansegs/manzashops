const SpotLightAdCard = ({ title, href, src, alt }) => (
  <div className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]">
    <p className="bg-black text-white text-[34px] pb-6">{title}</p>

    <a href={href}>
      <img src={src} alt={alt} className="object-fit h-[265px] rounded-b-md" />
    </a>
  </div>
);

export default SpotLightAdCard;
