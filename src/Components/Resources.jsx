import React from "react";

import ImageOne from "../assets/sectionOne.jpg";
import ImageTwo from "../assets/sectionTwo.jpg";
import ImageThree from "../assets/sectionFour.jpg";

const Resources = () => {
  return (
    <section className="px-10 my-20 pb-20">
      <div className="w-full md:w-2/4 text-center mx-auto my-10">
        <div className="grid place-items-center">
          <p className="text-indigo-600 font-semibold">LEARN</p>
          <h2 className="text-2xl md:text-4xl font-bold my-5">
            Helpful resources
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, quaerat placeat illo, dolorem excepturi est modi nobis
            totam voluptates ab enim rerum neque.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 place-items-center sm:gap-y-2 gap-3 justify-around mt-10">
        <div className="w-full md:w-3/4 border-2 rounded-md shadow-lg">
          <div>
            <img className="p-0 w-full" src={ImageOne} alt="blog_post_1" />
          </div>
          <div className="px-2 py-3">
            <div>
              <span className="bg-indigo-200 rounded-xl px-3 py-1 text-xs font-bold text-indigo-700">
                Video
              </span>
            </div>
            <div className="mt-3">
              <p className="text-sm font-bold">
                5 Reasons YOU SHOULD LEARN REACT JS
              </p>
              <p className="text-gray-400 text-xs mt-2">
                If you care about your career as a developer , you know that
                react is a must-have in your toolbelt. One of the best and most
                valuable skills you could have today as a javascript developer
                is ReactJs. So in this article , I'm going to tell you exactly
                whiy you should learn ReactJs in 2021
              </p>
            </div>
            <div className="flex items-center mt-5">
              <div className="pr-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src={ImageOne}
                  alt="author_1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Inès Emy</span>
                <span className="text-xs text-gray-400">
                  June 05, 2021 - 6 min read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 border-2  rounded-md shadow-lg">
          <div>
            <img className="p-0 w-full" src={ImageOne} alt="blog_post_1" />
          </div>
          <div className="px-2 py-3">
            <div>
              <span className="bg-indigo-200 rounded-xl px-3 py-1 text-xs font-bold text-indigo-700">
                Video
              </span>
            </div>
            <div className="mt-3">
              <p className="text-sm font-bold">
                5 Reasons YOU SHOULD LEARN REACT JS
              </p>
              <p className="text-gray-400 text-xs mt-2">
                If you care about your career as a developer , you know that
                react is a must-have in your toolbelt. One of the best and most
                valuable skills you could have today as a javascript developer
                is ReactJs. So in this article , I'm going to tell you exactly
                whiy you should learn ReactJs in 2021
              </p>
            </div>
            <div className="flex items-center mt-5">
              <div className="pr-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src={ImageThree}
                  alt="author_1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Inès Emy</span>
                <span className="text-xs text-gray-400">
                  June 05, 2021 - 6 min read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 border-2  rounded-md shadow-lg">
          <div>
            <img className="p-0 w-full" src={ImageTwo} alt="blog_post_1" />
          </div>
          <div className="px-2 py-3">
            <div>
              <span className="bg-indigo-200 rounded-xl px-3 py-1 text-xs font-bold text-indigo-700">
                Video
              </span>
            </div>
            <div className="mt-3">
              <p className="text-sm font-bold">
                5 Reasons YOU SHOULD LEARN REACT JS
              </p>
              <p className="text-gray-400 text-xs mt-2">
                If you care about your career as a developer , you know that
                react is a must-have in your toolbelt. One of the best and most
                valuable skills you could have today as a javascript developer
                is ReactJs. So in this article , I'm going to tell you exactly
                whiy you should learn ReactJs in 2021
              </p>
            </div>
            <div className="flex items-center mt-5">
              <div className="pr-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src={ImageTwo}
                  alt="author_1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Inès Emy</span>
                <span className="text-xs text-gray-400">
                  June 05, 2021 - 6 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
