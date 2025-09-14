import { Link } from "react-router-dom";
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
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <h1 className="text-lg font-bold">Lara Pelikan</h1>
            </Link>
          </div>

          {/* Meni */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/About"
              className="btn btn-sm gap-2 transition-colors"
            >
              <FileUser className="w-4 h-4" />
              <span className="hidden sm:inline">Življenjepis</span>
            </Link>

            <Link to="/ShowCase" className="btn btn-sm btn-ghost gap-2">
              <Music className="w-5 h-5" />
              <span className="hidden sm:inline">Showcase</span>
            </Link>

            <Link to="/Offering" className="btn btn-sm btn-ghost gap-2">
              <BadgeEuro className="w-5 h-5" />
              <span className="hidden sm:inline">Ponudba</span>
            </Link>

            <Link to="/Contact" className="btn btn-sm btn-ghost gap-2">
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">Kontakt</span>
            </Link>
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
        <Link
          to="/About"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-600 transition"
          onClick={() => setOpen(false)}
        >
          <FileUser className="w-5 h-5" />
          Življenjepis
        </Link>
      </li>
      <li>
        <Link
          to="/ShowCase"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-600 transition"
          onClick={() => setOpen(false)}
        >
          <Music className="w-5 h-5" />
          Showcase
        </Link>
      </li>
      <li>
        <Link
          to="/Offering"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-600 transition"
          onClick={() => setOpen(false)}
        >
          <BadgeEuro className="w-5 h-5" />
          Ponudba
        </Link>
      </li>
      <li>
        <Link
          to="/Contact"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-600 transition"
          onClick={() => setOpen(false)}
        >
          <Mail className="w-5 h-5" />
          Kontakt
        </Link>
      </li>
    </ul>
  </div>
)}

      </div>
    </header>
  );
};
export default Navbar;