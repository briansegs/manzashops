/* eslint-disable react/prop-types */
const NavLinks = ({ navItems }) => (
  <>
    {navItems.map(({ href, name, line, black }) => (
      <li
        key={name}
        className={`hover:text-[#0000ff] ${
          black ? "text-black underline text-[22px]" : "text-white"
        }`}
      >
        <a href={href}>
          {line ? "| " : ""}
          {name}
        </a>
      </li>
    ))}
  </>
);

export default NavLinks;
