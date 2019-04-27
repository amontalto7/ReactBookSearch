import axios from "axios";

export default {
    // Get books from google books
    getBooks: function(query) {
      query = query.trim().replace(/ /gi,"+");
      return axios.get("/api/gbooks", { params: { query: query} });
    },
      // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/gbooks/" + id);
    },
      // Gets all saved books
    getSavedBooks: function() {
      return axios.get("/api/books");
    },
     // Saves an book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }

};