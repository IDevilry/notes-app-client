import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="mx-auto">
      <nav className="flex items-center justify-center h-20">
        <ul className="flex gap-6">
          <li className="font-medium text-[20px]">
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="font-medium text-[20px]">
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
              to={"/profile"}
            >
              Profile
            </NavLink>
          </li>
          <li className="font-medium text-[20px]">
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
              to={"/favorites"}
            >
              Favorites
            </NavLink>
          </li>
          <li className="font-medium text-[20px]">
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
              to={"/reg"}
            >
              Sign Up
            </NavLink>
          </li>
          <li className="font-medium text-[20px]">
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
              to={"/login"}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
