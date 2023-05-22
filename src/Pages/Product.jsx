import { Flex,Text,Image, Spinner, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function Product({featured}) {
 const[Category,SetCategory] =useState(featured?'featured':'product');
 
  const {fetchedProduct}=useSelector(state=>state.Product);

  useEffect(()=>{
    if(fetchedProduct.message){
      toast(`${fetchedProduct.message}`);
    }
  },[fetchedProduct.message]);
console.log(fetchedProduct,"fetched")


const productComponenet=fetchedProduct?.allProduct?.map((item,index)=>{
  <ProductCard item={item}/>

});

 return (
    <Flex   justify='center' direction='column' border='1px solid black' >
      <Text>Featured Products</Text>
          <Flex border="1px solid red" direction='row' >
            {
              fetchedProduct?.loading?<Spinner m='auto' size='xl'/>:
              <Flex wrap='wrap' border='1px solid green' w='100%' justify='space-evenly'>
                {
                    fetchedProduct?.allProduct?.map((item,index)=>{
                 return(
                  <ProductCard item={item} key={index}/>
                 )
                
                })
              }
              </Flex>
              
            }
          </Flex>
 
 
 

       {
        fetchedProduct?.message && <ToastContainer/>
       } 
        
    </Flex>

  )
}

export default Product