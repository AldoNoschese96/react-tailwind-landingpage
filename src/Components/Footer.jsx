import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-10 w-full py-10">
      <div className="flex flex-col md:flex-row md:justify-between">
        <ul className="grid grid-cols-1 gap-y-3 mb-5 md:mb-0">
          <li className=" text-gray-500 font-semibold">SOLUTIONS</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
        </ul>
        <ul className="grid grid-cols-1 gap-y-3 mb-5 md:mb-0">
          <li className=" text-gray-500 font-semibold">SUPPORT</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
        </ul>
        <ul className="grid grid-cols-1 gap-y-3 mb-5 md:mb-0">
          <li className=" text-gray-500 font-semibold">COMPANY</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
        </ul>
        <ul className="grid grid-cols-1 gap-y-3 mb-5 md:mb-0">
          <li className=" text-gray-500 font-semibold">LEGAL</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
          <li className="text-sm text-gray-500">Lorem</li>
        </ul>

        <ul className="grid grid-cols-1 gap-y-3">
          <li className=" text-gray-500 font-semibold">
            SUBSCRIBE TO OUR NEWSLETTER
          </li>
          <li className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li className="flex flex-row justify-between items-center py-2 px-3 bg-white rounded-md">
            <div className="border-r-2 flex-1">
              <span className="text-sm text-gray-500">Your email</span>
            </div>
            <div className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sm text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <hr className="mt-5   " />
    </div>
  );
};

export default Footer;
