import React, { useState,useEffect } from "react";
import { fetchAllProduct } from "../slices/Product";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"
import { useLocation,useParams } from "react-router-dom";
import Pagination from "./Pagintaion";
function ProductList() {
  const dispatch = useDispatch();

  const location=useParams();
  const {categories}=location;
  const [Page,setPage]=useState(1);
  const [Limit,setLimit]=useState(10);
  const { allProduct, loading, message } = useSelector(
    (state) => state.Product.fetchedProduct
  );
  console.log(allProduct, loading, message, "form list");
  useEffect(() => {
    dispatch(fetchAllProduct({page:Page,categories:categories}));
  }, [Page]);

  return <div className="flex flex-col flex-wrap m-5 ">

    
  <div className="flex flex-row border h-fit border-black flex-wrap m-5  justify-center">
  <div className="border h-fit w-[86%] border-b-gray-300 text-gray-600 w- cursor-pointer flex flex-row justify-between">
      <div className="w-[40%] flex justify-between">
      <span className="hover:text-primary">Sort By </span>
      <span className="hover:text-primary">Price--High to Low</span>
      <span className="hover:text-primary">Price--Low to High</span>
      <span className="hover:text-primary">Newest First</span>
      </div>
      <span>(Showing {Page} – {Page*8} products of 4,054 products)</span>
    </div>
    {
      allProduct?.map((product,index)=>{
        return(
          <ProductCard item={product} key={index}/>
        )
      })
    }
    </div>

      <Pagination current={Page} setPage={setPage} limit={Limit}/>

  </div>;
}

export default ProductList;
