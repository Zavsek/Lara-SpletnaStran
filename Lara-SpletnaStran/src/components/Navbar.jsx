import { Link } from "react-router-dom";
import { FileUser, Music, BadgeEuro, Mail} from "lucide-react";

const Navbar = () => {
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
          <div className="flex items-center gap-2">
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
              <Mail className="w-5 h-5" /> {/* ⬅️ zamenjan Music → Mail */}
              <span className="hidden sm:inline">Kontakt</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;