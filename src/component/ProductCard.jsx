import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { formatePrice } from "../utils/FormatePrice";
import { RatingDisplay } from "./RatingComponent";
import { NavLink } from "react-router-dom";
import outOfstock from "../assets/soldout/soldout-md.png"

function ProductCard({ item }) {
  console.log(item, "item");
  const Products_Item = {
    ...item,
  };
  console.log(Products_Item.Stock,"Product")
  return (
    <NavLink
     to={`products/${Products_Item._id}`}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "22rem",
        maxHeight: "22rem",
        minWidth: "17rem",
        maxWidth: "17rem",
        borderRadius: "1rem",
        cursor: "pointer",
      }}
    >
      <Box
        backgroundColor="whiteSmoke"
        minHeight="75%"
        minWidth="75%"
        mt="20px"
        display="flex"
        pos="relative"
        justifyContent="center"
        alignItems="center"

      >
        <Image
          pos="absolute"
          src={Products_Item?.images[0]?.url}
          maxWidth="100%"
          p="20px"
          _hover={{ transform: "scale(1.1)", transition: "transform .5s" }}
          maxHeight="100%"
        />
         {
        
          Products_Item?.Stock<=0 && <Image color={"red"} src={outOfstock}
          objectFit='contain'
          pos={"absolute"}
          top="0"
          right="0"
         

          />
        }
      </Box>
      <Flex>
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
      </Flex>
      <Text
        textAlign="left"
        width="90%"
        fontSize=".9rem"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        color="grey"
      >
        {Products_Item.description}
      </Text>

      <Flex>
        <RatingDisplay rating={Products_Item?.ratings} />
        <Text color="grey">({Products_Item.numOfReviews})</Text>
      </Flex>

      <Button
        border="1px solid black"
        p="10px 0px 10px 0px"
        w="50%"
        borderRadius="25px"
        backgroundColor={Products_Item?.Stock<=0?"greywhite":"white"}
        disabled={Products_Item?.Stock<=0?"true":"false"}
        _hover={Products_Item?.Stock<=0?"disabled":""}
      >
        Add To Cart
      </Button>
    </NavLink>
  );
}
export default ProductCard;
