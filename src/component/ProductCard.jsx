import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { formatePrice } from "../utils/FormatePrice";
import { RatingDisplay } from "./RatingComponent";
function ProductCard({ item }) {
  console.log(item, "item");
  const Cart_Item = {
    ...item,
  };
  return (
    <Flex 
     flexDirection="column" 
     minHeight="22rem"
     maxHeight="22rem"
     minWidth="17rem"
     maxWidth="17rem"
     borderRadius='1rem'
     cursor='pointer'
     
     >
      {/* <Box boxSize='200px'
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
        </Flex> */}

      <Box
        backgroundColor="whiteSmoke"
        minHeight="75%"
        minWidth="75%"
        mt='20px'
        display='flex'
        pos='relative'
        justifyContent='center'
        alignItems='center'
      >

        <Image 
        pos='absolute' 
        src={Cart_Item?.images[0]?.url}
        maxWidth= '100%'
        p='20px'
        _hover={{ transform: 'scale(1.1)', transition: 'transform .5s' }}
        maxHeight= '100%'
        />
      </Box>
      <Flex 
      >
          <Text 
          width='50%'
          whiteSpace= 'nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
          fontWeight= '600'
          alignSelf='flex-start'

          >{Cart_Item?.name}</Text>

          <Text width='40%'
          whiteSpace= 'nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
          fontWeight= '600'
          alignSelf='flex-end'

          
          >{formatePrice(Cart_Item?.price)}</Text>

        </Flex>
        <Text textAlign='left'
          width='90%'
          fontSize='.9rem'
          whiteSpace= 'nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
          color='grey'
        
        >
          {Cart_Item.description}
        </Text>

      
          <Flex><RatingDisplay  rating={Cart_Item?.ratings}/>
          <Text color="grey">({Cart_Item.numOfReviews})</Text >
          </Flex>


    </Flex>
  );
}
export default ProductCard;
