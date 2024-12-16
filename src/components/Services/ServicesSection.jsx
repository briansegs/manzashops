const ServicesSection = ({ data }) => {
  const { id, title, subTitle, adRow1, adRow2 } = data;
  return (
    <div id={id} className="w-full flex flex-col gap-4">
      <div className="bg-black h-14 px-4 flex items-center shadow-[5px_5px_10px_black]">
        <p className="text-white">
          <span className="uppercase">{title}</span> {subTitle}
        </p>
      </div>

      <div className="w-full md:px-10 px-0">
        <div className="py-8 md:px-28 px-14 border-[1px] border-black flex flex-col gap-1 shadow-[5px_5px_10px_black] overflow-x-auto">
          <div className="flex gap-1 w-fit">
            {adRow1.map(({ id, href, src, alt }) => (
              <div
                key={id}
                className="border-[2px] border-white hover:border-secondary w-96 h-56 shrink-0"
              >
                <a href={href}>
                  <img src={src} alt={alt} className="object-fit size-full" />
                </a>
              </div>
            ))}
          </div>

          <div className="flex gap-1 w-fit">
            {adRow2.map(({ id, href, src, alt }) => (
              <div
                key={id}
                className="border-[2px]  border-white hover:border-secondary w-96 h-56 shrink-0"
              >
                <a href={href}>
                  <img src={src} alt={alt} className="object-fit size-full" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
