import React, { useEffect } from "react";
import { fetchAllProduct } from "../slices/Product";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
function ProductList() {
  const dispatch = useDispatch();

  const { allProduct, loading, message } = useSelector(
    (state) => state.Product.fetchedProduct
  );
  console.log(allProduct, loading, message, "form list");
  useEffect(() => {
    dispatch(fetchAllProduct({page:1,categories:'mobile'}));
  }, []);

  return <div className=" flex flex-row flex-wrap justify-center ">

    {
      allProduct?.map((product,index)=>{
        return(
          <ProductCard item={product} key={index}/>
        )
      })
    }



  </div>;
}

export default ProductList;
