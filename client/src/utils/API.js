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
  }
};