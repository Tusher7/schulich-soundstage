import EventComponent from "../EventComponent";
import { events } from "../../constants";

const EventsPage = () => {
  return (
    <div>
      <h1 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-24">
        EVENTS
      </h1>

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
    </div>
  );
};

export default EventsPage;



