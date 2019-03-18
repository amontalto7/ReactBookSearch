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

class Search extends Component {
  state = {
    query: "Jurassic Park",
    books: [],
    message: "Search for Books To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  getBooks = () => {
    API.getBooks({
      query: this.state.query
    })
      .then(res =>
        this.setState({ 
          books: res.data,
          message: !res.data.length ? "No books found. Try a different query" : ""
          })
      )
      .catch(err => console.log(err));
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
              textAlign: "center"
            }}
          >
            <h1>(React) Google Books Search</h1>
            <h2>Search for and save books of interest</h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="book_search">
            <h5>Book Search</h5>
            <Form>
              <Form.Group controlID="formBookSearch">
                <Form.Label>{this.state.message}</Form.Label>
                <Form.Control 
                    type="text" 
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    placeholder="Enter book title" />
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit"
                disabled={!this.state.query}
                onClick={this.handleFormSubmit}
                >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Wrapper>
            <p>Results</p>
            <List>
              <Book />
            </List>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Search;
