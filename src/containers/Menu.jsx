import NavLinks from "../components/nav/NavLinks";

const navItems = [
  {
    href: "/Scope1.html",
    name: "Home",
    line: false,
    black: false,
  },
  {
    href: "/shop1.html",
    name: "Dash",
    line: true,
    black: true,
  },
  {
    href: "/deals.html",
    name: "Deals",
    line: true,
    black: false,
  },
  {
    href: "/",
    name: "Services",
    line: true,
    black: false,
  },
  {
    href: "/",
    name: "Jobs",
    line: true,
    black: false,
  },
  {
    href: "/",
    name: "Menus",
    line: true,
    black: false,
  },
  {
    href: "/movies.html",
    name: "Movies",
    line: true,
    black: false,
  },
  {
    href: "/articles1.html",
    name: "Newsletter",
    line: true,
    black: false,
  },
  {
    href: "/",
    name: "Great Things to try",
    line: true,
    black: false,
  },
];

const Menu = () => {
  return (
    <ul className="rounded-b-[10px] flex items-center justify-around bg-navbar border-[3px] border-black h-[50px]">
      <NavLinks navItems={navItems} />
    </ul>
  );
};

export default Menu;
