import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { formatePrice } from "../utils/FormatePrice";
import { MdOutlineDeleteForever } from "react-icons/md";

function CartCard({ prop }) {
  const Cart_Item = {
    name: prop.name,
    price: prop.price,
    quantity: prop.quantity,
    images: prop?.images[0].url,
  };

  return (
    <Flex p="20px"pos='relative' m="5px" bg="white"  border="1px solid black">
      <Image
      border="1px solid black"
        boxSize="100px"
        objectFit="contain"
        src={Cart_Item.images}
        alt={Cart_Item.name}
      />
      <Flex border="1px solid black" flexDirection="column" ml="20px" alignItems="flex-start">
        <Text fontSize="1.2rem" w="70%" noOfLines={1}>
          {Cart_Item.name}
        </Text>
        <Text fontSize=".6rem" color="grey"></Text>
        <Text fontSize="1.2rem" fontWeight="bold">
          {formatePrice(Cart_Item.price)}{" "}
        </Text>
      </Flex>
      <Flex pos={"absolute"} top='45%'right="30px"  >
          <MdOutlineDeleteForever fontSize="1.5rem" />
      </Flex>
    </Flex>
  );
}

export default CartCard;
