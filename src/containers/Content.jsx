import AdBlock1 from "../components/AdBlock1";
import AdBlock2 from "../components/AdBlock2";
import AdBlock3 from "../components/AdBlock3";
import BadgeBlock from "../components/BadgeBlock";
import { contentGroupData1, contentGroupData2 } from "../constants";

const Content = () => {
  return (
    <section className="flex items-center flex-col lg:gap-28 gap-10 bg-[#121212] lg:py-28 py-10">
      <AdBlock1 />

      <BadgeBlock
        group1Data={contentGroupData1}
        group2Data={contentGroupData2}
      />

      <AdBlock2 />

      <BadgeBlock
        group1Data={contentGroupData1}
        group2Data={contentGroupData2}
      />

      <AdBlock3 />

      <BadgeBlock
        group1Data={contentGroupData1}
        group2Data={contentGroupData2}
      />
    </section>
  );
};

export default Content;
