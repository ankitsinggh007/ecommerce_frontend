import { Flex,Text,Image, Spinner, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { useSelector,useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { fetchAllProduct } from '../slices/Product';
// import Banner from '../component/Banner';
import Categories from "../component/Categories";
import FeaturedList from '../component/FeaturedList';

function Product({featured}) {
const dispatch=useDispatch();

 const[Category,SetCategory] =useState(featured?'featured':'product');
 
  const {fetchedProduct}=useSelector(state=>state.Product);

  const currentPage=1;



  useEffect(()=>{
    if(fetchedProduct.message){
      toast(`${fetchedProduct.message}`);
    }
    dispatch(fetchAllProduct(currentPage));
  },[dispatch]);


const productComponenet=fetchedProduct?.allProduct?.map((item,index)=>{
  <ProductCard item={item}/>

});

 return (
    // <Flex   justify='center' direction='column' w='90%' m="auto"  >
    //   <Text>Featured Products</Text>
    //       <Flex  direction='row' >
    //         {
    //           fetchedProduct?.loading?<Spinner m='auto' size='xl'/>:
    //           <Flex wrap='wrap'  w='100%' justify='space-evenly'>
    //             {
    //               // <ProductCard item={fetchedProduct?.allProduct[0]} key={1}/>
    //           }
    //           </Flex>
              
    //         }


    //       </Flex>
    //       <Flex m='auto'>pages</Flex>
           

    //    {
    //     fetchedProduct?.message && <ToastContainer/>
    //    } 
        
    // </Flex>
    <>
    <Categories/>
{/* <Banner/> */}
<FeaturedList/>

    </>
  )
}

export default Product