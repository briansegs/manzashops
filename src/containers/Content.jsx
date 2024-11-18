import ContentContainer from "../components/ContentContainer";
import { contentGroupData1, contentGroupData2 } from "../constants";

const Content = () => {
  return (
    <div className="flex flex-col lg:gap-28 gap-10 bg-[#121212] lg:py-28 py-10 md:px-20 px-0">
      <div className="flex flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
        {contentGroupData1.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
          >
            <p className="bg-black text-white text-[34px] pb-14">{title}</p>

            <ContentContainer />
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
        {contentGroupData2.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
          >
            <p className="bg-black text-white text-[34px] pb-14">{title}</p>

            <ContentContainer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
