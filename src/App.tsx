import { Calendar } from "lucide-react";
import ClubStats from "./components/ClubStats";
import Events from "./components/Events";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HostSection from "./components/HostSection";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import Executives from "./components/Executives";

function App() {
  return (
    <>
      <div className="pt-16 md:pt-20 bg-[#BC4A6B] -mb-20"></div>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <HostSection />
      </div>
      <Events />
      <ClubStats />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Reviews />
      </div>
      <Executives></Executives>

      <Footer />
    </>
  );
}

export default App;
