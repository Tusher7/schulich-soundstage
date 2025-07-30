import CountUp from "react-countup";

const CommunityStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-10 bg-gray-900 text-white">
      <div className="rounded-full bg-green-900">
        <h2 className="text-4xl font-bold">
          <CountUp end={85} duration={2.5} /> +
        </h2>
        <p className="text-lg mt-2">Members</p>
      </div>
      <div>
        <h2>
          {" "}
          <CountUp end={99} duration={2.5} /> %
        </h2>
        <p>Satisfaction</p>
      </div>
      <div>
        <h2>
          {" "}
          <CountUp end={200} duration={2.5} /> +
        </h2>
        <p>Workshops held</p>
      </div>
      <div>
        <h2>
          {" "}
          <CountUp end={200} duration={2.5} /> +
        </h2>
        <p>Radio episodes</p>
      </div>
    </div>
  );
};

export default CommunityStats;
