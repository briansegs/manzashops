const numItems = 12;

const Boxdiv111 = () => (
  <div className="justify-between mt-[30px] pl-[28px] mb-[6vh]">
    {Array(numItems)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="mr-[23px] inline-block w-[80px] h-[80px] rounded-[10px] bg-[#800080] text-white"
          style={{ boxShadow: "2px 2px 5px white" }}
        >
          {/* add hover to img -> hover{box-shadow: 2px 2px 5px #60b3d1;}  */}
          <a
            href="https://www.aldoshoes.com/us/en_US?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=aldo_us_en_search_brand_nogender_core&utm_content=653404197253&utm_term=aldo&device=c&network=g&placement=&gad_source=1&gclid=EAIaIQobChMI1_jp_KaxiQMVrm9HAR0_Sj1YEAAYASAAEgKjY_D_BwE
                       "
          >
            <img
              src="/src/assets/aldo.jpeg"
              className="mr-[23px] inline-block w-[80px] h-[80px] rounded-[10px] bg-[#800080] text-white"
              style={{ boxShadow: "2px 2px 5px white" }}
            />
          </a>
        </div>
      ))}
  </div>
);

const Boxdiv211 = () => (
  <div className="justify-between mt-[30px] pl-[28px] mb-[8vh]">
    {Array(numItems)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="mr-[23px] inline-block w-[80px] h-[80px] rounded-[10px] bg-[#800080] text-white"
          style={{ boxShadow: "2px 2px 5px white" }}
        >
          <a
            href="https://www.aldoshoes.com/us/en_US?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=aldo_us_en_search_brand_nogender_core&utm_content=653404197253&utm_term=aldo&device=c&network=g&placement=&gad_source=1&gclid=EAIaIQobChMI1_jp_KaxiQMVrm9HAR0_Sj1YEAAYASAAEgKjY_D_BwE
                         "
          >
            <img
              src="/src/assets/aldo.jpeg"
              className="mr-[23px] inline-block w-[80px] h-[80px] rounded-[10px] bg-[#800080] text-white"
              style={{ boxShadow: "2px 2px 5px white" }}
            />
          </a>
        </div>
      ))}
  </div>
);

const SpotLight = () => {
  return (
    <div className="pt-[2vh] h-[105vh] bg-[#121212]">
      <div
        className="border-[5px] border-black rounded-[10px] relative items-center justify-center bg-black text-white w-[185vh] h-[40vh] mt-0 ml-[6vh] mb-[5vh] overflow-y-scroll"
        style={{ boxShadow: "10px 10px 10px black" }}
      >
        <div className="text-[24px] bg-black pl-[2vh]">SPotLight</div>

        <Boxdiv111 />

        <Boxdiv211 />

        <Boxdiv211 />
      </div>

      <div className="text-white rounded-[10px] border-[3px] border-black bg-black w-[50vh] h-[40vh] mt-[2vh] ml-[35vh] mb-[10vh] overflow-y-scroll">
        <span className="bg-black ml-[5vh] text-white text-[34px] px-[5vh]">
          Get A Domain
        </span>
        <a
          href="https://www.domain.com/my-account/login"
          className="border-[1px] border-black w-[50vh] h-[37vh] mt-[2vh]"
        >
          <img
            src="/src/assets/domain.jpeg"
            className="border-[1px] border-black w-[50vh] h-[37vh] mt-[2vh]"
          />
        </a>
      </div>

      <div className="text-white rounded-[10px] border-[3px] border-black bg-black w-[50vh] h-[40vh] mt-[-50vh] ml-[105vh] absolute overflow-y-scroll">
        <span className="bg-black ml-[5vh] text-white text-[34px] px-[5vh]">
          Build Ur own site
        </span>
        <a
          href="https://webflow.com/"
          className="border-[1px] border-black w-[50vh] h-[37vh] mt-[2vh]"
        >
          <img
            src="/src/assets/webflow.jpeg"
            className="border-[1px] border-black w-[50vh] h-[37vh] mt-[2vh]"
          />
        </a>
      </div>

      <div className="pt-[2vh] h-[105vh] bg-[#121212]"></div>
    </div>
  );
};

export default SpotLight;
