import React from "react";
import Resposibility1 from "../.././assets/img/resposibility1.png";
import Resposibility2 from "../.././assets/img/resposibility2.png";
import Resposibility3 from "../.././assets/img/resposibility3.png";
const Responsibility = () => {
  return (
    <div>
      <div>
        <p className="mt-16 text-xl leading-8 px-36 text-black-rgba">
          <span className="text-darkerGreen">Tour</span> travel agency is a
          private retailer or public service that provides travel and
          tourism-related services to the general public on behalf of
          accommodation or travel suppliers to offer different kinds of
          travelling packages for each destination. Our professional team have
          extended connections with travel suppliers in Azerbaijan and have
          access to exclusive deals. We can negotiate best deals for their
          clients in order to provide them with the best value. We also provide
          an array of choices relying on the spending plan.
        </p>
      </div>
      <div className="flex items-center gap-12 py-20 mx-36">
        <div className="flex">
          <img className="w-[235px] h-[381px]" src={Resposibility1} alt={Resposibility1} />
          <img className="w-[235px] h-[381px] -ml-20 mt-20" src={Resposibility2} alt={Resposibility2} />
          <img className="w-[235px] h-[381px] -ml-20 mt-40" src={Resposibility3} alt={Resposibility3} />
        </div>
        <div className="">
          <h4 className="mb-16 text-6xl text-darkerGreen">Responsibilities</h4>
          <ul className="text-3xl list-disc pl-7 text-black-rgba">
            <li className="pb-10 pl-3">Transportation</li>
            <li className="pb-10 pl-3">Meals</li>
            <li className="pl-3">Acommodation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
