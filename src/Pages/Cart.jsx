import { Box, Flex, Button, Text } from "@chakra-ui/react";
import CartCard from "../component/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { fetchCartDetails } from "../slices/Product";
function Cart() {
  const { user,isAuthectiacted } = useSelector((state) => state.User);

  const dispatch=useDispatch();

const  fetchCart=(cart)=>{
    console.log(cart,"cart")
    for(let i=0;i<cart.length;i++){
      dispatch(fetchCartDetails(cart[i].id));
    }
  }
  const {loading,message,list}=useSelector(state=>state.Product.Cart);

  useEffect(()=>{
      if(user && user?.cart?.length!==0){
        console.log(user,"user cart")
        fetchCart(user?.cart);
      }

  },[user,user?.cart]);


  return (
    <Flex justify="space-evenly">
      <Flex flexDirection="column" bg="#F1F3F6" width='50%'   >
        <Box height="70vh"  overflowY="scroll">
        {
          list?.map((ele,index)=>{
            return(
              <>
              <CartCard prop={ele} key={index}/>
              <hr/>
              </>
            )
          })
        }
        </Box>
        <hr />
        <Box boxShadow="lg" p="6" rounded="md" bg="white" padding="30px">
          <Button
            alignSelf="flex-end"
            type="submit"
            bg="#fb641b"
            w="14rem"
            fontSize="1.2rem"
            p="20px"
            borderRadius="2px"
            color="white"
          >
            Place order
          </Button>
        </Box>
      </Flex>
      <Flex
        border="none"
        boxShadow="dark-md"
        p="6"
        bg="#f1f3f6"
        width="15rem"
        fontSize="1.3rem"
        letterSpacing=".4px"
        rowGap="10px"
        flexDirection="column"
        justify="space-between"
      >
        <Text alignSelf="flex-start" color="grey">
          Price Details
        </Text>
        <hr />

        <Flex justify="space-between">
          <Text>Price(1 item)</Text>
          <Text>$599</Text>
        </Flex>
        <Flex justify="space-between">
          <Text>Delivery Charges</Text>
          <Text>$40</Text>
        </Flex>
        <hr />
        <Flex fontWeight="bold" justify="space-between">
          <Text>Toal Amount</Text>
          <Text>$399</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Cart;
