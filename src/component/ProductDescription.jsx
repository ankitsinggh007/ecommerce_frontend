import { Flex, Text, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RatingDisplay } from "./RatingComponent";
import AddToCartCounter from "./addToCartCounter";
import ImagesViewer from "./ImageViewer";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { formatePrice } from "../utils/FormatePrice";
import { productDetails } from "../slices/Product";
import { TbTruckReturn, TbTruckDelivery } from "react-icons/tb";
import { Icon } from "@chakra-ui/react";
import {formateName} from '../utils/FormateName'
function ProductPage() {
  const [Product, setProduct] = useState();
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { loading, message, product } = useSelector(
    (state) => state.Product.productDetails
  );

  console.log(loading, message, product, "form prodid");
  useEffect(() => {
    console.log("inside useEffect");
    dispatch(productDetails(id));
  }, [dispatch]);

  return (
    <Box>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <Flex  direction={['column','row','row']}  h="90vh" justifyContent={"space-evenly"}>
          <Flex boxShadow='base' width="40%"  p='10px' direction={"column"}>
            <ImagesViewer images={product?.images.map((ele) => ele.url)} stock={product?.Stock} />
          </Flex>

          <Flex  w={['90%','40%']}  justifyContent='space-evenly' flexDirection="column">
            <Text
              fontSize="1.7rem"
              textAlign="left"
              width="fit-content"
              noOfLines={[1, 2, 2]}
              fontWeight="semibold"
            >
              {formateName(product?.name)}
            </Text>
            <Text
              width="70%"
              fontWeight="light"
              textAlign="left"
              height="3rem"
              maxHeight="8rem"
              noOfLines={[1, 2,3]}

            >
              {product?.description}
            </Text>
            <RatingDisplay rating={product?.ratings}/>
            <hr width='75%'/>
              

            <Text
              fontSize="1.3rem"
              fontWeight="semibold"
              width="fit-content"
            >
              {formatePrice(product?.price)}
            </Text>
            <hr width='75%'/>

            <AddToCartCounter stock={product?.Stock} id={product?._id}  />
            <hr width='75%'/>
            
            <Flex boxShadow='sm' direction='column'>
            <Flex   m='1px' width='70%' p='1rem'>
              <Icon
                as={TbTruckDelivery}
                fontSize={["1rem", "2rem", "3rem"]}
                color="#EEA363"
              />

              <Flex direction="column" padding="1px 2px 1px 2px">
                <Text fontWeight="500" textAlign="left">
                  Free Delivery
                </Text>
                <Text
                  fontWeight="500"
                  fontSize=".8rem"
                  color="grey"
                  textDecoration="underline"
                >
                  Enter Your Postal Code for Delivery Availablity{" "}
                </Text>
              </Flex>
            </Flex>
            <hr width='77%'/>

            <Flex  m='1px' width='70%' p='1rem'>
              <Icon
                as={TbTruckReturn}
                fontSize={["1rem", "2rem", "3rem"]}
                color="#EEA363"
              />
              <Flex direction="column" padding="1px 2px 1px 2px">
                <Text fontWeight="500" textAlign="left">
                  Free Delivery
                </Text>
                <Text fontWeight="500" fontSize=".8rem" color="grey">
                  Free 30 Days Delivery Returns.
                  <Text display="inline" textDecoration="underline">
                    Details
                  </Text>{" "}
                </Text>
              </Flex>
            </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}

export default ProductPage;
