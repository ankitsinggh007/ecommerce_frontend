import React, { useState } from "react";
import banner from "../assets/banner.png";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import Slider from "react-slick";

function Banner() {
  const bannerImage = [banner, banner1, banner2, banner3, banner4];
  const [index, setIndex] = useState(0);
  console.log(index, index);
  const settings = {
    dots: true,
    arrows: false,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-[99%] mx-auto z-0 ">
      <Slider {...settings} >
        {bannerImage.map((item, index) => {
          return (
            <div className="z-0" key={index}>
              <img
                className="object-contain mt-4 z-0 rounded-sm h-96 w-full"
                src={item}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;
