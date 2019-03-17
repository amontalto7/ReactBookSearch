import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";

function BookSearch() {
    return (
        <div className = "book_search">
        <h5>Book Search</h5>
        <Form>
            <Form.Group controlID="formBookSearch">
                <Form.Label>Book</Form.Label>
                <Form.Control type ="text" placeholder="Enter book title" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
        
    );
  }
  

export default BookSearch;


