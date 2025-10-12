import { NavLink } from "react-router-dom";
import { FileUser, Music, BadgeEuro, Mail, Menu, X } from "lucide-react";
import { GiMusicalScore } from "react-icons/gi";
import { BiMusic } from "react-icons/bi";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/5  border-b-gray-200 fixed w-full top-0 z-40 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo / ime */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="flex items-center gap-2.5 hover:opacity-90 transition-all"
            >
              <h1 className="text-lg font-bold font-primary group ">
                Lara Pelikan{" "}
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-300/80"></span>
              </h1>
            </NavLink>
          </div>

          {/* Meni */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `group gap-2 p-2 rounded-sm transition-colors flex flex-col items-start bg-white/20 ${
                  isActive ? "underline  decoration-red-300/80" : ""
                }`
              }
            >
              <div className="flex items-center gap-2">
                <GiMusicalScore size={30} />
                <span className="hidden sm:inline text-xl font-primary font-thin">
                  Življenjepis
                </span>
              </div>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-300/80 w-full origin-left"></span>
            </NavLink>

            <NavLink
              to="/Showcase"
              className={({ isActive }) =>
                `group gap-2 p-2 rounded-sm transition-colors flex flex-col items-start bg-white/20 ${
                  isActive ? "underline  decoration-red-300/80" : ""
                }`
              }
            >
              <div className="flex items-center gap-2">
                <BiMusic size={25} />
                <span className="hidden sm:inline text-xl font-primary font-thin">
                  Showcase
                </span>
              </div>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-300/80 w-full origin-left"></span>
            </NavLink>

            <NavLink
              to="/Offering"
              className={({ isActive }) =>
                `group gap-2 p-2 rounded-sm transition-colors flex flex-col items-start bg-white/20 ${
                  isActive ? "underline  decoration-red-300/80" : ""
                }`
              }
            >
              <div className="flex items-center gap-2">
                <RiMoneyEuroCircleLine size={25} />
                <span className="hidden sm:inline text-xl font-primary font-thin">
                  Ponudba
                </span>
              </div>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-300/80 w-full origin-left"></span>
            </NavLink>

            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `group gap-2 p-2 rounded-sm transition-colors flex flex-col items-start bg-white/20 backdrop-blur-2xl ${
                  isActive ? "underline  decoration-red-300/80" : ""
                }`
              }
            >
              <div className="flex items-center gap-2">
                <AiOutlineMail size={25} />
                <span className="hidden sm:inline text-xl font-primary font-thin">
                  Ponudba
                </span>
              </div>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-300/80 w-full origin-left"></span>
            </NavLink>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-amber-700 shadow-lg rounded-b-2xl animate-fade-in">
            <ul className="flex flex-col gap-2 px-4 py-4 text-lg font-medium text-white">
              <li>
                <NavLink
                  to="/About"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-600 transition"
                  onClick={() => setOpen(false)}
                >
                  <FileUser className="w-5 h-5" />
                  Življenjepis
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ShowCase"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-600 transition"
                  onClick={() => setOpen(false)}
                >
                  <Music className="w-5 h-5" />
                  Showcase
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Offering"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-600 transition"
                  onClick={() => setOpen(false)}
                >
                  <BadgeEuro className="w-5 h-5" />
                  Ponudba
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-600 transition"
                  onClick={() => setOpen(false)}
                >
                  <Mail className="w-5 h-5" />
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-[95%] h-0.5 bg-blue-300/20 justify-center items-center m-auto rounded-t-4xl" />
    </header>
  );
};
export default Navbar;
