import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary shadow-md">
      <div className="flex-1">
        <NavLink
          className="btn btn-ghost normal-case text-xl text-white"
          to="/"
        >
          Sample App
        </NavLink>
      </div>
      <div className="flex-none text-white">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/ECE">ECE</NavLink>
          </li>
          <li>
            <NavLink to="/CSE">CSE</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
