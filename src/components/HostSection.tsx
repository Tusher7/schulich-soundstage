import { hostItems } from "../constants";

const HostSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-xl font-medium px-2 py-1 uppercase">
          {" "}
          WE HOST
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          A diverse lineup of experiences
        </h2>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {hostItems.map((item, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-600 justify-center items-center rounded-full">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h5 className="mt-1 mb-6 text-xl ">{item.label}</h5>
                  <p className="text-md mb-20 text-neutral-500 ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostSection;
