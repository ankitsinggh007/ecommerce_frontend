import { Flex, Image,Text } from '@chakra-ui/react'
import React from 'react'

function CartCard() {
    const Cart_Item={
        name:'Slippers For Men Flip Flops Hotel Spa Massage Chappal Bedroom Carpet Black Slippers',
        price:200,
        quantity:1,
        images:'https://rukminim1.flixcart.com/image/832/832/kuof5ow0/slipper-flip-flop/w/g/c/3-iluf1015-w-black-36-p-drunken-black-original-imag7qsf6fd67gka.jpeg?q=70'
      }
      
    return (

    <Flex p='20px' bg='white'>
        <Image
    boxSize='100px'
    objectFit='cover'
    src={Cart_Item.images}
    alt={Cart_Item.name}
  />
        <Flex flexDirection='column' ml='20px' alignItems='flex-start'>
        <Text fontSize='1.2rem' >{Cart_Item.name}</Text>
        <Text fontSize='.6rem' color='grey' ></Text>
        <Text fontSize='1.2rem' fontWeight='bold' >{Cart_Item.price}</Text>
        <Flex>
            <Text fontSize='1.2rem' fontWeight='bold'>Remove</Text>
        </Flex>
        </Flex>
    </Flex>
  )
}

export default CartCard