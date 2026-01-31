import { useEffect, useState } from "react";
import HomePage from "./components/Tabs/HomePage";
import NavBar from "./components/NavBar";
import ExecutiveTeam from "./components/Tabs/ExecutiveTeam";
import EventsPage from "./components/Tabs/EventsPage";
import Footer from "./components/Footer";
import Workshops from "./components/Tabs/Workshops";
import Radio from "./components/Tabs/Radio";
import Merch from "./components/Tabs/Merch";
import HireUs from "./components/Tabs/HireUs";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, []);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tabSelected, setTabSelected] = useState("home");
  const setTabSelection = (tab: string) => {
    setTabSelected(tab);
  };
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`transition-opacity duration-400 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <div className="pt-16 md:pt-20 bg-[#BC4A6B] -mb-20"></div>
        <NavBar setTabSelection={setTabSelection} />
        {tabSelected === "home" && (
          <HomePage
            tabSelected={tabSelected}
            setTabSelection={setTabSelected}
            isLoaded={isLoaded}
          />
        )}
        {tabSelected === "executiveTeam" && <ExecutiveTeam />}
        {tabSelected === "events" && <EventsPage />}
        {tabSelected === "workshops" && <Workshops />}
        {tabSelected === "radio" && <Radio />}
        {tabSelected === "merch" && <Merch />}
        {tabSelected === "hire" && <HireUs />}

        <Footer />
      </div>
    </>
  );
}

export default App;
