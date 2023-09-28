import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class NewArrival extends Component {
    constructor(props){
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this)
    }
    next(){
        this.slider.slickNext();
    }
    previous(){
       this.slider.slickPrev();
    
    }

  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
        <h2>Coleta por Agente &nbsp; 
        <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} ><i className="fa fa-angle-left"></i></a>
        &nbsp; 
        <a className="btn btn-sm ml-2 site-btn" onClick={this.next}><i className="fa fa-angle-right"></i></a>
        </h2>
        <p>Todos os Agentes</p>
        </div>
        <Row>
        <Slider ref={c=>(this.slider=c)}{...settings}>
          <div>
          <Card className="image-box card">
          <img
            className="center"
            src="https://cdn.kastatic.org/ka-perseus-graphie/590d11f521cd24d851faec14de1c7a5880868817.svg"
          />

          <Card.Body>
            <p className="product-name-on-card"> Teste de nome</p>
          </Card.Body>
          <Card.Body>
            <p className="price-on-card"> Total : 120</p>
          </Card.Body>
        </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img
            className="center"
            src="https://static.todamateria.com.br/upload/gr/af/grafico_ibge_1.jpg"
          />

          <Card.Body>
            <p className="product-name-on-card"> Teste de nome</p>
          </Card.Body>
          <Card.Body>
            <p className="price-on-card"> Total : 120</p>
          </Card.Body>
        </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img
            className="center"
            src="https://cdn.kastatic.org/ka-perseus-graphie/590d11f521cd24d851faec14de1c7a5880868817.svg"
          />

          <Card.Body>
            <p className="product-name-on-card"> Teste de nome</p>
          </Card.Body>
          <Card.Body>
            <p className="price-on-card"> Total : 120</p>
          </Card.Body>
        </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img
            className="center"
            src="https://cdn.kastatic.org/ka-perseus-graphie/590d11f521cd24d851faec14de1c7a5880868817.svg"
          />

          <Card.Body>
            <p className="product-name-on-card"> Teste de nome</p>
          </Card.Body>
          <Card.Body>
            <p className="price-on-card"> Total : 120</p>
          </Card.Body>
        </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img
            className="center"
            src="https://cdn.kastatic.org/ka-perseus-graphie/590d11f521cd24d851faec14de1c7a5880868817.svg"
          />

          <Card.Body>
            <p className="product-name-on-card"> Teste de nome</p>
          </Card.Body>
          <Card.Body>
            <p className="price-on-card"> Total : 120</p>
          </Card.Body>
        </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img
            className="center"
            src="https://cdn.kastatic.org/ka-perseus-graphie/590d11f521cd24d851faec14de1c7a5880868817.svg"
          />

          <Card.Body>
            <p className="product-name-on-card"> Teste de nome</p>
          </Card.Body>
          <Card.Body>
            <p className="price-on-card"> Total : 120</p>
          </Card.Body>
        </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img
            className="center"
            src="https://cdn.kastatic.org/ka-perseus-graphie/590d11f521cd24d851faec14de1c7a5880868817.svg"
          />

          <Card.Body>
            <p className="product-name-on-card"> Teste de nome</p>
          </Card.Body>
          <Card.Body>
            <p className="price-on-card"> Total : 120</p>
          </Card.Body>
        </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img
            className="center"
            src="https://cdn.kastatic.org/ka-perseus-graphie/590d11f521cd24d851faec14de1c7a5880868817.svg"
          />

          <Card.Body>
            <p className="product-name-on-card"> Teste de nome</p>
          </Card.Body>
          <Card.Body>
            <p className="price-on-card"> Total : 120</p>
          </Card.Body>
        </Card>
          </div>
        </Slider>
        </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
