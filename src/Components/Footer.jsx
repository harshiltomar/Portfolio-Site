import React from "react";

const Footer = () => {
  return (
    <div className="w-screen">
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-4" />
      <p class="flex justify-center text-sm text-black text-center my-4">
        Designed and Coded by&nbsp;
        <a href="https://enjae.netlify.app/" class="hover:underline">
          {" "}
          Harshil™
        </a>
        ✨
      </p>
    </div>
  );
};

export default Footer;
