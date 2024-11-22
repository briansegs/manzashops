import { mockHref } from "../constants";

const AdBlock2 = () => {
  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <div className="bg-black rounded-[10px] xl:w-fit md:w-[95%] w-[99%]">
        <h3 className="text-white text-[24px] pl-5 pt-2">Ads</h3>

        <div className="h-[440px]  rounded-[10px] items-center px-10 pb-10 pt-3 flex gap-8 xl:justify-center overflow-x-auto">
          <div className="bg-slate-200 w-[1240px] h-full rounded-[10px] shrink-0 border-[2px] border-white hover:border-secondary">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/clothes.jpeg"
                alt="clothes"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black rounded-[10px] xl:w-fit md:w-[95%] w-[99%]">
        <h3 className="text-white text-[24px] pl-5 pt-2">Ads</h3>

        <div className="h-[400px] bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px] items-center px-10 pb-10 pt-3 flex gap-8 xl:justify-center  overflow-x-auto">
          <div className="bg-slate-200 w-[600px] h-full rounded-[10px] shrink-0 border-[2px] border-white hover:border-secondary">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/perfume2.jpeg"
                alt="perfume2"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>

          <div className="bg-slate-200 w-[600px] h-full rounded-[10px] shrink-0 border-[2px] border-white hover:border-secondary">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/target1.jpeg"
                alt="target1"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBlock2;
