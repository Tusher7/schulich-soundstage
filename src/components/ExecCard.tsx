import React from "react";

const ExecCard = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mt-2 w-24 h-24 mb-3 rounded-full shadow-lg object-cover object-top"
          src="src/assets/exec-headshots/headshoy 2.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Tusher
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          VP Workshops
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
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
