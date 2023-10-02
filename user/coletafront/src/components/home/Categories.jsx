import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Categorias</h2>
            <p> Selecione uma coleta abaixo</p>
          </div>
          <Row>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
              <Col className="p-0" key={1} xl={3} lg={6} md={2} sm={12} xs={12}>
                <Card className="h-100 w-80 text-center">             
                  <Card.Body>
                  <img className="center" src=""/>
                  <h5 className="category-name">Laurentino</h5>            
                  </Card.Body>
                </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={6} md={2} sm={12} xs={12}>
                <Card className="h-100 w-80 text-center">             
                  <Card.Body>
                  <img className="center" src=""/>
                  <h5 className="category-name">Laurentino</h5>
       
                  </Card.Body>
                </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={6} md={2} sm={12} xs={12}>
                <Card className="h-100 w-80 text-center">             
                  <Card.Body>
                  <img className="center" src=""/>
                  <h5 className="category-name">Laurentino</h5>
  
                  </Card.Body>
                </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={6} md={2} sm={12} xs={12}>
                <Card className="h-100 w-80 text-center">             
                  <Card.Body>
                  <img className="center" src=""/>
                  <h5 className="category-name">Laurentino</h5>
          
                  </Card.Body>
                </Card>
                </Col>
              </Row>
            </Col>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
            <Row>
            <Col className="p-0" key={1} xl={3} lg={6} md={2} sm={12} xs={12}>
              <Card className="h-100 w-80 text-center">             
                <Card.Body>
                <img className="center" src=""/>
                <h5 className="category-name">Laurentino</h5>            
                </Card.Body>
              </Card>
              </Col>
              <Col className="p-0" key={1} xl={3} lg={6} md={2} sm={12} xs={12}>
              <Card className="h-100 w-80 text-center">             
                <Card.Body>
                <img className="center" src=""/>
                <h5 className="category-name">Laurentino</h5>
     
                </Card.Body>
              </Card>
              </Col>
              <Col className="p-0" key={1} xl={3} lg={6} md={2} sm={12} xs={12}>
              <Card className="h-100 w-80 text-center">             
                <Card.Body>
                <img className="center" src=""/>
                <h5 className="category-name">Laurentino</h5>

                </Card.Body>
              </Card>
              </Col>
              <Col className="p-0" key={1} xl={3} lg={6} md={2} sm={12} xs={12}>
              <Card className="h-100 w-80 text-center">             
                <Card.Body>
                <img className="center" src=""/>
                <h5 className="category-name">Laurentino</h5>        
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
