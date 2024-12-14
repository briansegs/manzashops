const AdRow02 = ({ ad1Href, ad1Src, ad1Alt, ad2Href, ad2Src, ad2Alt }) => (
  <div className="bg-black rounded-[10px] xl:w-fit md:w-[95%] w-[99%]">
    <h3 className="text-white text-[24px] pl-5 pt-2">Ads</h3>

    <div className="h-[440px] bg-black rounded-[10px] items-center px-10 pb-10 pt-3 flex gap-8 xl:justify-center  overflow-x-auto">
      <div className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0 border-[2px] border-white hover:border-secondary">
        <a href={ad1Href}>
          <img
            src={ad1Src}
            alt={ad1Alt}
            className="object-fit size-full rounded-[8px]"
          />
        </a>
      </div>

      <div className="bg-slate-200 w-[1000px] h-full rounded-[10px] shrink-0 border-[2px] border-white hover:border-secondary">
        <a href={ad2Href}>
          <img
            src={ad2Src}
            alt={ad2Alt}
            className="object-fit size-full rounded-[8px]"
          />
        </a>
      </div>
    </div>
  </div>
);
export default AdRow02;
