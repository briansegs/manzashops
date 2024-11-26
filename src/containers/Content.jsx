import AdBlock from "../components/AdBlock";
import AdBlock2 from "../components/AdBlock2";
import AdBlock3 from "../components/AdBlock3";
import AdRow01 from "../components/AdRow01";
import AdRow02 from "../components/AdRow02";
import BadgeSection from "../components/BadgeSection";
import {
  block01BadgeGroup1Data,
  block01BadgeGroup2Data,
  block02BadgeGroup1Data,
  block02BadgeGroup2Data,
  block03BadgeGroup1Data,
  block03BadgeGroup2Data,
  adRow1data001,
  mockHref,
} from "../constants";

const Content = () => {
  return (
    <section className="flex items-center flex-col lg:gap-28 gap-10 bg-[#121212] lg:py-28 py-10">
      <AdBlock
        ads={
          <>
            <AdRow01 data={adRow1data001} />

            <AdRow02
              ad1Href={mockHref}
              ad1Src={"/manzashops/assets/ad/target2.jpeg"}
              ad1Alt={"target2"}
              ad2Href={mockHref}
              ad2Src={"/manzashops/assets/ad/YouTube Thumbnail-1 6.png"}
              ad2Alt={"YouTube"}
            />
          </>
        }
      />

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
