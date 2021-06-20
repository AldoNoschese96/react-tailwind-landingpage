import React from "react";

const AccordionContainer = ({ children, ...rest }) => {
  return (
    <div className="flex flex-col w-full" {...rest}>
      {children}
    </div>
  );
};

export default AccordionContainer;
