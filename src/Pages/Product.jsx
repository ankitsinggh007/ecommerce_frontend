import { Flex,Text,Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import ProductCard from '../component/ProductCard';

function Product({featured}) {
 const[Category,SetCategory] =useState(featured?'featured':'product');
    return (
    <Flex  flexDirection='column' align='center' >

        <Text>Featured Products</Text>
        <Flex border='1px solid black' justify='center' flexWrap='wrap' columnGap='10px'  >
        <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/> <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        
        </Flex>
    </Flex>

  )
}

export default Product