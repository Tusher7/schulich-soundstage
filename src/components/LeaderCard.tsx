interface Props {
  name: string;
  heading: string;
  description: string;
  headshot: string;
}

const LeaderCard = ({ name, heading, description, headshot }: Props) => {
  return (
    <div className="h-full">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 shadow-sm md:flex-row w-full h-full min-h-[20rem] md:min-h-[24rem] rounded-lg overflow-hidden hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/70 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full md:w-1/2 h-64 md:h-full rounded-none flex-shrink-0"
          src={headshot}
          alt={`${name} headshot`}
        />
        <div className="flex flex-col justify-between p-4 md:w-1/2 leading-normal backdrop-blur-lg">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default LeaderCard;
