import { useState } from "react";
import { Link } from "react-router-dom";
import Resume from "./Resume";

export default function Navbar() {
  const [Navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className=" justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!Navbar)}
              >
                {Navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              Navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-700 text-sm hover:text-gray-300">
                <Link to="/">Home</Link>
              </li>
              <li
                className={`flex-2 justify-self-center pb-1 mt-8 md:block md:pb-0 md:mt-0 ${
                  Navbar ? "hidden" : "hidden"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li className="text-gray-700 text-sm hover:text-gray-300">
                <Link to="/HarshilTomar-Resume" href="#">
                  Resume
                </Link>
              </li>
              <li
                className={`flex-2 justify-self-center pb-1 mt-8 md:block md:pb-0 md:mt-0 ${
                  Navbar ? "hidden" : "hidden"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li className="text-gray-700 text-sm hover:text-gray-300">
                <Link to="/HarshilTomar-Projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
