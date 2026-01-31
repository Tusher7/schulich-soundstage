import { FaRegCopyright } from "react-icons/fa";
import { footerItems } from "../constants";
const Footer = () => {
  return (
    <footer className="w-full mt-20 pt-10 pb-10 px-6 bg-[#242738]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-15 py-6 lg:flex-row items-center justify-between">
          <div className="flex items-center justify-center gap-5">
            {footerItems.map((item) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
                href={item.href}
              >
                {
                  <item.icon className="h-7 w-7 md:h-10 md:w-10 lg:h-15 lg:w-15" />
                }
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-white justify-center mt-6">
            <FaRegCopyright />
            <span>2026 Schulich Soundstage. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
