import MasonryGrid from "./MasonryGrid";

const Events = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-xl font-medium px-2 py-1 uppercase">
          EVENTS
        </span>

        <MasonryGrid />
      </div>
    </div>
  );
};

export default Events;
