//The path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require("path");
//we are requiring Express and creating a new instance of Router on it. We are holding that in a variable called routes.
const router = require("express").Router();
//Here we say that our routes folder will be in /api
const apiRoutes = require("./api");
//we are telling here and we say express to use it.
router.use("/api", apiRoutes);
//here the routes will include a public route that serves the front-end
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
//this is exporting the routes that we stored and will be using in the router variable
module.exports = router;
