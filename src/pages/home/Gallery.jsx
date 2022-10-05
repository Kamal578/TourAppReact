import React from "react";
import { NavLink } from "react-router-dom";
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";

function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center h-100 bg-khaki p-10">
      <p className="text-center text-7xl text-darkerGreen font-primary font-bold mb-10">
        Gallery
      </p>
      <GalleryComponent />
      <NavLink
        exact
        to="/gallery"
        className="text-center border-2 border-darkerGreen text-darkerGreen flex flex-row items-center justify-center px-5 py-3 rounded-lg font-primary font-semibold mt-5 hover:border-green hover:text-green transition-all duration-300"
      >
        See more
      </NavLink>
    </div>
  );
}

export default Gallery;
