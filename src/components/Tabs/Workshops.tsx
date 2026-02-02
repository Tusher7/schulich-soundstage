import { workshopTopics } from "../../constants";
import EventComponent from "../EventComponent";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Reveal } from "../Reveal";
import Button from "../Button";

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

        <div className="flex justify-center mt-4 -mb-2">
          <Button>
            Sign up for Workshops!{" "}
            {<HiArrowNarrowRight className="inline mb-1 ml-2" />}
          </Button>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 p-4 mt-10 mb-20">
        {workshopTopics.map((topic) => (
          <EventComponent
            heading={topic.heading}
            description={topic.description}
            images={topic.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Workshops;
