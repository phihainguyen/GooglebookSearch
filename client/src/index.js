//index.js is basically the entry point for the application

//the React object is imported from react module, this built in module and object is imported but even tho we are not using this object directly when we compile our code because there is a refence to the React we will need it to be imported
import React from "react";
//the ReactDOM object is imported from the react-dom module
import ReactDOM from "react-dom";
//The App object here is imported from the App.js file
import App from "./App";
//the registerServiceWorker object is imported from the registerServiceWorker.js file
import registerServiceWorker from "./registerServiceWorker";

//We call this a “root” DOM node because everything inside it will be managed by React DOM. Applications built with just React usually have a single root DOM node. So this will display everything from the App.js file in the root div
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
