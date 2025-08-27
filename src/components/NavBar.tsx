import logo from "../assets/soundstage-logo-white-no-text.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface Props {
  tabSelected: string;
  setTabSelection: (tab: string) => void;
}

const NavBar = ({ tabSelected, setTabSelection }: Props) => {
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
              <div className="bg-black rounded-xl flex items-center h-15 w-15">
                <img className="h-15 w-15 mr-2" src={logo} alt="logo" />
              </div>
              <span className="ml-2 text-xl tracking-tight">
                Schulich Soundstage
              </span>
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
            <div className="hidden lg:flex justify-center space-x-12 item-center">
              <a
                href="#"
                className="font-bold py-2 px-3 border rounded-md bg-black"
              >
                {" "}
                APPLY!{" "}
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavBar}>
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((items, index) => (
                  <li className="py-4" key={index}>
                    <a href={items.href}>{items.label}</a>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="py-2 mt-10 mr-11 px-3 border rounded-md bg-gradient-to-r to-gray-800"
              >
                Apply
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
