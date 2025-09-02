import { useState } from "react";
import HomePage from "./components/Tabs/HomePage";
import About from "./components/Tabs/About";
import NavBar from "./components/NavBar";
import ExecutiveTeam from "./components/Tabs/ExecutiveTeam";

function App() {
  const [tabSelected, setTabSelected] = useState("home");
  const setTabSelection = (tab: string) => {
    setTabSelected(tab);
  };
  return (
    <>
      <div className="pt-16 md:pt-20 bg-[#BC4A6B] -mb-20"></div>
      <NavBar setTabSelection={setTabSelection} />
      {tabSelected === "home" && <HomePage />}
      {tabSelected === "about" && <About />}
      {tabSelected === "executiveTeam" && <ExecutiveTeam />}
    </>
  );
}

export default App;
