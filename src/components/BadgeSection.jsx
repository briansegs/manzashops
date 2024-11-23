/* eslint-disable react/prop-types */
import BadgeItems from "./BadgeItems";

const BadgeSection = ({ data }) => (
  <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
    {data.map(({ title, content, id, btnImg }) => (
      <div
        id={id}
        key={title}
        className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
      >
        <p className="bg-black text-white text-[34px] pb-14">{title}</p>

        <div className="flex flex-wrap pl-9 gap-4">
          <BadgeItems data={content} />
        </div>
      </div>
    ))}
  </div>
);

export default BadgeSection;
