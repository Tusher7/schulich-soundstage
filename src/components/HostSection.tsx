import { hostItems } from "../constants";
import HostInfoCard from "./HostInfoCard";
import { Reveal } from "./Reveal";

interface Props {
  setTabSelection: (tab: string) => void;
}
const HostSection = ({ setTabSelection }: Props) => {
  return (
    <>
      <h3 className="text-center text-3xl font-medium">
        EXPLORE OUR ACTIVITIES
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {hostItems.map((item) => (
          <HostInfoCard
            tab={item.tab}
            setTabSelection={setTabSelection}
            key={item.label}
            title={item.label}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default HostSection;
