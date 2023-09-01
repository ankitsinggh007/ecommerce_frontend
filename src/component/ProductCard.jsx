import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { formatePrice } from "../utils/FormatePrice";
import { RatingDisplay } from "./RatingComponent";
import { NavLink } from "react-router-dom";
import outOfstock from "../assets/soldout/soldout-md.png"
import {MdReviews} from "react-icons/md"
function ProductCard({ item }) {
  const Products_Item = {
    ...item,
  };
  return (
    <NavLink
     to={`products/${Products_Item._id}`}
      className=' w-72 rounded-md    p-2 m-1 bg-[#FFFFFF] flex flex-col justify-between  items-center'
    >
      <div className="w-full h-56 flex flex-row justify-center ">
      <img 
      className="object-contain h-full"
          src={Products_Item?.images[0]?.url}
          
/>
      </div>
<div className="place-self-end mt-1 flex flex-col  text-left w-full max-h-fit">
<span className="truncate text-xl ">{Products_Item?.name}</span>
<span className="line-clamp-2 text-ellipsis mt-1 text-gray-500 text-sm">{Products_Item?.description}</span>
<span className="truncate text-lg font-semibold ">{formatePrice(Products_Item?.price)} </span>
<span className="flex flex-row  "><MdReviews className="text-[#388E3C] text-2xl mr-1 "/> <span> ({Products_Item?.numOfReviews})</span> </span>

</div>
          
    
    </NavLink>
  );
}
export default ProductCard;
