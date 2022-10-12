import React from "react";
import AgencyInfoImg from "../.././assets/img/AgencyInfoImg.png";
const AgencyInfo = () => {
  return (
    <div className="flex items-center px-40 py-7 bg-khaki gap-36">
      <img src={AgencyInfoImg} alt={AgencyInfoImg} />
      <p className="max-w-md text-xl leading-7 text-white">
        <span className="text-darkerGreen">Tour</span> travel agency is a
        private retailer or public service that provides <br /> travel and
        tourism-related services to the general public on behalf of
        accommodation or travel suppliers to offer different kinds of travelling
        packages for each destination. Our professional team have extended
        connections with travel suppliers in Azerbaijan and have access to
        exclusive deals. We can negotiate best deals for their clients in order
        to provide them with the best value. We also provide an array of choices
        relying on the spending plan.
      </p>
    </div>
  );
};

export default AgencyInfo;
