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
        <Button>
          APPLY FOR MEMBERSHIP!{" "}
          {<MdCardMembership className="inline mb-1 ml-2" />}
        </Button>

        <div className="w-full mx-auto mb-3 mt-12 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            JOIN OUR MAILING LIST!
          </h3>
        </div>
        <Button>
          Subscribe to our NewsLetter{" "}
          {<ImNewspaper className="inline mb-1 ml-2" />}
        </Button>

        <div className="w-full mx-auto mt-12 mb-3 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            WANT TO SPONSOR US?
          </h3>
        </div>
        <Button>
          Sponsorship package {<GrDownload className="inline mb-1 ml-2" />}
        </Button>
      </div>
    </div>
  );
};

export default Apply;
