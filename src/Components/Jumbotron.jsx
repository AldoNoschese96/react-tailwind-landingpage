import React from "react";
import Amazon from "../icons/Amazon";
import DigitalOcean from "../icons/DigitalOcean";
import Facebook from "../icons/Facebook";
import Tesla from "../icons/Tesla";

const Jumbotron = () => {
  return (
    <div className="py-5 px-3 bg-gray-50 w-full">
      <div className="grid place-items-center my-5">
        <p className="text-xs font-semibold text-gray-500">
          TRUSTED BY TOP-LEADING COMPANIES
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-100 place-items-center">
        <div className="grid place-items-center">
          <Facebook style={{ width: "50%" }} />
        </div>
        <div className="grid place-items-center">
          <Tesla style={{ width: "50%" }} />
        </div>
        <div className="grid place-items-center">
          <DigitalOcean style={{ width: "50%" }} />
        </div>
        <div className="grid place-items-center">
          <Amazon style={{ width: "50%" }} />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
