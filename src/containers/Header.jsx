import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import NavLinks from "../components/NavLinks";
import { navItems } from "../constants";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-between items-center bg-header h-[50px] px-16 xl:px-40">
      <a href="/apl/shop1.html" className="text-white hover:text-secondary">
        Manza
      </a>

      <input
        className="border-black border-[3px] rounded-[5px] w-[480px] xl:w-[550px] h-8 hidden lg:inline-block"
        placeholder="Search..."
      />

      <div className="lg:flex lg:gap-16 md:gap-4 hidden">
        <a href="#" className="text-white px-2">
          Our Mission
        </a>

        <a href="checkout.html" className="text-white px-2">
          Support Us
        </a>
      </div>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <button type="button" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <RxCross1 className="text-white size-7" />
          ) : (
            <RxHamburgerMenu className="text-white size-7" />
          )}
        </button>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-header flex-col absolute top-20 right-0 mx-4 mt-2 min-w-[140px] rounded-lg sidebar border-t-4 border-secondary z-10`}
        >
          <div className="p-6">
            <input
              className="border-black border-[3px] rounded-[5px] w-full h-8 "
              placeholder="Search..."
            />
          </div>

          <div className="w-full flex gap-4 justify-between pb-3 px-6">
            <a href="#" className="text-white px-2">
              Our Mission
            </a>

            <a href="checkout.html" className="text-white px-2">
              Support Us
            </a>
          </div>

          <ul className="flex flex-col flex-1 px-6 pb-5 rounded-b-lg pt-3 gap-2 bg-secondary">
            <NavLinks navItems={navItems} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
