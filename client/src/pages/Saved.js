import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";


function Saved() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        <Jumbotron style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
