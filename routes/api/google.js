//we are requiring Express and creating a new instance of Router on it. We are holding that in a variable called routes.
const router = require("express").Router();
//we are requiring the google controller
const googleController = require("../../controllers/googleController");

//we are using the get routes that usilizes the findAll method found in the goodleController file located in the conrollers folder which we used to hit the API performing the get request, requesting the books from it and this uses the root route to do so
router.route("/").get(googleController.findAll);
// we are now exporting the routes that we created in our router variable
module.exports = router;
