import ListingsHero from "../components/Listings/ListingsHero";
import ListingsContent from "../components/Listings/ListingsContent";

const Listings = () => {
  return (
    <section className="bg-white w-full">
      <ListingsHero />

      <ListingsContent />
    </section>
  );
};

export default Listings;
