import logo from "../assets/soundstage-logo-white.webp";

interface Props {
  isLoaded: Boolean;
  tabSelected: string;
}
const HeroSection = ({ isLoaded, tabSelected }: Props) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 mt-15">
        <h1 className="font-dosis font-light text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          SCHULICH SOUNDSTAGE
        </h1>
      </div>
      <p className="font-dosis font-normal mt-7 text-xl text-center text-neutral-500 max-w-4xl mx-auto">
        At Schulich Soundstage, we empower students from every faculty to grow
        as musicians—hosting workshops, open‑mic nights, and community concerts
        that encourage creativity and connection.
      </p>

      <div className="flex justify-center mt-5">
        <a href="#" className="py-3 px-4 mx-3 border rounded-md bg-[#BC4A6B]">
          Check Out Our Event Calendar!
        </a>
      </div>
      <div
        className={`transition-opacity duration-1000 ${isLoaded && tabSelected ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <div className="flex justify-center">
          <img
            className="rounded-lg w-[48%] mx-2 my-0"
            src={logo}
            alt="Soundstage Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
