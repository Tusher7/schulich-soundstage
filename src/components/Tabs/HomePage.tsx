import HeroSection from "../HeroSection";
import Events from "../Events";
import ClubStats from "../ClubStats";
import HostSection from "../HostSection";
import Apply from "../Apply";
import { Reveal } from "../Reveal";

interface Props {
  setTabSelection: (tab: string) => void;
  isLoaded: Boolean;
  tabSelected: string;
}
const HomePage = ({ setTabSelection, isLoaded, tabSelected }: Props) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Reveal>
          <HeroSection
            setTabSelection={setTabSelection}
            isLoaded={isLoaded}
            tabSelected={tabSelected}
          />
        </Reveal>
        <HostSection />
      </div>

      <Events />
      <Reveal>
        <ClubStats />
      </Reveal>
      <Reveal>
        <Apply />
      </Reveal>
    </div>
  );
};

export default HomePage;
