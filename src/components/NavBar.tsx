import logo from "../assets/soundstage-logo-white-no-text.webp";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

interface Props {
  setTabSelection: (tab: string) => void;
}

const NavBar = ({ setTabSelection }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 py-3 backdrop-blur-lg border-b border-white-700 w-full">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <a
                className="flex items-center"
                href="#"
                onClick={(e) => {
                  e.preventDefault;
                  setTabSelection("home");
                }}
              >
                <div className="bg-black rounded-xl flex items-center h-15 w-15">
                  <img className="h-15 w-15 mr-2" src={logo} alt="logo" />
                </div>
                <span className="ml-2 text-xl tracking-tight">
                  Schulich Soundstage
                </span>
              </a>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    onClick={(e) => {
                      e.preventDefault;
                      setTabSelection(item.tab);
                    }}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavBar}>
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <Reveal>
                <ul>
                  {navItems.map((item, index) => (
                    <li className="py-4" key={index}>
                      <a
                        onClick={(e) => {
                          e.preventDefault;
                          setTabSelection(item.tab);
                          toggleNavBar();
                        }}
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
