import EventComponent from "../EventComponent";
import { events } from "../../constants";
import { Reveal } from "../Reveal";

const EventsPage = () => {
  return (
    <div>
      <Reveal>
        <div className="flex justify-center items-center gap-4 mt-10">
          <h1 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-24">
            EVENTS
          </h1>
        </div>
      </Reveal>

      <div className="mt-12 space-y-16">
        {events.map((event) => (
          <EventComponent
            key={event.heading}
            heading={event.heading}
            description={event.description}
            images={event.images}
          />
        ))}
      </div>
      <div>
        <div className="flex justify-center items-center gap-4 mt-25 mb-10">
          <h1 className="font-dosis font-light text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            February Calendar
          </h1>
        </div>
        <section id="calendar">
          <Reveal>
            <div className="grid lg:grid-cols-2 flex gap-4 mb-35 p-4 items-stretch">
              <img src="/assets/calendar/feb-calendar.webp" />
              <img src="/assets/calendar/feb-summary.webp" />
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default EventsPage;
