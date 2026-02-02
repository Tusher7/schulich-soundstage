interface Props {
  children: React.ReactNode;
  href: string;
}

const Button = ({ children, href }: Props) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-gray-900 text-black bg-gradient-to-r from-teal-200 to-lime-200
                      hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-300 dark:text-gray-100 
                      dark:bg-gray-900 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-400 
                      focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-lg sm:text-xl lg:text-2xl
                      tracking-wide px-5 py-2.5 mb-2 transition-all duration-200"
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
