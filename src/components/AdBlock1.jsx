import { mockHref } from "../constants";

const data = [
  {
    href: "https://webflow.com/",
    src: "/manzashops/assets/ad/webflow.jpeg",
  },
  {
    href: mockHref,
    src: "/manzashops/assets/ad/movie24.jpeg",
  },
  {
    href: mockHref,
    src: "/manzashops/assets/ad/domain.jpeg",
  },
  {
    href: mockHref,
    src: "/manzashops/assets/ad/movie31.jpeg",
  },
  {
    href: mockHref,
    src: "/manzashops/assets/ad/manza.png",
  },
  {
    href: "https://webflow.com/",
    src: "/manzashops/assets/ad/webflow.jpeg",
  },
  {
    href: mockHref,
    src: "/manzashops/assets/ad/movie24.jpeg",
  },
];

const AdBlock1 = () => {
  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <div className="bg-black rounded-[10px] xl:w-[1496px] md:w-[95%] w-[99%]">
        <h3 className="text-white text-[24px] pl-5 pt-2">Ads</h3>

        <div className="h-[440px] items-center px-10 pb-10 pt-3 flex justify-between overflow-x-auto gap-8">
          {data.map(({ href, src }, index) => (
            <div
              key={index + "AdBlock1"}
              className="bg-slate-200 w-[250px] h-full border-[2px] border-white hover:border-secondary rounded-[10px] shrink-0"
            >
              <a href={href}>
                <img
                  src={src}
                  alt={src}
                  className="object-cover size-full rounded-[8px]"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black rounded-[10px] xl:w-fit md:w-[95%] w-[99%]">
        <h3 className="text-white text-[24px] pl-5 pt-2">Ads</h3>

        <div className="h-[440px] bg-black rounded-[10px] items-center px-10 pb-10 pt-3 flex gap-8 xl:justify-center  overflow-x-auto">
          <div className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0 border-[2px] border-white hover:border-secondary">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/target2.jpeg"
                alt="target2"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>

          <div className="bg-slate-200 w-[1000px] h-full rounded-[10px] shrink-0 border-[2px] border-white hover:border-secondary">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/YouTube Thumbnail-1 6.png"
                alt="YouTube"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBlock1;
