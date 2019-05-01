//the React object is imported from react module, this built in module and object is imported but even tho we are not using this object directly when we compile our code it allows us to reference to the React we will need it to be imported
import React from "react";

//this function will create the component for the footer which will be exported, and this will essentially be how the UI will look like
function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}
//this export default allows us to export the footer without having to refer to this exact function's name
export default Footer;
