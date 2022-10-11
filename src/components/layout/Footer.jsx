import React from "react";
import { ReactComponent as JavaChipLogo } from "../../assets/icons/Javachip.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as YouTube } from "../../assets/icons/YouTube.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/Linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  const Contact = {
    number: "+994506248822",
    email: "info@tour.com",
  };
  return (
    <div className="sticky flex flex-col bg-darkerGreen">
      <div
        id="container1"
        className="flex flex-col gap-2 items-start justify-between text-base text-thin text-white p-10 md:flex-row md:gap-0"
      >
        <div
          id="col1"
          className="w-full flex justify-between flex-col gap-4 md:w-1/4"
        >
          <p className="text-green text-4xl font-logo font-bold select-none">
            Tour.
          </p>
          <p className="text-base">
            We are a trusted travel company in Azerbaijan. Our main goal is to
            provide confortable tours for our clients. We have professional
            services for you to be accessed. Our company is a highly created
            company in this region. All of our placements are suitable.
          </p>
        </div>
        <div id="col2" className=" ">
          <p className="font-semibold">Quick Links</p>
          <div className="flex flex-col">
            <Link to="/">About</Link>
            <Link to="/">Tours</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">How it works</Link>
          </div>
        </div>
        <div id="col3" className="flex flex-col">
          <p className="font-semibold">Contact us</p>
          <div className="flex flex-col">
            <a href="https://goo.gl/maps/XsBXEinxeUDXCT9q9">
              5 A.Azizbeyov, Baku, AZerbaijan AZ1077
            </a>
            <a href={"tel:" + Contact["number"]}>{Contact["number"]}</a>
            <a href={"mailto:" + Contact["email"]} to="/">
              {Contact["email"]}
            </a>
          </div>
        </div>
        <div id="col4" className="flex flex-col gap-12">
          <p className="font-semibold">Social Media</p>
          <div className="flex flex-row gap-12">
            <Facebook />
            <Instagram />
            <YouTube />
            <Linkedin />
          </div>
        </div>
      </div>
      <div
        id="container2"
        className="flex flex-col items-center justify-between p-5 text-xl text-thin text-white md:flex-row"
      >
        <p className="text-xl text-thin">
          Copyright © 2022 Tour LLC All Rights Reserved
        </p>
        <p className="flex flex-row justify-center items-center">
          Site created by: <JavaChipLogo style={{ width: "8em" }} />
        </p>
      </div>
    </div>
  );
}

export default Footer;
