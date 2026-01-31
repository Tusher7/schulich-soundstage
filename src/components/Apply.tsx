import { GrDownload } from "react-icons/gr";
import { ImNewspaper } from "react-icons/im";
import { MdCardMembership } from "react-icons/md";

const Apply = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto max-w-lg text-center py-16">
        <div className="w-full mx-auto mb-3 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            JOIN OUR COMMUNITY!
          </h3>
        </div>
        <a
          href="https://forms.gle/5DTUdmwh1nYm8vAe7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 
        focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-lg sm:text-xl lg:text-2xl text-center tracking-wide px-5 py-2.5 text-center mb-2"
        >
          APPLY NOW TO BECOME A MEMBER!{" "}
          {<MdCardMembership className="inline mb-1 ml-2" />}
        </a>

        <div className="w-full mx-auto mb-3 mt-12 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            JOIN OUR MAILING LIST!
          </h3>
        </div>
        <a
          href="https://forms.gle/uqPEQgY5LpUrB9x39"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 
        focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-lg sm:text-xl lg:text-2xl text-center tracking-wide px-5 py-2.5 text-center mb-2"
        >
          Subscribe to our Newsletter{" "}
          {<ImNewspaper className="inline mb-1 ml-2" />}
        </a>

        <div className="w-full mx-auto mt-12 mb-3 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            WANT TO SPONSOR US?
          </h3>
        </div>
        <a
          href="/2026 Schulich Soundstage Sponsorship Package.pdf"
          download
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 
        focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-lg sm:text-xl lg:text-2xl text-center tracking-wide px-5 py-2.5 text-center mb-2"
        >
          Sponsorship package {<GrDownload className="inline mb-1 ml-2" />}
        </a>
      </div>
    </div>
  );
};

export default Apply;
