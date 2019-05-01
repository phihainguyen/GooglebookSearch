import React from "react";
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
// these are just the basic React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Below are just the pages imported from the pafes folder and the Nav which is imported from the component folder
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

//App function will import in the info from the 3 pages, Home.js, NoMatch.js, and Saved.js and export this to the index.js file
// We give each route either a target component, or we can send functions in render or children
// that return valid nodes. `children` always returns the given node whether there is a match or not.
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

//then we export App
export default App;
