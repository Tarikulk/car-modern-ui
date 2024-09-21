import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-0 top-0 h-[300px] w-[300px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5 relative z-10">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-2xl pb-4 text-black">WheelsDeal</h1>
          <p className="mb-2 text-sm text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem
            ea alias labore voluptatem sed assumenda, ipsum maxime ratione ipsa?
          </p>
        </div>

        {/* Page Links */}
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0 text-black">
            Page Links
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link to="/about" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              About Us
            </Link>
            <Link to="/cars" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              Our Cars
            </Link>
            <Link to="/services" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              Services
            </Link>
          </div>
        </div>

        {/* Used Cars for Sale */}
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0 text-black">
            Used Cars for Sale
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link to="/" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              Toyota Camry
            </Link>
            <Link to="/" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              Chevrolet Corvette
            </Link>
            <Link to="/" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              Volkswagen Golf
            </Link>
            <Link to="/" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              Nissan Rogue
            </Link>
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0 text-black">
            Learn More
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link to="/" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              User-friendly
            </Link>
            <Link to="/" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              Search and Filters
            </Link>
            <Link to="/" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              Secure Payment
            </Link>
            <Link to="/" className="text-black hover:translate-x-3 transition duration-200 ease-linear">
              Geolocation Services
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 relative z-10">
        <p className="text-center text-black">
          © copyright developed by
          <span className="text-primary font-semibold mx-2">champion programmers</span>
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
