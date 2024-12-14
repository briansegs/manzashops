import AdBlock from "./AdBlock";
import AdRow01 from "./AdRow01";
import AdRow02 from "./AdRow02";
import AdRow03 from "./AdRow03";
import AdRow04 from "./AdRow04";
import AdRow05 from "./AdRow05";
import BadgeSection from "./BadgeSection";
import {
  adRow1data001,
  adRow05data001,
  adRow05data002,
  mockHref,
  ourContentShop,
  sports,
  paidTopSpot,
  bangUrBuck,
  getYourBestBuy,
  exploreTrends,
  activeGear,
  exclusivePicks,
  valueVault,
  shopSmarter,
  freshFinds,
  gearUp,
  premiumPicks,
  dealHunters,
  smartPicks,
  topTrends,
  adventureReady,
  eliteChoices,
  savvySavings,
  brightBuys,
  latestLooks,
  outdoorEssentials,
  premiumSelections,
  budgetFinds,
  smartChoices,
  fashionForward,
  inGear,
  luxuryLines,
  savingsSpotlight,
  bestDeals,
  pcRichard,
  abercrombie,
  target,
  bestBuy,
} from "../../constants/Dash";
import TopBadges from "./TopBadges";
import { adRow03data001 } from "../../constants/Dash/content";

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

      <TopBadges
        data={[
          pcRichard,
          target,
          abercrombie,
          bestBuy,
          pcRichard,
          target,
          abercrombie,
          bestBuy,
        ]}
      />

      <BadgeSection
        data={[ourContentShop, sports, paidTopSpot, bangUrBuck, getYourBestBuy]}
      />

      <BadgeSection
        data={[
          exploreTrends,
          activeGear,
          exclusivePicks,
          valueVault,
          shopSmarter,
        ]}
      />

      <AdBlock
        ads={
          <>
            <AdRow03 data={adRow03data001} />

            <AdRow04
              ad1Href={mockHref}
              ad1Src={"/manzashops/assets/ad/perfume2.jpeg"}
              ad1Alt={"perfume2"}
              ad2Href={mockHref}
              ad2Src={"/manzashops/assets/ad/target1.jpeg"}
              ad2Alt={"target1"}
            />
          </>
        }
      />

      <BadgeSection
        data={[freshFinds, gearUp, premiumPicks, dealHunters, smartPicks]}
      />

      <BadgeSection
        data={[
          topTrends,
          adventureReady,
          eliteChoices,
          savvySavings,
          brightBuys,
        ]}
      />

      <AdBlock
        ads={
          <>
            <AdRow05 data={adRow05data001} />

            <AdRow05 data={adRow05data002} />
          </>
        }
      />

      <BadgeSection
        data={[
          latestLooks,
          outdoorEssentials,
          premiumSelections,
          budgetFinds,
          smartChoices,
        ]}
      />

      <BadgeSection
        data={[
          fashionForward,
          inGear,
          luxuryLines,
          savingsSpotlight,
          bestDeals,
        ]}
      />
    </section>
  );
};

export default Content;
