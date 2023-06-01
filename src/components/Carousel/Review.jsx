
import React, { Component } from "react";
import Slider from "react-slick";
import star from '../../assests/fivestar.png'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "react-bootstrap/Button";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
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
      <div className="bg-yellow-100 py-5">
        <div className="w-10/12 mx-auto justify-center items-center">
        <Slider {...settings}>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        <div className="bg-white p-3 w-75">
            <img src={star} alt="star" className="my-3"/>
            <h3 className="text-base">"The quality of your product is excellent for the price, and kids love the hands-on engagement!"</h3>
            <h4 className="text-base">-John Snow</h4>
          </div>
        </Slider>
          </div>
          <div className="mx-auto mt-5 flex items-center justify-center">
          <a href="www.google.com" className="text-black">
            See All Reviews ➜
          </a>
        </div>
          <Button variant="success" className="py-1 px-5 mt-3 fs-5 fw-semibold mx-auto d-flex justify-content-center" > Get Started <ArrowRightAltIcon style={{ fontSize: "200%" }} />
      </Button>
      </div>
    );
  }
}