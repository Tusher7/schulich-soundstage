interface Props {
  name: string;
  heading: string;
  description: string;
  headshot: string;
  href?: string;
}

const LeaderCard = ({ name, heading, description, headshot, href }: Props) => {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center bg-white border border-gray-200 shadow-sm md:flex-row w-full h-full min-h-[20rem] md:min-h-[24rem] rounded-lg overflow-hidden dark:border-gray-700 dark:bg-gray-900">
        <img
          className="object-cover w-full md:w-1/2 h-64 md:h-full rounded-none flex-shrink-0"
          src={headshot}
          alt={`${name} headshot`}
        />
        <div className="flex flex-col justify-between p-4 md:w-1/2 leading-normal backdrop-blur-lg">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {heading}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
          {href && (
            <div className="mt-4 md:mt-6">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 
            text-sm font-medium text-center text-white 
            bg-[#BC4A6B] rounded-lg hover:bg-red-800 focus:ring-4 
            focus:outline-none focus:ring-blue-500 dark:bg-[#BC4A6B] 
            dark:hover:bg-red-700 dark:focus:ring-blue-500              "
              >
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
