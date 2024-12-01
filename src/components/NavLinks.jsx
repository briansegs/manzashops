/* eslint-disable react/prop-types */
import { NavLink } from "react-router";

const NavLinks = ({ navItems }) => (
  <>
    {navItems.map(({ path, name }) => (
      <NavLink
        key={name}
        to={path}
        end={path === "/manzashops/"}
        className={({ isActive }) =>
          isActive
            ? "text-black text-[22px] hover:text-[#0000ff]"
            : "text-white hover:text-[#0000ff]"
        }
      >
        {({ isActive }) => (
          <>
            <span>{isActive && "| "}</span>{" "}
            <span className={isActive && "underline"}>{name}</span>
          </>
        )}
      </NavLink>
    ))}
  </>
);

export default NavLinks;
