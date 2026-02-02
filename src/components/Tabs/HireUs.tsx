import GalleryGrid from "../GalleryGrid";
import { gigsImagesOne } from "../../constants";
import { gigsImagesTwo } from "../../constants";
import { gigsImagesThree } from "../../constants";
import { gigsImagesFour } from "../../constants";
import { PiGuitarBold } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { Reveal } from "../Reveal";
import Button from "../Button";

const HireUs = () => {
  const experienceList = [
    "UCalgary Open House",
    "The Cumming School of Medicine’s Retirement Celebrations",
    "The Schulich School of Engineering’s Annual Christmas Gala",
    "International High School Councillor Networking Event",
    "Engineering Student Society’s Annual Banquet",
    "National Day of Action and Remembrance For Violence Against Women",
    "And many more!",
  ];
  const serviceList = [
    "Instrumental performances of all genres (classical, pop, country, etc.)",
    "Solo performers",
    "Rock, pop, and jazz bands",
    "Acapella groups",
    "Equipment rentals",
    "Sound Technician services",
  ];
  return (
    <div>
      <Reveal>
        <div className="flex justify-center items-center gap-4 mt-10">
          <h1 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-24">
            HIRE US!
          </h1>
          <span className="mt-26">
            <PiGuitarBold className="h-7 w-7 md:h-10 md:w-10 lg:h-15 lg:w-15" />
          </span>
          <span className="mt-16 -ml-7">
            <CiMusicNote1 className="h-5 w-5 md:h-8 md:w-8 lg:h-13 lg:w-13" />
          </span>
          <span className="mt-6 -ml-7">
            <CiMusicNote1 className="h-5 w-5 md:h-8 md:w-8 lg:h-13 lg:w-13" />
          </span>
          <span className="mt-23 -ml-9">
            <CiMusicNote1 className="h-5 w-5 md:h-8 md:w-8 lg:h-13 lg:w-13" />
          </span>
        </div>
        <p className="font-dosis font-normal mt-7 text-xl text-center text-neutral-500 max-w-4xl mx-auto mb-20">
          With experience performing anywhere from galas, networking nights,
          festivals and more - Schulich Soundstage can provide live music for
          any event you might need! Drawing from an auditioned roster of 25
          talented students, we offer a variety of genres, including rock, pop,
          classical, country, jazz, acapella, and many more!
        </p>
      </Reveal>
      <GalleryGrid images={gigsImagesOne} />
      <Reveal>
        <div className="w-full mx-auto mb-3 mt-12 text-center mt-20">
          <h3 className="text-white font-semibold text-lg mb-1">About Us</h3>
        </div>
        <p className="font-dosis font-normal mt-7 text-xl text-center text-neutral-500 max-w-4xl mx-auto mb-20">
          Soundstage is the University of Calgary’s premier student-led music
          club, dedicated to creating opportunities for students to perform and
          connect through music. We host large-scale monthly open mic events,
          offer instrument and audio engineering workshops, and support student
          artists by outsourcing musicians for internal university events and
          external organizations, helping performers gain real-world experience
          both on and off campus.
        </p>
      </Reveal>
      <GalleryGrid images={gigsImagesTwo} />
      <Reveal>
        <div className="w-full mx-auto mb-3 mt-12 text-center mt-20">
          <h3 className="text-white font-semibold text-lg mb-1">
            Our Experience
          </h3>
        </div>
        <div className="font-dosis font-normal mt-7 text-xl text-center text-neutral-500 max-w-4xl mx-auto">
          <p>
            As a student organization, we offer competitive rates while
            maintaining high quality performances. When you choose us, you
            support 25 young student musicians in their interdisciplinary
            journeys and endeavours. We have experience performing at more than
            20 events, including:{" "}
          </p>
          <ul
            className="mt-6 space-y-2 list-disc list-inside text-center
               font-dosis text-xl text-neutral-500 
               max-w-3xl mx-auto mb-20"
          >
            {experienceList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>
      <GalleryGrid images={gigsImagesThree} />
      <Reveal>
        <div className="w-full mx-auto mb-3 mt-20 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            Our Services
          </h3>
        </div>
        <div className="font-dosis font-normal mt-7 text-xl text-center text-neutral-500 max-w-4xl mx-auto">
          <p>
            With such a large roster of performers, our service offerings are
            flexible depending on the needs of your event! We offer everything
            from laidback solo performances, small choirs, and full sized bands.
            While flexible, our services include:{" "}
          </p>
          <ul
            className="mt-6 space-y-2 list-disc list-inside text-center
               font-dosis text-xl text-neutral-500 
               max-w-3xl mx-auto mb-20"
          >
            {serviceList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>
      <GalleryGrid images={gigsImagesFour} />
      <Reveal>
        <p className="font-normal mt-7 text-xl text-center text-neutral-500 max-w-4xl mx-auto mt-20 mb-10">
          Contact us today to book a meeting with our gigs team so we can find
          the service that best fits your needs!
        </p>
        <div className="flex justify-center mt-5">
          <Button>Request a Booking! </Button>
        </div>
      </Reveal>
    </div>
  );
};

export default HireUs;
