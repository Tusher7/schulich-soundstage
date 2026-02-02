import { GrDownload } from "react-icons/gr";
import { ImNewspaper } from "react-icons/im";
import { MdCardMembership } from "react-icons/md";
import Button from "./Button";

const Apply = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto max-w-lg text-center py-16">
        <div className="w-full mx-auto mb-3 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            JOIN OUR COMMUNITY!
          </h3>
        </div>
        <Button href="https://forms.gle/5DTUdmwh1nYm8vAe7">
          APPLY FOR MEMBERSHIP!{" "}
          {<MdCardMembership className="inline mb-1 ml-2" />}
        </Button>

        <div className="w-full mx-auto mb-3 mt-12 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            JOIN OUR MAILING LIST!
          </h3>
        </div>
        <Button href="https://forms.gle/uqPEQgY5LpUrB9x39">
          Subscribe to our NewsLetter{" "}
          {<ImNewspaper className="inline mb-1 ml-2" />}
        </Button>

        <div className="w-full mx-auto mt-12 mb-3 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            WANT TO SPONSOR US?
          </h3>
        </div>
        <a
          href="/2026 Schulich Soundstage Sponsorship Package.pdf"
          download
          className="dark:text-gray-900 text-black bg-gradient-to-r from-teal-200 to-lime-200
                      hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-300 dark:text-gray-100 
                      dark:bg-gray-900 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-400 
                      focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-lg sm:text-xl lg:text-2xl
                      tracking-wide px-5 py-2.5 mb-2 transition-all duration-200"
        >
          Sponsorship package {<GrDownload className="inline mb-1 ml-2" />}
        </a>
      </div>
    </div>
  );
};

export default Apply;
