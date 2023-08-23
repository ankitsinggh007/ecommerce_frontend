import React, { useState } from "react";
import banner from "../assets/banner.png";
import banner1 from "../assets/banner_1.jpg";
import banner2 from "../assets/banner_2.jpg";
import banner3 from "../assets/banner_3.jpg";
import banner4 from "../assets/banner_4.jpg";
import Slider from "react-slick";

function Banner() {
  const bannerImage = [banner, banner1, banner2, banner3, banner4];
  const [index, setIndex] = useState(0);
  console.log(index, index);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-[96%] pt-1 mx-auto z-0 ">
      <Slider {...settings}>
        {bannerImage.map((item, index) => {
          return (
            <div className="z-2" key={index}>
              <img
                className="object-fill mt-10 rounded-sm h-96 w-full"
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
