import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Nav = ({ toggleTheme, dark }) => {
  return (
    <nav className="py-6 dark:bg-darkBlue dark:text-white dark:border-none border-b-2 h-20 ">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold lg:text-xl">Where in the world?</h1>
        <button className="flex gap-2 items-center" onClick={() => toggleTheme()}>
          {dark ? (
            <>
              <FaRegSun />
              <span >Light Mode</span>
            </>
          ) : (
            <>
              <FaRegMoon />
              <span >
                Dark Mode
              </span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
