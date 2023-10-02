import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Painel Coleta</h2>
            <p> Selecione uma coleta abaixo</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src=""
                />

                <Card.Body>
                  <p className="product-name-on-card"> Teste de nome</p>
                </Card.Body>
                <Card.Body>
                  <p className="price-on-card"> Total : 120</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src=""
                />

                <Card.Body>
                  <p className="product-name-on-card"> Teste de nome</p>
                </Card.Body>
                <Card.Body>
                  <p className="price-on-card"> Total : 120</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src=""
                />

                <Card.Body>
                  <p className="product-name-on-card"> Teste de nome</p>
                </Card.Body>
                <Card.Body>
                  <p className="price-on-card"> Total : 120</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src=""
                />

                <Card.Body>
                  <p className="product-name-on-card"> Teste de nome</p>
                </Card.Body>
                <Card.Body>
                  <p className="price-on-card"> Total : 120</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src=""
                />

                <Card.Body>
                  <p className="product-name-on-card"> Teste de nome</p>
                </Card.Body>
                <Card.Body>
                  <p className="price-on-card"> Total : 120</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className="image-box card">
            <img className="center" src=""/>       
              <Card.Body>
              <p className="product-name-on-card"> Teste de nome</p>
              </Card.Body>
              <Card.Body>
              <p className="price-on-card"> Total : 120</p>
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
