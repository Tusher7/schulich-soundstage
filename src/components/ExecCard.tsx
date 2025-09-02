interface Props {
  name: string;
  role: string;
  link: string;
  headshot: string;
}

const ExecCard = ({ name, role, link, headshot }: Props) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700 backdrop-blur-lg transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mt-2 w-24 h-24 mb-3 rounded-full shadow-lg object-cover object-top"
          src={`${headshot}`}
          alt={`${name} image`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
        <div className="flex mt-4 md:mt-6">
          <a
            href={`${link}`}
            className="inline-flex items-center px-4 py-2 
            text-sm font-medium text-center text-white 
            bg-[#BC4A6B] rounded-lg hover:bg-red-800 focus:ring-4 
            focus:outline-none focus:ring-blue-500 dark:bg-[#BC4A6B] 
            dark:hover:bg-red-700 dark:focus:ring-blue-500              "
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExecCard;
