import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rapha from '../../assets/images/Raphinha_img.jpg';
import Rapha2 from '../../assets/images/logistica.jpg';
import Rapha3 from '../../assets/images/transporteAereo.jpg';


export class HomeSlider extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
        <div>
          <Slider {...settings}>
            <div>
              <img className='slider-img' src={Rapha}/>
              </div>
            <div>
            <img className='slider-img' src={Rapha2}/>
            </div>
            <div>
            <img className='slider-img' src={Rapha3}/>
            </div>
          </Slider>
        </div>
      );
    }
  }


export default HomeSlider
