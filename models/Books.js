var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
  // `headline` is required and of type String
  title: {
    type: String,
    required: true,
    unique: true
  },
  authors: [
    {
      // Store ObjectIds in the array
      type: String
    }
  ],
  // `url` is required and of type String
  description: {
    type: String
  },
  image: {
    type: String,
    default: "https://onlinebookclub.org/book-covers/no-cover.jpg"
  },
  link: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;
