import React from "react";
import AccordionContainer from "./AccordionContainer";
import AccordionItem from "./AccordionItem";

const SectionSix = () => {
  return (
    <div className="px-10 my-20">
      <div className="w-full md:w-2/4 text-center mx-auto my-10">
        <div className="grid place-items-center">
          <p className="text-indigo-600 font-semibold">ASK US ANYTHING</p>
          <h2 className="text-2xl md:text-4xl font-bold my-5">
            Frequently Asked Questions
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, quaerat placeat illo, dolorem excepturi est modi nobis
            totam voluptates ab enim rerum neque.
          </p>
        </div>
      </div>
      <AccordionContainer>
        <AccordionItem title="Do you offer student discounts ? ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
          quibusdam! Tenetur debitis molestias unde illum est mollitia suscipit!
          Quod perferendis quas expedita fugit impedit officiis, minus culpa
          itaque fuga. Id!
        </AccordionItem>
        <AccordionItem title="How can i get support ? ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
          quibusdam! Tenetur debitis molestias unde illum est mollitia suscipit!
          Quod perferendis quas expedita fugit impedit officiis, minus culpa
          itaque fuga. Id!
        </AccordionItem>
        <AccordionItem title="Do i get access to the entire codebase ? ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
          quibusdam! Tenetur debitis molestias unde illum est mollitia suscipit!
          Quod perferendis quas expedita fugit impedit officiis, minus culpa
          itaque fuga. Id!
        </AccordionItem>
        <AccordionItem title="Can i get refound ? ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
          quibusdam! Tenetur debitis molestias unde illum est mollitia suscipit!
          Quod perferendis quas expedita fugit impedit officiis, minus culpa
          itaque fuga. Id!
        </AccordionItem>
        <AccordionItem title="Anything else we can help with ? ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
          quibusdam! Tenetur debitis molestias unde illum est mollitia suscipit!
          Quod perferendis quas expedita fugit impedit officiis, minus culpa
          itaque fuga. Id!
        </AccordionItem>
      </AccordionContainer>
    </div>
  );
};

export default SectionSix;
