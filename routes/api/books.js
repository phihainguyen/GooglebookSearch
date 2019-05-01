//we are requiring Express and creating a new instance of Router on it. We are holding that in a variable called routes.
const router = require("express").Router();
// we are requiring the bookController operations from the controller folder to utilize the findall, create, update, finById, and remove operations
const bookController = require("../../controllers/bookController");

//here we are setting up the routes for the get and post requests for the root route
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

//here we are setting up the routes for the get, put and delete requests for the /:id path
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);
// we are now exporting the routes that we created in our router variable
module.exports = router;
