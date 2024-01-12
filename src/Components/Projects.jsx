import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { useLocation } from "react-router-dom";

const projects = [
  {
    title: "Skinsforskin",
    desc: "Skincare website aimed at revolutionizing the skincare experience.",
    techstack: "(ReactJs | OpenAiAPI)",
    href: "https://skinsforskin.netlify.app/",
    img: 'https://cdn-icons-png.flaticon.com/128/7869/7869080.png'
  },
  {
    title: "Sustain Web",
    desc: "Calculate environmental impact of web pages.",
    techstack: "(Flask | Sass)",
    href: "https://sustainweb.netlify.app/",
    img: 'https://cdn-icons-png.flaticon.com/128/7822/7822060.png'
  },
  {
    title: "Conference Room",
    desc: "A web-based platform connecting teachers and students",
    techstack: "(Python | Google Auth | HTML)",
    href: "https://conferenceroom1.pythonanywhere.com/",
    img:'https://cdn-icons-png.flaticon.com/128/8388/8388422.png'
  },
  {
    title: "HackNITJ22",
    desc: "Official Website for NIT Jalandhar.",
    techstack: "(HTML | CSS)",
    href: "https://v1.nitj.ac.in/hacknitj/",
    img:'https://cdn-icons-png.flaticon.com/128/8671/8671117.png'
  },
  {
    title: "EtheIt",
    desc: "Block Explorer and Analytics Platform for Ethereum.",
    techstack: "(JS | Solidity )",
    href: "https://enjae.github.io/ethe_scan/",
    img:'https://cdn-icons-png.flaticon.com/128/7745/7745768.png'
  },
];

const Projects = () => {
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
      
      <div className="container px-5 py-2 flex-col lg:w-4/6 mx-auto">
      <div className="card">
      <div className="flex mx-4 flex-row items-center text-center pt-4 pb-4 justify-between border-b">
                  <h1 className="font-bold text-gray-900 text-xl">
                    Projects
                  </h1>
                  <a href="https://github.com/enjae" target="blank" className="bg-black rounded-md px-4 py-1 text-white">
                  Gitub
                  </a>
      </div>
      <div className="mx-auto w-full max-w-5xl">
      <ul className="flex flex-col">
        {projects.map(item => (
          <li key={item.title} className="border-b-2 border-gray-100">
            <div className="py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent">


              <div className="sm:pl-4 pr-8 flex sm:items-center">
                <img src={item.img} alt="" className="mr-3 w-8 sm:w-12 h-8 sm:h-12" />
                <div className="space-y-1">
                  <p className="text-base text-gray-700 font-bold tracking-wide">{item.title}</p>
                  <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                </div>
              </div>
              <div className="pr-4 flex flex-col justify-between items-end">
                <div>
                    <div className="relative">
                    <a href={item.href} className="text-base text-black  underline hover:text-base  decoration-2 py-1 px-2 rounded-sm transition hover:decoration-wavy delay-150 duration-700 delay-75 font-bold" >Link</a>
                     
                    </div>
                </div>
                
              </div>

            </div>
          </li>
        ))
        }
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

export default Projects;
