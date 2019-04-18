require('dotenv').config();
const axios = require("axios");
// const db = require("../models");

// Defining methods for the booksController
module.exports = {
  getBooks: function(req, res) {
    // const params = Object.assign(
    //   {api_key: process.env.API_KEY},req.query
    // );
    // console.log(req)
    // console.log(`Req.query: ${JSON.stringify(req.query)}`);
    let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${req.query.query}&key=${process.env.API_KEY}`    
    console.log(queryUrl);
    axios
    .get(queryUrl)
    .then(response =>
      // make sure responses contain all reuired data
        response.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.previewLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
    )
    // findAll searches the Google Books API and returns only the entries we haven't already saved
    // .then(apiBooks =>
    //   db.Book.find().then(dbBooks =>
    //     apiBooks.filter(apiBook =>
    //       dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
    //     )
    //   )
    // )
    .then(books => res.json(books))
    .catch(err => res.status(422).json(err));
  }

}
