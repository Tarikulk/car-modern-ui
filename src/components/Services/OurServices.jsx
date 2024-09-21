import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import ServiceCards from "./ServiceCards";

const OurServices = () => {
  const icon1 = <GiCarWheel className="text-primary mx-auto" size={48} />;
  const icon2 = <SiGoogleearthengine className="text-primary mx-auto" size={48} />;
  const icon3 = <MdDesignServices className="text-primary mx-auto" size={48} />;
  const icon4 = <IoSettings className="text-primary mx-auto" size={48} />;
  const icon5 = <FaCar className="text-primary mx-auto" size={48} />;
  const icon6 = <SiCoronaengine className="text-primary mx-auto" size={48} />;

  return (
    <div className="relative pb-20">
      <div className="container pt-24">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-primary">Services</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <ServiceCards icon={icon1} title="Tires & Wheels" />
        <ServiceCards icon={icon2} title="Exhaust System" />
        <ServiceCards icon={icon3} title="Cars Maintenance" />
        <ServiceCards icon={icon4} title="Brake Repairs" />
        <ServiceCards icon={icon5} title="Body Service" />
        <ServiceCards icon={icon6} title="Engine Services" />
      </div>
    </div>
    </div>
  );
};

export default OurServices;
