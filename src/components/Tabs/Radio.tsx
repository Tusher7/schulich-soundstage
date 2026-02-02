import { IoIosRadio } from "react-icons/io";
import { HiArrowNarrowRight } from "react-icons/hi";
import GalleryGrid from "../GalleryGrid";
import { radioImages } from "../../constants";
import { Reveal } from "../Reveal";
import Button from "../Button";

const Radio = () => {
  return (
    <div>
      <Reveal>
        <div className="flex justify-center items-center gap-4 mt-10">
          <h1 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-24">
            Radio
          </h1>
          <span className="mt-26">
            {<IoIosRadio className="h-7 w-7 md:h-10 md:w-10 lg:h-15 lg:w-15" />}
          </span>
        </div>
        <p className="font-dosis font-normal mt-7 text-xl text-center text-neutral-500 max-w-4xl mx-auto">
          Soundstage Offstage on CJSW 90.9 FM brings the heartbeat of campus
          music straight to your speakers. Every Thursday at 10 AM, hosts Fatima
          Jarid and Erin Rose Ealing spotlight emerging artists, raw
          performances, and the stories behind the sound. Along the way, they
          share their own fun, chaotic, and very real behind‑the‑scenes moments
          giving listeners a front‑row seat to the personalities behind the mic.
          From bedroom producers to campus bands, this is where Calgary’s next
          wave gets loud. Tune in, turn up, and step offstage with us.
        </p>
        <div className="flex justify-center mt-10">
          <Button href="https://cjsw.com/program/soundstage-offstage/?utm_source=copilot.com">
            Check out our episodes!{" "}
            {<HiArrowNarrowRight className="inline mb-1 ml-2" />}
          </Button>
        </div>
        <GalleryGrid images={radioImages} />
        <div className="w-full mx-auto mt-12 mb-12 text-center">
          <h3 className="text-white font-semibold text-lg mb-1">
            Want to be a guest on our show?
          </h3>
        </div>
        <div className="flex justify-center mt-5">
          <Button href="https://forms.gle/94b1FiDe7tJr7thH7">
            Request to be a guest!{" "}
            {<HiArrowNarrowRight className="inline mb-1 ml-2" />}
          </Button>
        </div>
      </Reveal>
    </div>
  );
};

export default Radio;
