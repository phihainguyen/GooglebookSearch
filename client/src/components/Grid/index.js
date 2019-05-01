//the React object is imported from react module, this built in module and object is imported but even tho we are not using this object directly when we compile our code because there is a refence to the React we will need it to be imported
import React from "react";

//Container function here contains the functional component, fluid and children, which are passed as parameter. This function returns the JSX for the form with the appropriate bindings to the parameters that were passed in. The forms become functional components and arent needed to be written out into its separate functions
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//row takes 2 parameters to get the value of the className and the value of the chilren div
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//col takes in 2 parameter which determines the col size for the Grid system as well as the value of the child's div
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
