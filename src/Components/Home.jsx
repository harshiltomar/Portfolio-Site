import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import flower from "../assets/flower.gif";
import coding from "../assets/coding.gif";
import girlcoding from "../assets/girlcoding.gif";
import enjae from "../assets/enjae.jpeg";

const Home = () => {
  return (
    <div className="homepage flex flex-col min-h-screen justify-center align-middle">
      <div
        className="flex flex-col m-5"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="noise" />
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          {/* ABOUT ME CARD */}
          <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-[#af72ff56] rounded-3xl overflow-hidden">
            <div className="h-full  absolute  p-4 md:p-8 flex flex-col justify-start  md:justify-end">
              <img
                className="w-32 h-32 mb-4 rounded-full dark:bg-gray-500 aspect-square"
                src={enjae}
                alt=""
              />

              <h1 className="text-3xl md:text-xl  md:w-4/5 lg:text-5xl font-bold text-white mb-4 lg:mb-5">
                Hi, I'm Harshil Tomar
              </h1>

              <p className=" text-dm md:text-md lg:text-md text-[#ffffffcd] font-semibold">
                Software Engineer✨ Web Developer✨ Lifelong Learner✨
              </p>
            </div>
          </div>
          {/* DOWNLOAD CV CARD */}
          <div
            target="_blank"
            className="text-decoration transition duration-500 ease-in-out scale text-white rounded-3xl flex flex-col col-span-1 relative overflow-hidden aspect-square shadow-sm bg-[#316c3bd3] p-4 justify-center items-center"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white text-[#ffffffaa]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <div className="">
              <Link to="/HarshilTomar-Resume">
                <div className="flex justify-center items-center flex-col">
                  <p className="text-xs md:text-lg uppercase font"></p>

                  <p className="text-4xl md:text-8xl font-bold">📄</p>
                  <p className="text-xs md:text-xl uppercase font-semibold text-center">
                    View CV
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* LINKEDIN BUTTON */}
          <a
            href="https://www.linkedin.com/in/harshiltomar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="flex flex-col justify-center items-center bg-[#49a7ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale transition duration-300 ease-in-out"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
          {/* EMAIL BUTTON */}
          <a
            href="mailto:harshiltomar20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="flex flex-col justify-center items-center bg-[#d0102aad] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale transition duration-300 ease-in-out"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          {/* MYSELF PHOTO CARD
          <img
            src={Nandini}
            className="rounded-3xl flex flex-col col-span-1 relative overflow-hidden aspect-square justify-center items-center"
          /> */}
          {/* GITHUB BUTTON */}
          <a
            href="https://github.com/harshiltomar"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-3xl col-span-2 overflow-hidden cursor-pointer scale transition duration-300 ease-in-out"
          >
            <div className="relative w-full h-full p-4 md:p-8 bg-[#000000eb] z-50">
              <img
                alt=""
                width={498}
                height={280}
                data-nimg={1}
                className="absolute w-full h-full object-cover object-center top-0 left-0 opacity-60"
                srcSet={girlcoding}
                src={girlcoding}
              />
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white text-[#ffffffaa] z-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
              <div className="w-full h-full flex flex-col justify-between z-50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  color="white"
                  className="text-xs md:text-5xl hidden md:flex"
                  style={{ color: "white" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <div className="z-50">
                  <h2 className="text-white text-sm md:text-xl lg:text-3xl font-bold">
                    Github
                  </h2>
                  <p className="text-white text-sm md:text-md lg:text-2xl">
                    My Github profile, where I upload my projects.
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* TWITTER BUTTON */}
          <a
            href="https://twitter.com/Hartdrawss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="flex flex-col justify-center items-center bg-[#171717] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale transition duration-300 ease-in-out"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              height="1em"
              width="1em"
              style={{ color: "white" }}
              viewBox="0 0 512 512"
            >
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                fill="white"
                stroke="#ffffffaa"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/*PROJECT CARD*/}
          <Link
            to="/HarshilTomar-Projects"
            className="relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden scale transition duration-500 ease-in-out"
          >
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white z-10 text-[#ffffffaa]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>

              <div className="w-full h-full absolute top-0 left-0 text-white p-4 md:p-8 z-10 pointer-events-none">
                <h2 className="font-bold text-md md:text-xl lg:text-4xl">
                  Projects
                </h2>
                <p className="font-base text-xs md:text-2xl lg:text-2xl md:w-4/5 lg:w-5/6 lg:mt-4">
                  Here you can find some of my projects I have worked upon.
                </p>
              </div>

              <div className="w-full h-full bg-black absolute">
                <img
                  alt=""
                  loading="lazy"
                  width={480}
                  height={480}
                  decoding="async"
                  data-nimg={1}
                  className="w-full h-full object-cover opacity-60"
                  srcSet={coding}
                  src={coding}
                />
              </div>
            </div>
          </Link>
          {/* TWITTER BUTTON
          <a
            href="https://x.com/ennginx?t=3OcOsCIQG7ThSb8j9L8kXA&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="flex flex-col justify-center items-center bg-[#171717] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale transition duration-300 ease-in-out"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              height="1em"
              width="1em"
              style={{ color: "white" }}
              viewBox="0 0 512 512"
            >
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                fill="white"
                stroke="#ffffffaa"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </a> */}
          {/* INSTAGRAM BUTTON
          <a
            href="https://instagram.com/enjae_?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex flex-col justify-center items-center bg-insta opacity-1/2 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale transition duration-300 ease-in-out"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              height="1em"
              width="1em"
            >
              &gt;
              <path
                d="M44.122 2H19.87A17.875 17.875 0 0 0 2 19.835v24.2a17.875 17.875 0 0 0 17.87 17.834h24.252A17.875 17.875 0 0 0 62 44.034v-24.2A17.875 17.875 0 0 0 44.122 2zM55.96 44.034a11.825 11.825 0 0 1-11.838 11.812H19.87A11.825 11.825 0 0 1 8.032 44.034v-24.2A11.825 11.825 0 0 1 19.87 8.022h24.252A11.825 11.825 0 0 1 55.96 19.835zm0 0"
                fill="white"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                data-name="layer1"
                d="M32 16.45a15.484 15.484 0 1 0 15.514 15.484A15.519 15.519 0 0 0 32 16.45zm0 24.95a9.461 9.461 0 1 1 9.482-9.461A9.472 9.472 0 0 1 32 41.4zm19.263-24.834a3.719 3.719 0 1 1-3.719-3.711 3.714 3.714 0 0 1 3.719 3.711zm0 0"
                fill="white"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </a> */}
          <div className="grid grid-cols-4 place-content-center place-items-center gap-3 md:gap-8 p-4 md:p-8 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm text-lg md:text-xl lg:text-5xl text-center text-[#ffffffde]">
            <img
              alt=""
              loading="lazy"
              width={498}
              height={280}
              decoding="async"
              data-nimg={1}
              className="absolute w-full h-full object-cover object-center top-0 left-0 -z-10"
              style={{ color: "transparent" }}
              srcSet={flower}
              src={flower}
            />
          </div>
        </div>
      </div>
      <footer className=" mt-auto bottom-0 z-50 flex flex-cols justify-center items-center text-white">
        <div className="w-screen">
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-4" />
          <p class="flex justify-center text-sm text-white text-center my-4">
            Designed and Coded by&nbsp;
            <a href="https://enjae.netlify.app/" class="hover:underline">
              {" "}
              Harshil™
            </a>
            ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

//
