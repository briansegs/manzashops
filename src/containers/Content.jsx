import AdBlock1 from "../components/AdBlock1";
import AdBlock2 from "../components/AdBlock2";
import AdBlock3 from "../components/AdBlock3";
import ContentContainer from "../components/ContentContainer";
import {
  contentBoxData,
  contentGroupData1,
  contentGroupData2,
} from "../constants";

const Content = () => {
  return (
    <section className="flex items-center flex-col lg:gap-28 gap-10 bg-[#121212] lg:py-28 py-10">
      <AdBlock1 />

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

      <AdBlock2 />

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

      <AdBlock3 />

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
