import NavLinks from "./NavLinks";
import { navItems } from "../constants";

const Menu = () => {
  return (
    <nav className="rounded-b-[10px] bg-navbar border-[3px] border-black h-3 lg:h-[50px]">
      <div className="hidden lg:flex h-full justify-around items-center">
        <NavLinks navItems={navItems} />
      </div>
    </nav>
  );
};

export default Menu;
