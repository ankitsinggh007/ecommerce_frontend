import { Box, Flex, Image, Text } from '@chakra-ui/react'
import {AiFillStar} from 'react-icons/ai'
import { Icon } from '@chakra-ui/react'
function ProductCard() {
    const Cart_Item={
        name:'Slippers For Men Flip Flops Hotel Spa Massage Chappal Bedroom Carpet Black Slippers',
        price:200,
        quantity:1,
        reviews:2.7,
        no_of_review:100,
        images:'https://rukminim1.flixcart.com/image/832/832/kuof5ow0/slipper-flip-flop/w/g/c/3-iluf1015-w-black-36-p-drunken-black-original-imag7qsf6fd67gka.jpeg?q=70'
      }
  return (
    <Flex border='1px solid black' mt='30px' flexDirection='column' align='center' maxWidth='20%'>
         <Image boxSize='200px' src={Cart_Item.images} alt='Dan Abramov' />
        <Flex flexDirection='column'ml='20px' rowGap='5px' justify='flex-end' align='flex-start'>
        <Text textAlign='left'>{Cart_Item.name}</Text>
        <Flex  columnGap='5px' >
            
            <Flex  bg='green' color='white' p='3px' justify='center' align='center' columnGap='2px'>
                <Text>{Cart_Item.reviews}</Text>
                <Icon fontSize='1rem' as={AiFillStar}/>

                </Flex>
            <Text fontSize='1.1rem'>({Cart_Item.no_of_review})</Text>
        </Flex>
        <Text fontSize='1.3rem' fontWeight='bold' >₹{Cart_Item.price}</Text>
        </Flex>
    </Flex>
  )
}

export default ProductCard