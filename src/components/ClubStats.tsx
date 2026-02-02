import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../constants";

const ClubStats = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
      <section
        ref={ref}
        className="bg-white-900 py-16 px-4 transition-colors duration-300"
      >
        <div className="w-full mx-auto mb-12 text-center bg-red-900">
          <h3 className="text-white font-semibold text-2xl mb-1">
            What We've Built Together!
          </h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((item) => (
            <div key={item.value}>
              <div className="text-3xl bg-[#BC4A6B] px-6 py-3 rounded-full font-semibold text-white shadow-sm">
                {inView ? <CountUp end={item.value} duration={2.5} /> : 0} +
              </div>
              <div className="text-red-100 mt-2 text-md tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ClubStats;
