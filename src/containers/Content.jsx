import ContentBoxes from "../components/ContentBoxes";

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
