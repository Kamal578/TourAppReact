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
          <NavLink
            exact
            to="/"
            className="text-4xl font-bold select-none mb-11 text-green font-logo"
          >
            Tour.
          </NavLink>
          <p className="text-base">
            We are a trusted travel company in Azerbaijan. Our main goal is to
            provide confortable tours for our clients. We have professional
            services for you to be accessed. Our company is a highly created
            company in this region. All of our placements are suitable.
          </p>
        </div>
        <div id="col2">
          <p className="mb-3 text-xl font-semibold">Quick Links</p>
          <div className="flex flex-col">
            <Link to="/" className="mt-4 text-sm">
              About
            </Link>
            <Link to="/" className="mt-4 text-sm">
              Tours
            </Link>
            <Link to="/" className="mt-4 text-sm">
              Gallery
            </Link>
            <Link to="/" className="mt-4 text-sm">
              How it works
            </Link>
          </div>
        </div>
        <div id="col3" className="flex flex-col">
          <p className="mb-3 text-xl font-semibold">Contact us</p>
          <div className="flex flex-col">
            <a
              className="mt-4 text-sm"
              href="https://goo.gl/maps/XsBXEinxeUDXCT9q9"
            >
              5 A.Azizbeyov, Baku, AZerbaijan AZ1077
            </a>
            <a className="mt-4 text-sm" href={"tel:" + Contact["number"]}>
              {Contact["number"]}{" "}
            </a>
            <a
              className="mt-4 text-sm"
              href={"mailto:" + Contact["email"]}
              to="/"
            >
              {Contact["email"]}
            </a>
          </div>
        </div>
        <div id="col4" className="flex flex-col gap-12">
          <p className="text-xl font-semibold">Social Media</p>
          <div className="flex flex-row gap-12">
            <Facebook className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <YouTube className="cursor-pointer" />
            <Linkedin className="cursor-pointer" />
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
