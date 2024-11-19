/* eslint-disable react/prop-types */

const BadgeItems = ({ data }) => (
  <>
    {data.map((item, index) => (
      <div
        key={index}
        className="w-[60px] h-[60px] mb-11 rounded-[10px] bg-[#800080] text-white border-[1px] border-black shadow-[2px_2px_5px_white] hover:shadow-[2px_2px_5px_#60b3d1]"
      >
        <a
          href={
            item.href ||
            "https://www.aldoshoes.com/us/en_US?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=aldo_us_en_search_brand_nogender_core&utm_content=653404197253&utm_term=aldo&device=c&network=g&placement=&gad_source=1&gclid=EAIaIQobChMI1_jp_KaxiQMVrm9HAR0_Sj1YEAAYASAAEgKjY_D_BwE"
          }
        >
          <img
            src={item.src || "/manzashops/assets/aldo.jpeg"}
            className="w-[60px] h-[60px] rounded-[10px] bg-[#800080] text-white border-[1px] border-black shadow-[2px_2px_5px_white] hover:shadow-[2px_2px_5px_#60b3d1]"
          />
        </a>
        {item.name || "aldo"}
      </div>
    ))}
  </>
);

export default BadgeItems;
