import React from "react";
import { BsYoutube } from "react-icons/bs";

function Video() {
  return (
    <>
      <a href="https://www.youtube.com/watch?v=0jK0ytvjv-E">
        <div className="bg-videoBg bg-cover h-[50vh] flex items-center justify-center">
          <BsYoutube className="text-white hover:text-gray-500 w-[100px] h-[100px]" />
        </div>
      </a>
    </>
  );
}

export default Video;
