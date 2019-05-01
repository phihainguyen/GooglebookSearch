//this files is where you interact with your database
//the controller file contains all the methods and functions which will handle the data. This includes the methods for creating reading updating and deleting items

//requiring db from the models folder
const db = require("../models");

//everything below will be export via a module from this bookController.js file
module.exports = {
  //this operation is used to find all books inside of the dbBook collection
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  //this operation is used to find a specific book inside of the dbBook collection by the books' ID
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  //this operation is used to add/create a new book to be created in the Book collection
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  //this operation is used to edit a book by finding the one and editing/updating its information in the Book collection
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  //this operation is used to delete/remove a book from the Book collection by find it by its ID
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
