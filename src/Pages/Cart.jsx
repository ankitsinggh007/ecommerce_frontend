import { Box, Flex,Button,Text } from "@chakra-ui/react"
import CartCard from "../component/CartCard"

function Cart() {
  
  
    return (
    <Flex justify='space-evenly'  >
      <Flex  flexDirection='column' bg='white'>
      <CartCard/>
      <hr/>

      <Box boxShadow='lg' p='6' rounded='md' bg='white'  padding='30px'>
      <Button alignSelf='flex-end'type='submit' bg='#fb641b' w='14rem' fontSize='1.2rem' p='20px'  borderRadius='2px' >Place order</Button>

      </Box>

        </Flex>
        <Flex border='none'  boxShadow='dark-md' p='6'  bg='#f1f3f6' width='15rem' fontSize='1.3rem' letterSpacing='.4px' rowGap='10px' flexDirection='column' justify='space-between'  >
            <Text alignSelf='flex-start' color='grey'>Price Details</Text>
            <hr />
            
            <Flex justify='space-between' >
            <Text >Price(1 item)</Text>
            <Text>$599</Text>
            </Flex>
            <Flex justify='space-between'>
            <Text>Delivery Charges</Text>
            <Text>$40</Text>
            </Flex>
            <hr/>
            <Flex fontWeight='bold' justify='space-between'>
            <Text>Toal Amount</Text>
            <Text>$399</Text>
            </Flex>
            </Flex>      
    </Flex>
  )
}

export default Cart