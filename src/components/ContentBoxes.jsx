/* eslint-disable react/prop-types */
const data1 = [
  {
    name: "nike",
    href: null,
    src: "/manzashop/assets/nike.jpeg",
  },
  {
    name: "adidas",
    href: null,
    src: "/manzashop/assets/adidas.jpeg",
  },
  {
    name: "puma",
    href: null,
    src: "/manzashop/assets/puma.jpeg",
  },
  {
    name: "aldo",
    href: null,
    src: "/manzashop/assets/aldo.jpeg",
  },
];

const data2 = [
  {
    name: "jordan",
    href: null,
    src: "/assets/jordan.jpeg",
  },
  {
    name: "reebok",
    href: null,
    src: "/assets/reebok.jpeg",
  },
  {
    name: "converse",
    href: null,
    src: "/assets/converse.jpeg",
  },
  {
    name: "underarmour",
    href: null,
    src: "/assets/underarmour.jpeg",
  },
];

const data3 = [
  {
    name: null,
    href: null,
    src: null,
  },
  {
    name: null,
    href: null,
    src: null,
  },
  {
    name: null,
    href: null,
    src: null,
  },
  {
    name: null,
    href: null,
    src: null,
  },
];

const Boxdiv1 = ({ data }) => (
  <div className="justify-between mt-[30px] pl-[28px]">
    {data.map((item, index) => (
      <div
        key={index}
        className="mr-[15px] inline-block w-[60px] h-[60px] rounded-[10px] bg-[#800080] text-white border-[1px] border-black shadow-[2px_2px_5px_white] hover:shadow-[2px_2px_5px_#60b3d1]"
      >
        <a
          href={
            item.href ||
            "https://www.aldoshoes.com/us/en_US?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=aldo_us_en_search_brand_nogender_core&utm_content=653404197253&utm_term=aldo&device=c&network=g&placement=&gad_source=1&gclid=EAIaIQobChMI1_jp_KaxiQMVrm9HAR0_Sj1YEAAYASAAEgKjY_D_BwE"
          }
        >
          <img
            src={item.src || "/assets/aldo.jpeg"}
            className="mr-[15px] inline-block w-[60px] h-[60px] rounded-[10px] bg-[#800080] text-white border-[1px] border-black shadow-[2px_2px_5px_white] hover:shadow-[2px_2px_5px_#60b3d1]"
          />
        </a>
        {item.name || "aldo"}
      </div>
    ))}
  </div>
);

const ContentBoxes = () => {
  return (
    <>
      <Boxdiv1 data={data1} />

      <Boxdiv1 data={data3} />
    </>
  );
};

export default ContentBoxes;
