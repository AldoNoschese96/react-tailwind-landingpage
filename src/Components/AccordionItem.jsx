import React, { useState } from "react";

const AccordionItem = ({ title = "Heading", children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`flex flex-row justify-between ${
          !isOpen ? "border-b-2" : "border-b-0"
        } py-4`}
        {...rest}
      >
        <span className="font-semibold">{title}</span>
        {!isOpen ? (
          <svg
            onClick={() => setIsOpen(!isOpen)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setIsOpen(!isOpen)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <div className={`${isOpen ? "border-b-2" : "border-b-0"} py-2`}>
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionItem;
