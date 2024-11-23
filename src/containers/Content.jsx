import AdBlock1 from "../components/AdBlock1";
import AdBlock2 from "../components/AdBlock2";
import AdBlock3 from "../components/AdBlock3";
import BadgeSection from "../components/BadgeSection";
import {
  block01BadgeGroup1Data,
  block01BadgeGroup2Data,
  block02BadgeGroup1Data,
  block02BadgeGroup2Data,
  block03BadgeGroup1Data,
  block03BadgeGroup2Data,
} from "../constants";

const Content = () => {
  return (
    <section className="flex items-center flex-col lg:gap-28 gap-10 bg-[#121212] lg:py-28 py-10">
      <AdBlock1 />

      <BadgeSection data={block01BadgeGroup1Data} />

      <BadgeSection data={block01BadgeGroup2Data} />

      <AdBlock2 />

      <BadgeSection data={block02BadgeGroup1Data} />

      <BadgeSection data={block02BadgeGroup2Data} />

      <AdBlock3 />

      <BadgeSection data={block03BadgeGroup1Data} />

      <BadgeSection data={block03BadgeGroup2Data} />
    </section>
  );
};

export default Content;
