import ContentBoxes from "../components/ContentBoxes";
import { data1, data2 } from "../constants";

const Content = () => {
  return (
    <div className="flex flex-col gap-28 bg-[#121212] py-28 md:px-20 px-0">
      <div className="flex flex-col flex-wrap gap-20 lg:flex-row justify-center items-center">
        {data1.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]"
          >
            <p className="bg-black text-white text-[34px] pb-6">{title}</p>

            <ContentBoxes />
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-wrap gap-20 lg:flex-row justify-center items-center">
        {data2.map(({ title }) => (
          <div
            key={title}
            className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]"
          >
            <p className="bg-black text-white text-[34px] pb-6">{title}</p>

            <ContentBoxes />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
