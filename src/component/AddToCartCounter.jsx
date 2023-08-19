import { Button, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addItemToCart, loadUser } from "../slices/User";


const AddToCartCounter=({ stock ,id})=> {

  const dispatch=useDispatch();
  const [counter, setcounter] = useState(stock ? stock : 1);

  const [message, setmessage] = useState("");
  const [disable, setdisable] = useState(false);
 
  const handleCounter = (e) => {
    if (e.target.innerHTML == "+") {
      if (stock > counter) {
        setcounter(counter + 1);
      } else {
        setmessage("item is out of stock");
      }
    } else {
      if (counter == 1) {
        setmessage(`item can't be in negative`);

        disable(true);
      } else {
        setcounter(counter - 1);
      }
    }
  };


  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);


    const addToCartHandler=()=>{
      console.log(id,"id");
        console.log(counter,"counter");
      dispatch(addItemToCart({id,counter}));
      dispatch(loadUser());



    }

  return (
    <Flex
      direction="column"
      height="10rem"
      minHeight="7rem"
      justifyContent="space-evenly"
    >
      <Flex
        alignItems="center"
        p="10px"
        justifyContent="space-between"
        maxWidth="50%"
        
      >
        <Flex
        hidden={stock<=0?"hidden":""}
          border="none"
          minWidth="7rem"
          maxWidth="10rem"
          borderRadius="2rem"
          justifyContent="space-evenly"
          cursor="pointer"
          alignItems="center"
          backgroundColor="whitesmoke"
        >
          <Button
            backgroundColor="whitesmoke"
            disable={disable}
            onClick={handleCounter}
          >
            -
          </Button>
          <span>{counter}</span>
          <Button backgroundColor="whitesmoke" onClick={handleCounter}>
            +
          </Button>
        </Flex>
        {stock < 2 && stock==0 && (
          <Text spacing="2px">
            only <b>{stock}</b> item left
          </Text>
        )}
        {stock<=0 && (
          <Text spacing="2px" fontSize={"25px"}>
            Out of stock 
          </Text>
        )}
      </Flex>

      <Flex p="5px" minWidth="40%" width="75%" justifyContent="space-between">
        <Button
        disable={stock<=0}
          
          padding="1.5rem 3.5rem 1.5rem 3.5rem"
          borderRadius="5rem"
          backgroundColor={stock<=0?"grey":"#2874F0"}
          color="white"
          _hover={stock<=0?disable:''}
        >
          Buy Now{" "}
        </Button>
        <Button
        disable={stock<=0}
          padding="1.5rem 3.5rem 1.5rem 3.5rem"
          borderRadius="5rem"
          backgroundColor={stock<=0?"grey":"#FF7253"}
          color="white"
          _hover={stock<=0?disable:''}
          onClick={addToCartHandler}
        >
          Add To Cart {counter}
        </Button>
      </Flex>
      {message && <ToastContainer />}
    </Flex>
  );
}

export default AddToCartCounter;
