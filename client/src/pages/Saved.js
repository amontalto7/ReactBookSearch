import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Wrapper from "../components/Wrapper";
import { List } from "../components/List";
import Book from "../components/Book";
import API from "../utils/API";


class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        this.setState({
          books: res.data
        })
        // console.log(this.state.books)
      }
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
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
                textShadow: "1px 1px white",
                backgroundImage: "url(/images/Bookshelf.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: .9  
              }}
            >
              <h1>(React) Google Books Search</h1>
              <h4>Saved Books</h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Wrapper className="savedbooks">
            <h5>Saved Books</h5>
            {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      preview={book.link}
                      authors={book.authors}
                      synopsis={book.description}
                      image={book.image}
                      ContextButton={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}

            </Wrapper>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Saved;
