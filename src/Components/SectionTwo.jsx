import React from "react";
import Lightning from "../icons/Lightning";

const SectionTwo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between my-20">
      <div className="flex flex-col justify-center flex-1 px-10 w-full text-center md:text-left md:order-1">
        <div className="grid place-items-center py-2 px-1 bg-indigo-600 w-12 rounded-lg mx-auto md:ml-10">
          <Lightning style={{ color: "white", width: "50%" }} />
        </div>
        <div className="mb-5 md:mb-0 w-full ml-0 md:ml-10">
          <h2 className="text-3xl font-bold my-3">Focus on your product</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            vitae quia magnam sint culpa nulla libero ipsum pariatur id minus et
            laudantium veniam nobis perspiciatis deleniti, dignissimos, dolores
            aliquid reprehenderit!
          </p>
          <button className="bg-indigo-700 px-4 py-3 text-sm text-white mt-3 rounded-lg font-semibold">
            Get started
          </button>
        </div>
      </div>
      <div className="bg-sectionTwo-pattern bg-center shadow-xl bg-cover mx-10 md:mx-0 flex-0 md:flex-1 rounded-tr-md rounded-br-md rounded-bl-md md:rounded-bl-none rounded-tl-md md:rounded-tl-none rounded-lr-md md:rounded-lr-none h-96"></div>
    </div>
  );
};

export default SectionTwo;
