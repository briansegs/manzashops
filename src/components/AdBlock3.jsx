import { mockHref } from "../constants";

const AdBlock3 = () => {
  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <div className="bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px]">
        <h3 className="text-white text-[24px] pl-5 pt-2">Ads</h3>

        <div className="h-[440px]  items-center px-10 pb-10 pt-3 flex gap-8 xl:justify-center  overflow-x-auto">
          <div className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/collection1.jpeg"
                alt="collection1"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>

          <div className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/target2.jpeg"
                alt="target2"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>

          <div className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/tech.jpeg"
                alt="tech"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px]">
        <h3 className="text-white text-[24px] pl-5 pt-2">Ads</h3>

        <div className="h-[440px] bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px] items-center px-10 pb-10 pt-3 flex gap-8 xl:justify-center  overflow-x-auto">
          <div className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/game1.jpeg"
                alt="game1"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>

          <div className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/perfume3.jpeg"
                alt="perfume3"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>

          <div className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/kitchen.jpeg"
                alt="kitchen"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBlock3;
