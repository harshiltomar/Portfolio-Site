import React from "react";
import { useEffect } from "react";

import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Harshil from "../assets/Harshil.jpeg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Resume = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="md:container md:mx-auto flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </header>
      {/*<Link to="/Components/Home" className='fixed px-5 py-4 '>
    <svg className="h-8 w-4 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  <polyline points="9 22 9 12 15 12 15 22" /></svg>
  </Link>*/}
      <div className="body mt-6 max-w-screen-lg md:flex mx-auto">
        <div className="md:w-1/3 p-2">
          <div className=" md:fixed">
            <div className="md:block ">
              <img className="h-20 w-20 mx-auto rounded-lg " src={Harshil} />
              <div className="mb-12 text-center mt-4 justify-center items-left mx-4 text-Inconsolata">
                <h1 className="text-xl text-gray-700 font-bold text-Inconsolata">
                  Harshil Tomar
                </h1>
                <div className="md:text-sm text-gray-600">
                  Software Engineer
                </div>
                <div className="text-gray-600 md:hidden mt-1">
                  (harshiltomar20@gmail.com)
                </div>
              </div>
            </div>
            <div className="mx-4 my-4 hidden md:block">
              <div className="my-5 text-sm text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z" />
                    <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
                  </svg>
                </div>
                harshiltomar20@gmail.com
              </div>
              <div className="my-5 text-sm text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    className="text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z" />
                    <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z" />
                  </svg>
                </div>
                New Delhi, Delhi
              </div>
              <a
                href="https://www.linkedin.com/in/harshiltomar/"
                className="my-5  text-sm text-gray-600 flex"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" />
                  </svg>
                </div>
                LinkedIn
              </a>
              <a
                href="https://drive.google.com/file/d/18GAa47epaP5ehKytlNzG8OnvOszcLF1R/view?usp=sharing"
                className="my-5  text-sm text-gray-600 flex"
              >
                <div className="mr-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3934/3934118.png"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    {/* <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" /> */}
                  </img>
                </div>
                Resume Link
              </a>
            </div>
            <div className="mx-4 hidden md:block">
              <Link
                to="/NandiniJaryal-Projects"
                className="inline-flex items-center justify-center bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-blue active:bg-gray-700 transition duration-150 ease-in-out w-full py-2 text-white rounded text-sm"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-2 w-full sm:border-l-2">
          <div className="mx-4 mb-6">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Summary</h1>
            <p className="text-md">
              I enjoy turning abstract ideas into tangible solutions through
              coding. Forever on the hunt for the most streamlined solutions to
              problems, while keeping the elegance of code a top priority.
            </p>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Education</h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Maharaja Surajamal Institute of Technology ( GPA: 8.8 )
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      B.Tech Information Technology
                    </small>
                  </div>
                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "#666" }}
                    />
                    <small className="text-sm text-gray-600">
                      Aug 2020 - July 2024
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">
              Experience
            </h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Software Engineer
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      NewGen Software (Noida)
                    </small>
                  </div>

                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "#666" }}
                    />
                    <small className="text-sm text-gray-600">
                      Jan 2024 - Present
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <small>
                      <ul className="list-disc">
                        <li>Part of the Central Implementation Group</li>
                        <li>
                          Worked on iforms, custom hooks with helpdesk
                          attachment and Troubleshoot module using Java and
                          Restful Api Architecture
                        </li>
                        <li>
                          Successfully deployed programs, actively evaluated
                          user feedback with Javascipt custom Validation
                        </li>
                      </ul>
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Front End Designer
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">Spotline</small>
                  </div>

                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "#666" }}
                    />
                    <small className="text-sm text-gray-600">
                      Aug 2022 – Feb 2023
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <small>
                      <ul className="list-disc">
                        <li>
                          Contributed to the development of Spotline Web and
                          Mobile Application (in Flutter) using Dart, HTML, CSS
                          and Java-script which has 10K+ Downloads
                        </li>
                        <li>
                          Built 30+ wire-frames for the application prototype
                          from scratch as well as did User-Research and UI
                          Routing
                        </li>
                        <li>
                          Created an net UI design of and coded 10+ screens with
                          href Navigation
                        </li>
                      </ul>
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  UI UX Designer
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">Fiverr</small>
                  </div>
                  <div className="">
                    <i className="bx bx-calendar" style={{ color: "#666" }} />
                    <small className="text-sm text-gray-600">
                      Jan 2020 - Mar 2020
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <small>
                      <ul className="list-disc">
                        <li>
                          Curated a Low Fedility User Interface, under the
                          guidance of various SAAS-based clients
                        </li>
                        <li>
                          Used Figma and Sketchbook to fine-tune the UI design
                          and Routing
                        </li>
                        <li>
                          Worked with 75+ clients globally ranging from Startup
                          to Full-Fledges Companies while maintaining 4.9 rating
                        </li>
                      </ul>
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Skill</h1>
            <ul>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  C++
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  ReactJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  ExpressJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  NodeJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  MongoDB
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Data Structures
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Web Development
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Database Design
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  MySql
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Object Oriented Programming
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Operating Systems
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Code Principles
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Design Pattern
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Tailwind css/Bootstrap
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Sass/Scss
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Networking
                </span>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">
              Co-Cirriculars:
            </h1>
            <ul className="list-disc text-md">
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Recieved Letter of Recommendation from MSIT, IPU
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Awarded Outstanding Achievement Award for Contribution to
                      Mark-ED
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="mt-auto bottom-0 z-50 flex flex-cols justify-center items-center">
        <div className="xl:max-w-[1280px] w-screen flex flex-cols ">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Resume;
