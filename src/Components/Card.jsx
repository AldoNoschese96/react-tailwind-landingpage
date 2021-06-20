import React from "react";
import Lightning from "../icons/Lightning";

const Card = (icon, title) => {
  return (
    <div className="flex flex-col justify-between bg-gray-100 text-center min-w-72  px-5 rounded-md shadow-lg">
      <div className="-mt-5 mx-auto">
        <div className="grid place-items-center py-2 px-1 bg-indigo-600 w-12 rounded-lg mx-auto md:mx-0">
          <Lightning style={{ color: "white", width: "50%" }} />
        </div>
      </div>
      <div className="pt-5">
        <h2 className="font-semibold">Title</h2>
      </div>
      <div>
        <p className="text-xs text-center py-5 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          consectetur adipisicing
        </p>
      </div>
    </div>
  );
};

export default Card;
