import { Menu, X } from "lucide-react";
import { useState } from "react";
// import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <Link
              to="/"
              className="text-xl font-bold tracking-tight  bg-gradient-to-r from-[#26b170] to-[#009dd1] text-transparent bg-clip-text"
            >
              NaviSutra
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="/demo" className="py-2 px-3 border rounded-md">
              Get Demo
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <NavLink a={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="/demo" className="py-2 px-3 border rounded-md">
                Get Started Today
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
