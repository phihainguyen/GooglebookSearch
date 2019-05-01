//importing the mongoose library in order to use mongoose
const mongoose = require("mongoose");

//using mongoose to create the schema for the collection
const Schema = mongoose.Schema;

//creating a book schema by referencing the schema which was declared above, collecting data such as the ones listed below, this is a way to make mongoDB a bit strict with its collection
const bookSchema = new Schema({
  // the book's title property called title as a schema type String, which is required
  title: { type: String, required: true },
  //the books subtitle property called subtitle set as a schema type String if it exists, the authors name as a string which is required
  subtitle: { type: String },
  authors: { type: [String], required: true },
  //the property called link, which is a link to the book is taken in as a schema type String which is required
  link: { type: String, required: true },
  //the property called description of the book as a string, which is required
  description: { type: String, required: true },

  //the property image which is an image of the book is taken in as a string which is also required
  image: { type: String, required: true },

  //googleId taken in as a string which is also required, and it must be unique to other documents of this collection
  googleId: { type: String, required: true, unique: true }
});

//By creating a model constructor on mongoose by making Book const variable we are able to store the Book schema here to export to the controller's folder to be used
const Book = mongoose.model("Book", bookSchema);

//Here we are exporting the constructed model Book schema
module.exports = Book;
