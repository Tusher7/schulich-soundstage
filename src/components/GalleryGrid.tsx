type ImageItem = {
  src: string;
  spanCol: number;
  spanRow: number;
};
interface Props {
  images: ImageItem[];
}
const GalleryGrid = ({ images }: Props) => {
  const colSpanMap: { [key: number]: string } = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
  };
  const rowSpanMap: { [key: number]: string } = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
  };
  return (
    <div>
      <div className="w-full grid grid-cols-5 mt-10 gap-1.5 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={"Event Picture"}
            className={`w-full h-full object-cover ${
              colSpanMap[image.spanCol]
            } ${
              rowSpanMap[image.spanRow]
            } rounded-sm hover:blur-md transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
