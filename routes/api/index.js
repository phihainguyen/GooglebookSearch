//The path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require("path");
//we are requiring Express and creating a new instance of Router on it. We are holding that in a variable called routes.
const router = require("express").Router();
//requiring the routes that was created in the books.js file located in the api folder
const bookRoutes = require("./books");
//requiring the routes created in the goodle.js file located in the api folder
const googleRoutes = require("./google");

//we are telling here and we say express to use the routes from the book.js file.
router.use("/books", bookRoutes);
//we are telling here and we say express to use the routes from the google.js file.
router.use("/google", googleRoutes);
//we are the required routes
module.exports = router;
