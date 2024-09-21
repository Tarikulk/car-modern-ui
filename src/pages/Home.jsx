import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Featured from "../components/Home/Featured/Featured";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import OurMission from "../components/Home/Mission/OurMission";
import CarNews from "../components/Home/News/CarNews";
import Footer from "../components/Footer";
import { CallToAction } from "../components/Home/CTA/CTA";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Main Content with Background */}
      <div className="relative pb-20">
        {/* Background Layer */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
 
        <Hero />
        <Featured />
        <WhyUs />
        <OurMission />
        <CarNews />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
};

export default Home;
