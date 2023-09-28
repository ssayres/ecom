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
                  src="https://64.media.tumblr.com/ff724f2e86b01702f4dd9e232e6685f4/bbc5ec926424501e-27/s1280x1920/4af8eaf80038dde5c650d4643cc37c271ac4168e.jpg"
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
                  src="https://64.media.tumblr.com/a7ffd55bbafbc53d95fed9c512d52f04/e4e72c000f0d7c20-a0/s540x810/522517cb475cec1be40a7f752a8b78ed493cb688.jpg"
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
                  src="https://64.media.tumblr.com/d17eeeb35a3656850cc0ec2a1d831adb/3e380b86d296d2e4-01/s1280x1920/33860d0caa57e9bda389c00311572acf45cef6b9.jpg"
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
                  src="https://64.media.tumblr.com/fec6cc6a758e3ea71b0f2272992418cd/296a83bec1269378-42/s1280x1920/489627669888648878e4b3f5876b2d773379bc28.jpg"
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
            <img className="center" src="https://64.media.tumblr.com/1a5d6a7a293000696603473fcf21823c/92e2b2538647c77a-51/s640x960/9f8d7ce19238e990ebee8299a9f08661a4e39a60.jpg"/>       
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
