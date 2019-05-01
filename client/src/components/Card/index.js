//the React object is imported from react module, this built in module and object is imported but even tho we are not using this object directly when we compile our code it allows us to reference to the React we will need it to be imported
import React from "react";

//this Card function contains 3 parameter which will be passed as function components and the Card function takes in the state of icon, title, and children as parameters. This function returns the JSX for the form with the appropriate bindings to the parameters that were passed in. The forms become functional components and arent needed to be written out into its separate functions, and may be passed to other pages by using the same name to pass its value
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
