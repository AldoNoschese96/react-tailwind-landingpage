import React from "react";
import Lightning from "../icons/Lightning";

const SectionOne = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between my-20">
      <div className="flex flex-col justify-center flex-1 px-10 w-full md:w-3/4 text-center md:text-left">
        <div className="grid place-items-center py-2 px-1 bg-indigo-600 w-12 rounded-lg mx-auto md:mx-0">
          <Lightning style={{ color: "white", width: "50%" }} />
        </div>
        <div className="mb-5 md:mb-0 w-full ">
          <h2 className="text-3xl font-bold my-3">Build products faster</h2>
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
      <div className="bg-sectionOne-pattern shadow-xl bg-center bg-cover mx-10 md:mx-0 flex-0 md:flex-1 rounded-tl-md rounded-bl-md rounded-br-md md:rounded-br-none rounded-tr-md md:rounded-tr-none h-96"></div>
    </div>
  );
};

export default SectionOne;
