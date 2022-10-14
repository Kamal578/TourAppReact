import React from "react";
import { ReactComponent as JavaChipLogo } from "../../assets/icons/Javachip.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as YouTube } from "../../assets/icons/YouTube.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/Linkedin.svg";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  const Contact = {
    number: "+994506248822",
    email: "info@tour.com",
  };
  return (
    <div className="sticky flex flex-col px-24 bg-darkerGreen">
      <div
        id="container1"
        className="flex flex-col items-start justify-between gap-2 p-10 text-base text-white text-thin md:flex-row md:gap-0"
      >
        <div
          id="col1"
          className="flex flex-col justify-between w-full gap-4 md:w-1/4"
        >
<<<<<<< HEAD
          <p className="font-bold select-none 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-wxl sm:text-xl mb-11 text-green font-logo">
            Tour.
          </p>
          <p className="2xl:text-base xl:text-sm lg:text-xs md:text-xs sm:text-xs">
=======
          <NavLink
            exact
            to="/"
            className="text-4xl font-bold select-none mb-11 text-green font-logo"
          >
            Tour.
          </NavLink>
          <p className="text-base">
>>>>>>> 849352b608aae6701dbcf1de8abf1d96782a793d
            We are a trusted travel company in Azerbaijan. Our main goal is to
            provide confortable tours for our clients. We have professional
            services for you to be accessed. Our company is a highly created
            company in this region. All of our placements are suitable.
          </p>
        </div>
        <div id="col2">
          <p className="mb-3 text-xl font-semibold">Quick Links</p>
          <div className="flex flex-col">
            <Link
              to="/"
              className="mt-4 2xl:text-sm xl:text-xs lg:text-xs md:text-xs sm:text-xs"
            >
              About
            </Link>
            <Link
              to="/"
              className="mt-4 2xl:text-sm xl:text-xs lg:text-xs md:text-xs sm:text-xs "
            >
              Tours
            </Link>
            <Link
              to="/"
              className="mt-4 2xl:text-sm xl:text-xs lg:text-xs md:text-xs sm:text-xs "
            >
              Gallery
            </Link>
            <Link
              to="/"
              className="mt-4 2xl:text-sm xl:text-xs lg:text-xs md:text-xs sm:text-xs "
            >
              How it works
            </Link>
          </div>
        </div>
        <div id="col3" className="flex flex-col">
          <p className="mb-3 text-xl font-semibold">Contact us</p>
          <div className="flex flex-col">
            <a
              className="mt-4 2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs"
              href="https://goo.gl/maps/XsBXEinxeUDXCT9q9"
            >
              5 A.Azizbeyov, Baku, AZerbaijan AZ1077
            </a>
            <a
              className="mt-4 2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs"
              href={"tel:" + Contact["number"]}
            >
              {Contact["number"]}{" "}
            </a>
            <a
              className="mt-4 2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs"
              href={"mailto:" + Contact["email"]}
              to="/"
            >
              {Contact["email"]}
            </a>
          </div>
        </div>
        <div id="col4" className="flex flex-col gap-12">
          <p className="text-xl font-semibold">Social Media</p>
<<<<<<< HEAD
          <div className="flex justify-center gap-12 2xl:flex-row xl:flex-col lg:flex-col md:flex-col sm:flex-col">
            <Facebook />
            <Instagram />
            <YouTube />
            <Linkedin />
=======
          <div className="flex flex-row gap-12">
            <Facebook className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <YouTube className="cursor-pointer" />
            <Linkedin className="cursor-pointer" />
>>>>>>> 849352b608aae6701dbcf1de8abf1d96782a793d
          </div>
        </div>
      </div>
      <div
        id="container2"
        className="flex flex-col items-center justify-between p-5 text-xl text-white mb-7 text-thin md:flex-row"
      >
        <p className="text-xl text-thin">
          Copyright © 2022 Tour LLC All Rights Reserved
        </p>
        <p className="flex flex-row items-center justify-center">
          Site created by: <JavaChipLogo style={{ width: "8em" }} />
        </p>
      </div>
    </div>
  );
};

export default Footer;
