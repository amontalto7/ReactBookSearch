import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
// import BookSearch from "../components/BookSearch";
import Wrapper from "../components/Wrapper";
import Jumbotron from "react-bootstrap/Jumbotron";
import Book from "../components/Book";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { List } from "../components/List";
import "./style.css";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
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
                <Form.Label>Book</Form.Label>
                <Form.Control type="text" placeholder="Enter book title" />
              </Form.Group>
              <Button variant="primary" type="submit">
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
