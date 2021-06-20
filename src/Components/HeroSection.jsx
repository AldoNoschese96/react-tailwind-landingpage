import React from "react";

//Components
import Lightning from "../icons/Lightning";

const HeroSection = () => {
  return (
    <section className="h-screen md:px-10 rounded-lg">
      <div className="w-full h-full bg-img-with-opacity">
        <div className="h-full flex flex-col justify-center items-center text-center rounded-lg">
          <div className="flex flex-col px-5 w-full sm:w-2/3 md:w-2/3">
            <span className="text-white font-bold text-4xl md:text-7xl opacity-100">
              Build wonderful
            </span>
            <span className="font-bold text-3xl text-blue-200 md:text-6xl">
              React apps
            </span>
            <span className="text-white pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              perferendis facere temporibus, atque repellat hic dolorem
              reprehenderit sed dolor ratione doloribus laborum
            </span>
            <div className="flex flex-col md:flex-row mt-10 w-full justify-between mx-auto  md:w-2/3">
              <div className="flex flex-1 cursor-pointer justify-center items-center mb-3 py-3 px-3 text-indigo-600 w-full bg-white font-semibold rounded-md">
                <Lightning />
                <span>Get started</span>
              </div>
              <div className="flex flex-1 justify-center cursor-pointer items-center ml-0 md:ml-2 mb-3 py-3 px-3 text-white font-semibold border-2 border-white rounded-md">
                Live demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
