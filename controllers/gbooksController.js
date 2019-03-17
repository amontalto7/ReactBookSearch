require('dotenv').config();
const axios = require("axios");
// const db = require("../models");

// Defining methods for the booksController
module.exports = {
  getBooks: function(req, res) {
    const params = Object.assign(
      {api_key: process.env.API_KEY},req.query
    );
    let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${req.query}&key=${process.env.API_KEY}`    
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyAYeKp1W0vvzx4cznVcVmtNW7s8RpdIzRQ")
    .then(response =>
      res.json(response.data.items))
    .catch(err => res.status(422).json(err));
  }

}
