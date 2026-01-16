interface Props {
  heading: string;
  description: string;
  images: string[];
}

const EventComponent = ({ heading, description, images }: Props) => {
  const shownImages = images.slice(0, 2);
  const isSingle = shownImages.length === 1;

  return (
    <div
      className="
        w-full max-w-6xl mx-auto
        bg-black border border-gray-800
        rounded-lg shadow-lg
        backdrop-blur-lg
        transition-transform duration-300 hover:scale-[1.02]
        overflow-hidden
      "
    >
      {/* Images */}
      <div
        className={`p-6 ${
          isSingle ? "grid grid-cols-1" : "grid grid-cols-1 sm:grid-cols-2 gap-6"
        }`}
      >
        {shownImages.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className={`
              overflow-hidden rounded-lg
              border border-gray-800
              ${isSingle ? "aspect-[21/9]" : "aspect-[16/9]"}
            `}
          >
            <img
              src={src}
              alt={`${heading} image ${idx + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="px-8 pb-8">
        <h3 className="mb-3 text-3xl font-medium text-white text-center">
          {heading}
        </h3>

        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[#BC4A6B] sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventComponent;
