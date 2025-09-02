import React from "react";
import NavBar from "../NavBar";
import HeroSection from "../HeroSection";
import Events from "../Events";
import ClubStats from "../ClubStats";
import Reviews from "../Reviews";
import Executives from "./ExecutiveTeam";
import Footer from "../Footer";
import HostSection from "../HostSection";

const HomePage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <HostSection />
      </div>
      <Events />
      <ClubStats />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Reviews />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
