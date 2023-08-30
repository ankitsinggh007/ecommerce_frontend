import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { formatePrice } from "../utils/FormatePrice";
import { RatingDisplay } from "./RatingComponent";
import { NavLink } from "react-router-dom";
import outOfstock from "../assets/soldout/soldout-md.png"
import {MdReviews} from "react-icons/md"

function ProductCard({ item }) {
  console.log(item, "item");
  const Products_Item = {
    ...item,
  };
  console.log(Products_Item.Stock,"Product")
  return (
    <NavLink
     to={`products/${Products_Item._id}`}
      className='border w-1/4  border-black justify-center p-3 m-1 bg-[#FFFFFF] flex flex-col justify-between  items-center'
    >
      <div className="w-full h-80 ">
      <img 
      className="object-contain h-full"
          src={Products_Item?.images[0]?.url}
          // className="object-cover"
/>
      </div>
<div className="place-self-end flex flex-col  text-left w-full max-h-fit">
<span className="truncate text-xl ">{Products_Item?.name}</span>
<span className="line-clamp-2 text-ellipsis mt-1 text-gray-500 text-sm">{Products_Item?.description}</span>
<span className="truncate text-lg font-semibold ">{formatePrice(Products_Item?.price)} </span>
<span className="flex flex-row  "><MdReviews className="text-[#388E3C] text-2xl mr-1 "/> <span> ({Products_Item?.numOfReviews})</span> </span>

</div>
         {/* {
        
          Products_Item?.Stock<=0 && <Image color={"red"} src={outOfstock}
          objectFit='contain'
          pos={"absolute"}
          top="0"
          right="0"
         

        
        } */}
      {/* <Flex>
        <Text
          width="50%"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontWeight="600"
          alignSelf="flex-start"
        >
          {Products_Item?.name}
        </Text>

        <Text
          width="40%"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontWeight="600"
          alignSelf="flex-end"
        >
          {formatePrice(Products_Item?.price)}
        </Text>
      </Flex> */}
      {/* <Text
        textAlign="left"
        width="90%"
        fontSize=".9rem"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        color="grey"
      >
        {Products_Item.description}
      </Text> */}

      {/* <Flex>
        <RatingDisplay rating={Products_Item?.ratings} />
        <Text color="grey">({Products_Item.numOfReviews})</Text>
      </Flex> */}

      {/* <Button
        border="1px solid black"
        p="10px 0px 10px 0px"
        w="50%"
        borderRadius="25px"
        backgroundColor={Products_Item?.Stock<=0?"greywhite":"white"}
        disabled={Products_Item?.Stock<=0?"true":"false"}
        _hover={Products_Item?.Stock<=0?"disabled":""}
      >
        Add To Cart
      </Button> */}
    </NavLink>
  );
}
export default ProductCard;
