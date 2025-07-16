import { images } from "../constants";

const MasonryGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto py-10 md:py-20 gap-4">
      {images.map((source, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img src={source} className=" block w-full object-cover rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
