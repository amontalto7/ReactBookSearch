import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import BookSearch from "../components/BookSearch";
import Wrapper from "../components/Wrapper";
import Jumbotron from "react-bootstrap/Jumbotron";
import Book from "../components/Book";


function Search() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron style={{ height: 200, clear: "both", paddingTop: 50, textAlign: "center" }}>
            <h1>(React) Google Books Search</h1>
            <h2>
                Search for and save books of interest
            </h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
          <Col>
                  <BookSearch/>
          </Col>
      </Row>
      <Row>
          <Col>
                  <Wrapper>
                      <p>Results</p>
                      <Book/>
                  </Wrapper>
          </Col>
      </Row>
    </Container>
  );
}

export default Search;
