import React from "react";
import Lightning from "../icons/Lightning";

import Close from "../icons/Close";

const MenuMobile = ({ onClose }) => {
  return (
    <div className="h-screen w-screen absolute top-0 bg-blue-900 flex flex-col px-5 py-5 z-50">
      <div className="flex items-start justify-between w-full ">
        <div className="flex items-start">
          <Lightning style={{ color: "white" }} />
          <span className="font-semibold text-md px-3 text-white">
            Jumpstart React
          </span>
        </div>
        <div className="block md:hidden">
          <Close style={{ color: "white" }} onClick={() => onClose()} />
        </div>
      </div>
      <div className="mt-10">
        <ul className="text-white">
          <li>Solutions</li>
          <li className="py-5">Support</li>
          <li>Company</li>
          <li className="py-5">Pricing</li>
        </ul>
        <hr />
      </div>
      <div className="flex justify-center items-center flex-col">
        <button className="py-5 px-10 text-purple-700 font-bold">
          Sign in
        </button>
        <button className="py-3 rounded-md px-10 bg-purple-700 w-full text-white font-bold">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default MenuMobile;
