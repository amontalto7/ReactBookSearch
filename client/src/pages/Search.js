import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
// import BookSearch from "../components/BookSearch";
import Wrapper from "../components/Wrapper";
import Jumbotron from "react-bootstrap/Jumbotron";
import Book from "../components/Book";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { List } from "../components/List";
import API from "../utils/API";
import "./style.css";
// import { throws } from "assert";

class Search extends Component {
  // constructor(props) {
  //   super(props)
  //   this.handleInputChange = this.handleInputChange.bind(this)
  //   this.getBooks = this.getBooks.bind(this)
  //   this.handleFormSubmit = this.handleFormSubmit.bind(this)
  //   this.state = {
  //     query: "Jurassic Park",
  //     books: [],
  //     message: "Search for Books To Begin!"
  //   }; 
  // }

  state = {
    query: "",
    books: [],
    message: "Search for Books To Begin!"
  }


  handleInputChange = event =>  {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  getBooks = () => {
    // console.log(this.state)
    API.getBooks(this.state.query)
      .then(res =>
        this.setState({ 
          books: res.data,
          message: !res.data.length ? "No books found. Try a different query" : ""
          })
      )
      .catch(err => 
        {
          this.setState({
            books: [],
            message: "No New Books found. Try a different query"
          })
          console.log(err);
        })
        
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      message: ""
    });
    if (this.state.query) {
      this.getBooks()
    }
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };


  render(){
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron
            style={{
              height: 200,
              clear: "both",
              paddingTop: 50,
              textAlign: "center",
              textShadow: "1px 1px grey",
              backgroundImage: "url(/images/BookSide.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: .9
            }}
          >
            <h1>(React) Google Books Search</h1>
            <h4>Search for and save books of interest</h4>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="book_search">
            <h5>Book Search</h5>
            <Form
             onSubmit={e => this.handleFormSubmit(e)}
            >
              <Form.Group controlId="formBookSearch">
                <Form.Label>{this.state.message}</Form.Label>
                <Form.Control 
                    type="text" 
                    name="query"
                    // value={this.state.query}
                    onChange={this.handleInputChange}
                    placeholder="Enter book title" />
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit"
                disabled={!this.state.query}
               
                >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Wrapper className="results">
          <h5>Results</h5>
            {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <Book 
                  key={book.id}
                  _id={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  url={book.volumeInfo.infoLink}
                  preview={book.volumeInfo.previewLink}
                  authors={book.volumeInfo.authors}
                  synopsis={book.volumeInfo.description}
                  // image={"https://placehold.it/150x150"}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  ContextButton={() => (
                    <button
                      onClick={() => this.handleBookSave(book.id)}
                      className="btn btn-primary ml-2"
                    >
                      Save
                    </button>
                    )}
                  />
                    
              ))
            
              }
            </List>
            ): (
              <h2 className="text-center">{this.state.message}</h2>
            )}
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Search;
