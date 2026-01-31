import { workshopTopics } from "../../constants";
import EventComponent from "../EventComponent";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Reveal } from "../Reveal";

const Workshops = () => {
  return (
    <div>
      <Reveal>
        <div className="flex justify-center items-center gap-4 mt-10">
          <h1 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-24">
            Music Workshops
          </h1>
        </div>
        <p className="font-dosis font-normal mt-7 text-xl text-center text-neutral-500 max-w-4xl mx-auto">
          We offer free weekly music workshops in collaboration with the
          Schulich School of Engineering, which are open to all University of
          Calgary students, staff, and faculty. Check Out Our Upcoming Workshops
          on the calendar!
        </p>

        <div className="flex justify-center mt-4 -mb-11">
          <a
            href="https://schulich.libcal.com/calendar?cid=8318&t=d&d=0000-00-00&cal=8318&inc=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 
              focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-lg sm:text-xl lg:text-2xl text-center tracking-wide px-5 py-2.5 text-center mb-2"
          >
            Sign up for Upcoming Workshops!{" "}
            {<HiArrowNarrowRight className="inline mb-1 ml-2" />}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 p-4 mt-10 mb-20">
          {workshopTopics.map((topic) => (
            <EventComponent
              heading={topic.heading}
              description={topic.description}
              images={topic.images}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Workshops;
