import { useState } from "react";
import HomePage from "./components/Tabs/HomePage";
import About from "./components/Tabs/About";
import Executives from "./components/Tabs/Executives";
import NavBar from "./components/NavBar";

function App() {
  const [tabSelected, setTabSelected] = useState("home");
  const setTabSelection = (tab: string) => {
    setTabSelected(tab);
  };
  return (
    <>
      <div className="pt-16 md:pt-20 bg-[#BC4A6B] -mb-20"></div>
      <NavBar tabSelected={tabSelected} setTabSelection={setTabSelection} />
      {tabSelected === "home" && <HomePage />}
      {tabSelected === "about" && <About />}
      {tabSelected === "execs" && <Executives />}
    </>
  );
}

export default App;
