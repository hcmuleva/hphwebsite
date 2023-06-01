import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../../assests/grid-img1.jpg'
import img2 from '../../assests/grid-img2.jpg'

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <div className="bg-yellow-200 py-5">
        <h1 className="mx-auto font-bold flex items-center justify-center">Over 40 million crates delivered worldwide</h1>
        <p className="mx-auto flex items-center justify-center mb-5">We know what works and what kids love! Check out #KiwiCo to see our community of makers & innovators.</p>
        <div className="w-11/12 mx-auto justify-center items-center">
        <Slider {...settings}>
            <div className="">
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img1" />
            </div>
      
        </Slider>
        </div>
      </div>
    );
  }
}