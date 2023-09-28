import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
              <img className='slider-img' src="data:image/jpeg;base64,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"/>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }


export default HomeSlider
