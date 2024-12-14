const AdRow03 = ({ data }) => (
  <div className="bg-black rounded-[10px] xl:w-[1312px] md:w-[95%] w-[99%]">
    <h3 className="text-white text-[24px] pl-5 pt-2">Ads</h3>

    <div className="h-[440px] items-center px-10 pb-10 pt-3 flex justify-between overflow-x-auto gap-8">
      {data.map(({ id, href, src, alt }) => (
        <div
          key={id}
          className="bg-slate-200 w-[1200px] h-full rounded-[10px] shrink-0 border-[2px] border-white hover:border-secondary"
        >
          <a href={href}>
            <img
              src={src}
              alt={alt}
              className="object-fit size-full rounded-[8px]"
            />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default AdRow03;
