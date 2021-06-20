import React from "react";

const SectionFour = () => {
  return (
    <div className="flex flex-col items-center md:flex-row w-full justify-between bg-indigo-600 h-80 px-10 text-center md:text-left  my-20">
      <div className="bg-sectionFour-pattern bg-cover bg-center h-28 md:h-20 md:h-96 w-2/5 md:w-1/5 mt-10 md:-mt-1  rounded-full md:rounded-xl shadow-lg"></div>
      <div className=" w-full md:w-3/4 px-10 my-auto">
        <p className="px-10 text-white hidden md:inline-block md:text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          possimus suscipit vero et illum corporis a ipsam sit cupiditate itaque
          saepe quod doloribus laboriosam ut.
        </p>
        <p className="px-10 text-white text-xs md:text-sm font-semibold text-center mt-5 md:text-left">
          Judith lord
        </p>
        <p className="px-10 text-white text-xs md:text-sm md:text-left  text-center mt-1">
          Ceo At Test
        </p>
      </div>
    </div>
  );
};

export default SectionFour;
