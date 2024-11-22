/* eslint-disable react/prop-types */
import ContentContainer from "./ContentContainer";

const BadgeSection = ({ data }) => (
  <div className="flex md:mx-20 mx-0 flex-col flex-wrap lg:gap-20 gap-10 lg:flex-row justify-center items-center">
    {data.map(({ title, content }) => (
      <div
        key={title}
        className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px] overflow-y-scroll"
      >
        <p className="bg-black text-white text-[34px] pb-14">{title}</p>

        <ContentContainer contentBoxData={content} />
      </div>
    ))}
  </div>
);

const BadgeBlock = ({ group1Data, group2Data }) => {
  return (
    <>
      <BadgeSection data={group1Data} />

      <BadgeSection data={group2Data} />
    </>
  );
};

export default BadgeBlock;
