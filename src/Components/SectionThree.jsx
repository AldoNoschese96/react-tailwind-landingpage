import React from "react";

//Components
import Card from "./Card";

const SectionThree = () => {
  return (
    <div className="flex flex-col justify-between items-center px-10 my-10">
      <div className="text-center w-full md:w-2/4 px-10">
        <div className="grid place-items-center">
          <p className="text-indigo-600 font-semibold">BUILD FASTER</p>
          <h2 className="text-2xl md:text-4xl font-bold my-5">
            Everything your app needs and more
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, quaerat placeat illo, dolorem excepturi est modi nobis
            totam voluptates ab enim rerum neque, voluptas quisquam sint? Odio
            hic commodi quisquam.
          </p>
        </div>
      </div>
      <div className="flex-1 my-20 w-full">
        <div className="grid gap-y-10 md:gap-y-20 xs:grid-cols-1 sm:grid-cols-2 md:gap-x-10 md:grid-cols-3">
          <div className="grid place-items-center">
            <Card />
          </div>
          <div className="grid place-items-center">
            <Card />
          </div>
          <div className="grid place-items-center">
            <Card />
          </div>
          <div className="grid place-items-center">
            <Card />
          </div>
          <div className="grid place-items-center">
            <Card />
          </div>
          <div className="grid place-items-center">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
