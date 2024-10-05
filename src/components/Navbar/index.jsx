import React, { useState } from "react";
import logo from "/Logomark.svg";
import { Link } from "react-router-dom";

import Hamburger from "../../assets/icons/Hamburger";
import ChevronDown from "../../assets/icons/ChevronDown";
import CrossMark from "../../assets/icons/CrossMark";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b-2">
      <div className="max-w-6xl mx-auto p-5 flex items-center relative">
        <Link
          to="/"
          className="inline-flex gap-3 items-center hover:outline-dashed outline-1"
        >
          <img src={logo} alt="" />
          <h5 className="text-2xl font-bold">Untitled UI</h5>
        </Link>
        <button
          type="button"
          className="flex md:hidden ml-auto border rounded-md p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CrossMark /> : <Hamburger />}
        </button>

        {isMenuOpen && (
          <ul className="absolute top-[100%] left-0 w-full shadow-lg bg-white z-10 flex md:hidden flex-col font-semibold items-center list-none">
            <li className="w-full">
              <Link
                to="/"
                className="flex w-full p-3 hover:outline-dashed outline-1"
              >
                Home
              </Link>
            </li>
            <li className="group/dropdown relative w-full">
              <Link
                to="/"
                className="flex gap-2 p-3 hover:outline-dashed outline-1"
              >
                Products
                <ChevronDown className="size-6 transition-transform group-hover/dropdown:rotate-180" />
              </Link>
              <ul className="invible z-10 group-hover/dropdown:flex group-hover/dropdown:visible group-focus/dropdown:flex group-focus/dropdown:visible absolute top-[100%] left-0 flex-col invisible items-center list-none border w-40 rounded-md bg-white shadow-lg">
                <li className="w-full">
                  <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                    Option 1
                  </Link>
                </li>
                <li className="w-full">
                  <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                    Option 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group/dropdown relative w-full">
              <Link
                to="/"
                className="p-3 flex gap-2 hover:outline-dashed outline-1"
              >
                Resource
                <ChevronDown className="size-6 transition-transform group-hover/dropdown:rotate-180" />
              </Link>
              <ul className="invible z-10 group-hover/dropdown:flex group-hover/dropdown:visible group-focus/dropdown:flex group-focus/dropdown:visible absolute top-[100%] left-0 flex-col invisible items-center list-none border w-40 rounded-md bg-white shadow-lg">
                <li className="w-full">
                  <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                    Option 1
                  </Link>
                </li>
                <li className="w-full">
                  <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                    Option 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="w-full">
              <Link
                to="/Pricing"
                className="p-3 flex hover:outline-dashed outline-1"
              >
                Pricing
              </Link>
            </li>
          </ul>
        )}
        <ul className="hidden md:flex font-semibold items-center gap-8 list-none ml-10">
          <li>
            <Link to="/" className="hover:outline-dashed outline-1">
              Home
            </Link>
          </li>
          <li className="group/dropdown relative">
            <Link
              to="/"
              className="inline-flex gap-2 hover:outline-dashed outline-1"
            >
              Products
              <ChevronDown className="size-6 transition-transform group-hover/dropdown:rotate-180" />
            </Link>
            <ul className="invible group-hover/dropdown:flex group-hover/dropdown:visible group-focus/dropdown:flex group-focus/dropdown:visible absolute top-[100%] left-0 flex-col invisible items-center list-none border w-40 rounded-md bg-white shadow-lg">
              <li className="w-full">
                <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                  Option 1
                </Link>
              </li>
              <li className="w-full">
                <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                  Option 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="group/dropdown relative">
            <Link
              to="/"
              className="inline-flex gap-2 hover:outline-dashed outline-1"
            >
              Resource
              <ChevronDown className="size-6 transition-transform group-hover/dropdown:rotate-180" />
            </Link>
            <ul className="invible group-hover/dropdown:flex group-hover/dropdown:visible group-focus/dropdown:flex group-focus/dropdown:visible absolute top-[100%] left-0 flex-col invisible items-center list-none border w-40 rounded-md bg-white shadow-lg">
              <li className="w-full">
                <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                  Option 1
                </Link>
              </li>
              <li className="w-full">
                <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                  Option 2
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Pricing" className="hover:outline-dashed outline-1">
              Pricing
            </Link>
          </li>
        </ul>
        <div className="group/profileMenu relative hidden md:inline-flex ml-auto">
          <Link
            to="/profile"
            className="w-10 h-10 rounded-full overflow-hidden border hover:outline-dashed outline-1"
          >
            <img
              src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
              alt="user profile"
              className="w-full h-full"
            />
          </Link>
          <ul className="invible group-hover/profileMenu:flex group-hover/profileMenu:visible group-focus/dropdown:flex group-focus/dropdown:visible absolute top-[100%] right-0 flex-col invisible items-center list-none border w-40 rounded-md bg-white shadow-lg">
            <li className="w-full">
              <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                Option 1
              </Link>
            </li>
            <li className="w-full">
              <Link className="block px-2 py-2 hover:bg-gray-200" to="/">
                Option 2
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
