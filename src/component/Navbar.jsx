import { Box,Input,Text,Button,Flex,Icon } from "@chakra-ui/react";
import { Search2Icon} from '@chakra-ui/icons'
import { FaShoppingCart } from "react-icons/fa";
function navbar() {
  return (
    <Flex cursor='pointer' h='55px' w='100%' bg='#2874f0' align='center' justify='space-evenly'>
    <Flex >
      <Text color='white' fontSize='1.7rem' fontWeight="bold"  fontFamily='roboto' >Flipkart</Text>
    </Flex>
    <Flex >
      <Text color='white' fontSize='1.4rem' borderLeft='2px solid white' pl='5px'   fontFamily='roboto' >Product</Text>
    </Flex>
    <Flex align='center' w='40%' pos='relative' >
    <Input bg='white' variant='outline' size='md'  boxShadow='lg' placeholder='Search for Products...' />
    <Search2Icon boxSize='25px' color='grey' bg='white'  right='10px' pos='absolute' />
    </Flex>
    <Flex align='center' gap='1'>
      <Icon color='white' fontSize='1.2rem' as={FaShoppingCart}/>
      <Text color='white' fontSize='1.2rem' fontWeight='semi-bold'>Cart</Text>
    </Flex>
    <Box w='10%'>
      <Button color='#2874f0' bg='white' w='100%' >Login</Button>
    </Box>
  </Flex>
  )
}

export default navbar