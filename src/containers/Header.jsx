const Header = () => {
  return (
    <div className="flex justify-between items-center bg-header h-[50px] px-16 xl:px-40">
      <a href="/apl/shop1.html" className="text-white hover:text-secondary">
        Manza
      </a>

      <input
        className="border-black border-[3px] rounded-[5px] w-[480px] xl:w-[550px] h-8 hidden lg:inline-block"
        placeholder="Search..."
      />

      <div className="flex lg:gap-16 md:gap-4">
        <a href="#" className="text-white px-2">
          Our Mission
        </a>

        <a href="checkout.html" className="text-white px-2">
          Support Us
        </a>
      </div>
    </div>
  );
};

export default Header;
