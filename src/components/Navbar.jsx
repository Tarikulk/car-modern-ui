import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className="py-4 border-b border-white/50 md:border-none sticky top-0 z-10 bg-opacity-30 backdrop-blur-md">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 -z-10"></div>

      {/* Navbar Container */}
      <div className="container">
        <div className="flex justify-between items-center md:border border-black/45 md:p-2.5 rounded-xl mx-auto relative">
          {/* Logo Section */}
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-black/45">
            <GiSteeringWheel size={24} className="text-black" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link to="/" className="text-black hover:text-gray-700 transition">
                Home
              </Link>
              <Link to="/about" className="text-black hover:text-gray-700 transition">
                About Us
              </Link>
              <Link to="/cars" className="text-black hover:text-gray-700 transition">
                Our Cars
              </Link>
              <Link to="/services" className="text-black hover:text-gray-700 transition">
                Services
              </Link>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex gap-4 items-center">
            <button className="text-sm text-black hover:text-gray-700 transition">
              Sign In
            </button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              {menu ? (
                <AiOutlineClose size={25} className="text-black cursor-pointer" onClick={handleChange} />
              ) : (
                <RiMenuUnfoldFill size={25} className="text-black cursor-pointer" onClick={handleChange} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Section (from top) */}
      <div
        className={`${
          menu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden flex flex-col absolute bg-primary text-black left-0 top-16 font-semibold text-lg text-center py-8 gap-4 w-full h-auto transition-all duration-300 ease-in-out z-50 backdrop-blur-md`}
      >
        <Link to="/" onClick={handleChange} className="hover:text-primary transition duration-200 ease-linear">
          Home
        </Link>
        <Link to="/about" onClick={handleChange} className="hover:text-primary transition duration-200 ease-linear">
          About Us
        </Link>
        <Link to="/cars" onClick={handleChange} className="hover:text-primary transition duration-200 ease-linear">
          Our Cars
        </Link>
        <Link to="/services" onClick={handleChange} className="hover:text-primary transition duration-200 ease-linear">
          Services
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
