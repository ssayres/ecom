import React, { Component, Fragment } from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';
class Collection extends Component {
  render() {
    return (
      <Fragment>
      <br></br>
      <br></br>
        <Container className="text-center" fluid={true}>
        <div className="section title text-center mb-55"><h2>Exemplos</h2>
        <p>Exemplo</p>
        </div>
          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box-card">
            <img className="center" src=""/>
            <Card.Body>
            <p className="product-name-on-card">Raphinha</p>
            <p className="product-price-on-card">Raphinha</p>

            </Card.Body>
            </Card>
            </Col>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box-card">
            <img className="center" src=""/>
            <Card.Body>
            <p className="product-name-on-card">Raphinha</p>
            <p className="product-price-on-card">Raphinha</p>

            </Card.Body>
            </Card>
            </Col>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box-card">
            <img className="center" src=""/>
            <Card.Body>
            <p className="product-name-on-card">Raphinha</p>
            <p className="product-price-on-card">Raphinha</p>

            </Card.Body>
            </Card>
            </Col>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box-card">
            <img className="center" src=""/>
            <Card.Body>
            <p className="product-name-on-card">Raphinha</p>
            <p className="product-price-on-card">Raphinha</p>
            </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
        
      </Fragment>
    );
  }
}

export default Collection;
