import GalleryGrid from "./GalleryGrid";
import { images } from "../constants";
import { Reveal } from "./Reveal";
const Events = () => {
  return (
    <>
      <Reveal>
        <section id="gallery">
          <h3 className="text-center text-3xl font-medium mt-10 mb-15">
            YOUR CAMPUS MUSIC SCENE
          </h3>
        </section>
      </Reveal>
      <GalleryGrid images={images} />
    </>
  );
};

export default Events;
