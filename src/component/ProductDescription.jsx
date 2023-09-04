import { Flex, Text, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RatingDisplay } from "./RatingComponent";
import AddToCartCounter from "./AddToCartCounter.jsx";
import ImagesViewer from "./ImageViewer";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { formatePrice } from "../utils/FormatePrice";
import { productDetails } from "../slices/Product";
import { TbTruckReturn, TbTruckDelivery } from "react-icons/tb";
import { Icon } from "@chakra-ui/react";
import { formateName } from "../utils/FormateName";
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
        <div className="flex md:flex-row flex-col    m-2 p-2 h-fit justify-evenly ">
          <div className="flex flex-col  p-2  md:w-2/5 ">
            <ImagesViewer
              images={product?.images.map((ele) => ele.url)}
              stock={product?.Stock}
            />
          </div>

          {/* <Flex  w={['90%','40%']}  justifyContent='space-evenly' flexDirection="column"> */}

          <div className="flex flex-col md:w-2/4 w-full  sm:border-t md:border-l border-gray-400 p-9 justify-evenly  items-start   ">
            <span 
            className="  flex text-2xl w-full mb-2  line-clamp-1  justify-center md:justify-start   font-bold ">
              {formateName(product?.name)}
            </span>
            <span className=" text-sm  flex justify-center md:justify-start line-clamp-3 border border-black   w-full text-gray-500 ">
              {product?.description}
            </span>
            <RatingDisplay rating={product?.ratings} />
            <hr className="border border-gray-300 m-2" />

            <span className="text-xl">{formatePrice(product?.price)}</span>

            <AddToCartCounter stock={product?.Stock} id={product?._id} />
            <hr width="75%" />

            <div>
              <div className="flex flex-row">
                <TbTruckDelivery className="text-5xl text-[#EEA363]" />

                <div className="flex flex-col items-start ">
                  <span className="text-md">Free Delivery</span>
                  <span className="text-xs text-gray-400">
                    Enter Your Postal Code for Delivery Availablity{" "}
                  </span>
                </div>
              </div>
              <hr width="77%" />

              <div className="flex mt-3 flex-row">
                <TbTruckReturn className="text-5xl text-[#EEA363]" />

                <div className="flex flex-col items-start ">
                  <span className="text-md">Return Policy</span>
                  <span className="text-xs text-gray-400">
                    Free 30 Days Delivery Returns.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}

export default ProductPage;
