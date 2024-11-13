/* eslint-disable react/prop-types */
import ContentBox from "../components/ContentBox";

const data1 = [
  {
    title: "Our Content Shop",
    styles: "inline-block mt-[-6vh] ml-[15vh]",
  },
  {
    title: "Sports",
    styles: "relative mt-[-41vh] ml-[75vh] mb-[10px] text-white",
  },
  {
    title: "Paid Top Spot",
    styles: "mt-[-41vh] ml-[135vh] text-white",
  },
  {
    title: "Bang 4 Ur buck!",
    styles: "mt-[2vh] ml-[35vh] mb-[10vh] text-white",
  },
  {
    title: "GetYour BestBuy",
    styles: "absolute mt-[-50vh] ml-[105vh] text-white",
  },
];

const data2 = [
  {
    title: "Toys",
    styles: "inline-block mt-[-6vh] ml-[15vh]",
  },
  {
    title: "Games|Entertain",
    styles: "relative mt-[-41vh] ml-[75vh] mb-[10px] text-white",
  },
  {
    title: "By Genress",
    styles: "mt-[-41vh] ml-[135vh] text-white",
  },
  {
    title: "Gift Cards",
    styles: "mt-[2vh] ml-[35vh] mb-[10vh] text-white",
  },
  {
    title: "Furniture Shops",
    styles: "absolute mt-[-50vh] ml-[105vh] text-white",
  },
];

const ContentBoxes = ({ data }) => (
  <>
    {data.map((item) => (
      <ContentBox key={item.title} title={item.title} styles={item.styles} />
    ))}
  </>
);

const Content = () => {
  return (
    <>
      <div className="pt-[2vh] h-[105vh] bg-[#121212]">
        <ContentBoxes data={data1} />
      </div>
      <div className="pt-[2vh] h-[105vh] bg-[#121212]">
        <ContentBoxes data={data2} />
      </div>
    </>
  );
};

export default Content;
