import { NavLink } from "react-router-dom";
import { FileUser, Music, BadgeEuro, Mail, Menu, X} from "lucide-react";
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="bg-base-300 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo / ime */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <h1 className="text-lg font-bold">Lara Pelikan</h1>
            </NavLink>
          </div>

          {/* Meni */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/About"
              className={({ isActive }) =>
              `btn btn-sm gap-2 transition-colors ${
                isActive ? "btn" : "btn-ghost"
              }`
            }
            >
              <FileUser className="w-4 h-4" />
              <span className="hidden sm:inline">Življenjepis</span>
            </NavLink>

            <NavLink to="/ShowCase" className={({ isActive }) =>
              `btn btn-sm gap-2 transition-colors ${
                isActive ? "btn" : "btn-ghost"
              }`
            }>
              <Music className="w-5 h-5" />
              <span className="hidden sm:inline">Showcase</span>
            </NavLink>

            <NavLink to="/Offering" className={({ isActive }) =>
              `btn btn-sm gap-2 transition-colors ${
                isActive ? "btn" : "btn-ghost"
              }`
            }>
              <BadgeEuro className="w-5 h-5" />
              <span className="hidden sm:inline">Ponudba</span>
            </NavLink>

            <NavLink to="/Contact" className={({ isActive }) =>
              `btn btn-sm gap-2 transition-colors ${
                isActive ? "btn" : "btn-ghost"
              }`
            }>
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">Kontakt</span>
            </NavLink>
          </div>

          <button
          className="md:hidden"
          onClick={()=> setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} /> }
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
    </header>
  );
};
export default Navbar;