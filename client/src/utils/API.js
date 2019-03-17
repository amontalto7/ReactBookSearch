import axios from "axios";

export default {
    // Get books from google books
    getBooks: function() {
        return axios.get("/api/gbooks")
    },
      // Gets the book with the given id
    getBook: function(id) {
    return axios.get("/api/gbooks/" + id);
  }
};