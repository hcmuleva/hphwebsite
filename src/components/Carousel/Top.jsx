import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1_d from '../../assests/home-hero-intl-slide1-d.webp'
import slide3_d from '../../assests/home-hero-intl-slide3-d.webp'

function Top() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1_d}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {slide3_d}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Top;