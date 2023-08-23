import Slider from "react-slick";
import {formatePrice} from "../utils/FormatePrice"
export const Sliders = ({ items, banner }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-4 shadow-lg w-full  ">
      <div className="flex">
        <div
          className={`flex flex-col w-fit h-80 items-center  border border-indigo-200`}
          style={{
            backgroundImage: `url(${banner.img})`,
            backgroundPosition: "0px bottom",
            backgroundBlendMode: "luminosity",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" bg-white shadow-sm mt-14">
            <span className="font-roboto  text-3xl line-clamp-2 tracking-widest leading-10 ">
              {banner.name}
            </span>
            <button className="bg-primary text-white w-20 rounded-sm px-3 py-3">
              VIEW ALL
            </button>
          </div>
        </div>
        <Slider className="w-[70%]  " {...settings}>
          {items.map((obj, index) => {
            return (
              <div
                className="flex flex-col  "
                key={index}
              >
                <div key={index} className="h-56 ">
                  <img
                    className="w-full h-full object-contain"
                    src={obj.img}
                    alt=""
                  />
                </div>
                <span>{obj.name}</span>
                <br/>
                <span>{ formatePrice( obj.price)}</span>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const FeaturedList = () => {
  const items = [
    {
      name: "Premuim Power Bank",
      price: 3000,
      img: "https://rukminim2.flixcart.com/image/832/832/l5fnhjk0/power-bank/u/v/f/-original-imagg3utd8nzx6hu.jpeg?q=70",
    },
    {
      name: "Lenovo 23.8 inch",
      price: 9000,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70",
    },
    {
      name: "Premuim Power Bank",
      price: 3000,
      img: "https://rukminim2.flixcart.com/image/832/832/l5fnhjk0/power-bank/u/v/f/-original-imagg3utd8nzx6hu.jpeg?q=70",
    },
    {
      name: "Lenovo 23.8 inch",
      price: 9000,
      img: "https://rukminim2.flixcart.com/image/832/832/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
    },
    {
      name: "Premuim Power Bank",
      price: 3000,
      img: "https://rukminim2.flixcart.com/image/832/832/l5fnhjk0/power-bank/u/v/f/-original-imagg3utd8nzx6hu.jpeg?q=70",
    },
    {
      name: "Lenovo 23.8 inch",
      price: 9000,
      img: "https://rukminim2.flixcart.com/image/832/832/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
    },
  ];
  const banner = [
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90&quot",
      name: "Best of Electronics",
    },
  ];

  return (
    <div>
      <br />
      <Sliders items={items} banner={banner[0]} />
    </div>
  );
};

export default FeaturedList;
