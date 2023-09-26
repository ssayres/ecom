import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Featured Product</h2>
            <p> Exemplo</p>
          </div>
          <Row>
            <Col xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card style={{ width: "18rem" }}>

                <Card.Body>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
