//this file uses axios to hit the googles api to grab data via a GET request

//axios is used which is why it is delcared and required here
const axios = require("axios");
//the collection is then called here required from the models folder
const db = require("../models");

module.exports = {
  //this is a get request to the API to find everything which returns the results of the following
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      //a successful response that returns the result with the title, infoLink, authors, description, image link, and a thumbnail
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      //this will check and filter through and compare if its matching with books in the collection
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      //returns the books in json format
      .then(books => res.json(books))
      //returns an error if there was an err during the get request
      .catch(err => res.status(422).json(err));
  }
};
