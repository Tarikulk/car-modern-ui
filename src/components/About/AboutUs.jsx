import React from "react";
import Vision from "./Vision";
import Approch from "./Approch";

const AboutUs = () => {
  return (
   <div className="relative pb-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
     <div className="container pt-24">
      {/* Background Layer */}

      <div>
        <h1 className="font-bold text-4xl text-center">
          About <span className="text-primary">US</span>
        </h1>
      </div>

      <Vision />
      <Approch />
    </div>
   </div>
  );
};

export default AboutUs;
