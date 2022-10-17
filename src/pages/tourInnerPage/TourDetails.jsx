import React from "react";
import {ReactComponent as TourDetail} from "../../assets/icons/TourDetail.svg";
import { BsClockHistory } from "react-icons/bs";
import { HiOutlineCurrencyDollar, HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";

function TourDetails() {
  const iconStyle = { color: "#E8A908", width: "5vw" };
  return (
    <div id="tourDetailsParent" className="h-[70vh] relative max-w-full">
        <ul className="flex flex-col gap-2 z-10 font-bold text-lg text-[#333333] top-1/2 left-1/4 -translate-x-1/3 -translate-y-1/2 absolute md:text-3xl">
          <li className="flex flex-row gap-2 items-center">
            <BsClockHistory style={iconStyle} />
            Duration: 7 days{" "}
          </li>
          <li className="flex flex-row gap-2 items-center">
            <HiOutlineLocationMarker style={iconStyle} />
            Pick-up/Drop-off: <br/>Heyder Aliyev Center
          </li>
          <li className="flex flex-row gap-2 items-center">
            <HiOutlineCurrencyDollar style={iconStyle} />
            Price: 100$
          </li>
          <li className="flex flex-row gap-2 items-center">
            <FaRegCalendarAlt style={iconStyle} />
            10:00 - 23:00
          </li>
        </ul>
      <TourDetail className="-z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute max-w-full"/>
      {/* <BsClockHistory style={yellowStyle} />
      <GrLocation style={yellowStyle} />
      <HiOutlineCurrencyDollar style={yellowStyle}/>
      <FaRegCalendarAlt style={yellowStyle}/> */}
    </div>
  );
}

export default TourDetails;
