/* eslint-disable react/prop-types */

const AdRow05 = ({ data }) => (
  <div className="bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px]">
    <h3 className="text-white text-[24px] pl-5 pt-2">Ads</h3>

    <div className="h-[440px]  items-center px-10 pb-10 pt-3 flex gap-8 xl:justify-center  overflow-x-auto">
      {data.map(({ id, href, src, alt }) => (
        <div
          key={id}
          className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0 border-[2px] border-white hover:border-secondary"
        >
          <a href={href}>
            <img
              src={src}
              alt={alt}
              className="object-cover size-full rounded-[8px]"
            />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default AdRow05;
