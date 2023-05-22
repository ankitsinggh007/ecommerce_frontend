import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import {AiFillStar} from 'react-icons/ai'
import { Icon } from '@chakra-ui/react'
function ProductCard({item}) {
  console.log(item,"item")
    const Cart_Item={
        ...item
      }
  return (
    <Flex border='1px solid black' mt='30px' flexDirection='column' align='center' maxWidth='20%'>
         <Box boxSize='200px'
         border='1px solid black' 
         alt={Cart_Item.name}   
         backgroundImage={Cart_Item?.images[0]?.url}
         backgroundPosition="center"
         backgroundSize= 'contain'
         backgroundRepeat="no-repeat" />
        <Flex flexDirection='column' align='center' rowGap='5px' justify='flex-end' >
        <Text  fontSize='1.5rem'>{Cart_Item.name}</Text>
        <Flex  columnGap='5px' >
            
            <Flex  bg='green' color='white' p='3px' justify='center' align='center' columnGap='2px'>
                <Icon fontSize='1rem' as={AiFillStar}/>
                <Text>{Cart_Item.ratings}</Text>

                </Flex>
            <Text fontSize='1.1rem'>({Cart_Item.numOfReviews})</Text>
        </Flex>
        <Text fontSize='1.3rem' fontWeight='bold' >₹{Cart_Item.price}</Text>
        </Flex>
    </Flex>
  )
}
export default ProductCard