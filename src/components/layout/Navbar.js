import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) => (isActive ? "activeLink" : "");
  return (
    <nav className="bg-white text-slate-800 font-medium p-2 h-20 flex items-center justify-around overflow-hidden">
      <div className="space-x-5">
        <NavLink className={activeLink} to="/">
          Home
        </NavLink>
        <NavLink className={activeLink} to="/about">
          About
        </NavLink>
        <NavLink className={activeLink} to="/contact">
          Contact
        </NavLink>
      </div>

      <div className="space-x-5">
        <NavLink to="/contact/add-contact">Add Contact</NavLink>
        <NavLink className="btn" to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
