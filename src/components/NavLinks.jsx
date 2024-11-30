import { Link } from "react-router";

/* eslint-disable react/prop-types */
const NavLinks = ({ navItems }) => (
  <>
    {navItems.map(({ path, name, line, black }) => (
      <div
        key={name}
        className={`hover:text-[#0000ff] ${
          black ? "text-black underline text-[22px]" : "text-white"
        }`}
      >
        <Link to={path}>
          {line ? "| " : ""}
          {name}
        </Link>
      </div>
    ))}
  </>
);

export default NavLinks;
