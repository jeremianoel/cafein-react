import logo from "../assets/cafein.png";
import { Link } from "react-router-dom";
import { HiMenu  } from "react-icons/hi";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = (
  <>
    <li>
      <Link to="/about-us" onClick={() => setMenuOpen(false)} className="block px-5 py-2 text-xl duration-200 rounded-lg hover:text-white text-amber-900 hover:bg-amber-900">About</Link>
    </li>
    <li>
      <Link to="/menu" onClick={() => setMenuOpen(false)} className="block px-5 py-2 text-xl duration-200 rounded-lg hover:text-white text-amber-900 hover:bg-amber-900">Menu</Link>
    </li>
    <li>
      <Link to="/blogs" onClick={() => setMenuOpen(false)} className="block px-5 py-2 text-xl duration-200 rounded-lg hover:text-white text-amber-900 hover:bg-amber-900">Blogs</Link>
    </li>
  </>
);


  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center w-full py-1 overflow-x-hidden bg-white shadow-md sm:px-10">
      <div className="flex items-center justify-between w-full px-5 py-3 mx-auto md:px-20">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            className="w-32 my-4 ml-4 duration-200 cursor-pointer sm:w-32 sm:ml-12 hover:scale-110"
            />

        </Link>
        <ul className="items-center w-[40%] rounded-md px-10 bg-white justify-between hidden text-lg md:flex">{navItems}</ul>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`${menuOpen ? 'border-2 border-amber-900 w-6 h-6 rounded-full grid place-items-center bg-white' : ''}`}>
            {menuOpen ? (
              <MdKeyboardArrowRight  className="size-5 text-amber-900" />
            ) : (
              <HiMenu className="size-8 text-amber-900" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <ul className="py-1 mx-4 text-lg rounded-md bg-gray-50 md:hidden">
          {navItems}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

