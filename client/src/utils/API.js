//Importing
import axios from "axios";

export default {
  //performs a get request which returns the book that the user searches for via a title
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },

  //performs a get request which returns the books that were saved by the user
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // perform a delete requests which deletes the specific book by searching for its id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  //performs a post request which adds a book to the collection that saves books
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
