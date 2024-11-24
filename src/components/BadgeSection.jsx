/* eslint-disable react/prop-types */
import BadgeItems from "./BadgeItems";

const BadgeSection = ({ data }) => (
  <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
    {data.map(({ title, content, id, btnImg }) => (
      <div
        id={id}
        key={title}
        className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]"
      >
        <div className="flex items-center justify-between w-full pb-6">
          <button className="size-[70px] border-2 border-black hover:border-white rounded-xl">
            <img
              src="/manzashops/assets/badge/qv.png"
              alt="quick view"
              className="size-full rounded-lg object-cover"
            />
          </button>

          <p className="bg-black justify-center h-full text-center flex text-white text-3xl ">
            {title}
          </p>

          <div className="size-[70px] border-2 border-black rounded-xl">
            <img
              src={btnImg}
              alt="badge"
              className="size-full rounded-lg object-cover "
            />
          </div>
        </div>

        <div className="flex flex-wrap pl-9 pt-4 gap-4 overflow-y-scroll">
          <BadgeItems data={content} />
        </div>
      </div>
    ))}
  </div>
);

export default BadgeSection;
