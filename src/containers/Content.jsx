import ContentContainer from "../components/ContentContainer";
import { contentBoxData } from "../constants";
import { contentGroupData1, contentGroupData2 } from "../constants";

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

const mockHref =
  "https://www.aldoshoes.com/us/en_US?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=aldo_us_en_search_brand_nogender_core&utm_content=653404197253&utm_term=aldo&device=c&network=g&placement=&gad_source=1&gclid=EAIaIQobChMI1_jp_KaxiQMVrm9HAR0_Sj1YEAAYASAAEgKjY_D_BwE";

const Content = () => {
  return (
    <section className="flex items-center flex-col lg:gap-28 gap-10 bg-[#121212] lg:py-28 py-10">
      <div className="flex flex-col gap-2 items-center w-full">
        <div className="h-[440px] bg-black xl:w-[1496px] md:w-[95%] w-[99%] rounded-[10px] items-center p-10 flex justify-between overflow-x-auto gap-8">
          {data.map(({ href, src, key }) => (
            <div
              key={key}
              className="bg-slate-200 w-[250px] h-full rounded-[10px] shrink-0"
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

        <div className="h-[440px] bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px] items-center p-10 flex gap-8 xl:justify-center  overflow-x-auto">
          <div className="bg-slate-200 w-96 h-full rounded-[10px] shrink-0">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/target2.jpeg"
                alt="target2"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>

          <div className="bg-slate-200 w-[1000px] h-full rounded-[10px] shrink-0">
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

      <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
        {contentGroupData1.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
          >
            <p className="bg-black text-white text-[34px] pb-14">{title}</p>

            <ContentContainer contentBoxData={contentBoxData} />
          </div>
        ))}
      </div>

      <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
        {contentGroupData2.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
          >
            <p className="bg-black text-white text-[34px] pb-14">{title}</p>

            <ContentContainer contentBoxData={contentBoxData} />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 items-center w-full">
        <div className="h-[440px] bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px] items-center p-10 flex gap-8 xl:justify-center  overflow-x-auto">
          <div className="bg-slate-200 w-[1240px] h-full rounded-[10px] shrink-0">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/clothes.jpeg"
                alt="clothes"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>
        </div>

        <div className="h-[400px] bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px] items-center p-10 flex gap-8 xl:justify-center  overflow-x-auto">
          <div className="bg-slate-200 w-[600px] h-full rounded-[10px] shrink-0">
            <a href={mockHref}>
              <img
                src="/manzashops/assets/ad/perfume2.jpeg"
                alt="perfume2"
                className="object-cover size-full rounded-[8px]"
              />
            </a>
          </div>

          <div className="bg-slate-200 w-[600px] h-full rounded-[10px] shrink-0">
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

      <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
        {contentGroupData1.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
          >
            <p className="bg-black text-white text-[34px] pb-14">{title}</p>

            <ContentContainer contentBoxData={contentBoxData} />
          </div>
        ))}
      </div>

      <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
        {contentGroupData2.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
          >
            <p className="bg-black text-white text-[34px] pb-14">{title}</p>

            <ContentContainer contentBoxData={contentBoxData} />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 items-center w-full">
        <div className="h-[440px] bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px] items-center p-10 flex gap-8 xl:justify-center  overflow-x-auto">
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

        <div className="h-[440px] bg-black xl:w-fit md:w-[95%] w-[99%] rounded-[10px] items-center p-10 flex gap-8 xl:justify-center  overflow-x-auto">
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

      <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
        {contentGroupData1.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
          >
            <p className="bg-black text-white text-[34px] pb-14">{title}</p>

            <ContentContainer contentBoxData={contentBoxData} />
          </div>
        ))}
      </div>

      <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
        {contentGroupData2.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
          >
            <p className="bg-black text-white text-[34px] pb-14">{title}</p>

            <ContentContainer contentBoxData={contentBoxData} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
