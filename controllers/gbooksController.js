require('dotenv').config();
const axios = require("axios");
// const db = require("../models");

// Defining methods for the booksController
module.exports = {
  getBooks: function(req, res) {
    // const params = Object.assign(
    //   {api_key: process.env.API_KEY},req.query
    // );
    let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${req.query}&key=${process.env.API_KEY}`    
    console.log(queryUrl);
    axios
    .get(queryUrl)
    // .get("https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyAYeKp1W0vvzx4cznVcVmtNW7s8RpdIzRQ")
    .then(response =>{
     console.log(response.data.items[0].volumeInfo.title)
     console.log(response.data.items[0].volumeInfo.authors)
     console.log(response.data.items[0].volumeInfo.imageLinks.smallThumbnail)
    //  console.log(response.data.items[0].volumeInfo.description)

     res.json(response.data.items)
    })
    .catch(err => res.status(422).json(err));
  }

}
