const Header = () => {
  return (
    <div className="flex bg-[#121212] items-center justify-center border-black border-[3px] mb-0 h-[50px]">
      <div className="relative text-white ml-[20px]">
        <a
          href="/apl/shop1.html"
          className="relative text-white ml-[20px] hover:text-[#60b3d1]"
        >
          Manza
        </a>
      </div>

      <input
        className="ml-[30vh] relative border-black border-[3px] rounded-[5px] w-[55vh] h-[3vh]"
        placeholder="Search..."
      />

      <a
        href="form.html"
        className="text-white w-[200px] pt-0 flex items-center justify-center"
      ></a>

      <a href="#" className="text-white justify-around">
        Our Mission
      </a>

      <a href="checkout.html" className="pl-[100px] text-white">
        Support Us
      </a>

      <i className="far fa-shopping-bag"></i>
    </div>
  );
};

export default Header;
