import { Button, Flex, Icon, Modal, Spacer } from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Textarea,
  Text,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";
import InitialFocus from "../component/modal";

function UpdateStore() {
  const [activeTab, setactiveTab] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const addItems = (e) => {};

const toggleModal=()=>{
    if(isOpen) return setIsOpen(false);
    return setIsOpen(true);
}


const deleteItems=()=>{

}

const updateItems=()=>{

}












  return (
    <Flex p="10px">
      <Flex
        borderRight="1px solid gray"
        p="7px"
        width="17.1vw"
        h="100vh"
        direction="column"
      >
        <Button
          mt="10px"
          bg="#fb641b"
          fontSize="1.2rem"
          color="white"
          onClick={addItems}
        >
          Add Item <AddIcon ml="7px" />
        </Button>
        <Button mt="10px" bg="#fb641b" fontSize="1.2rem" color="white" onClick={toggleModal}>
          Edit Item
          <EditIcon ml="7px" />
        </Button>
      </Flex>
      <Flex   w="85%" >
        {/* <form style={{boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,borderRadius:'2%',backgroundColor:'#F7FAFC',width:'50%',padding:'40px',fontFamily:'roboto',fontWeight:"bold",textShadow:"revert",margin:'auto'}}>
         <Text fontSize='4xl' color='#fb641b'>Add Items </Text>
          <FormControl >
            <FormLabel>name</FormLabel>
            <Input type="text" />
          </FormControl>
          <Spacer/>
          <Spacer/>
          <FormControl>
            <FormLabel>description</FormLabel>
            <Textarea placeholder="write description here..." />
          </FormControl>
          <Spacer/>
          <Spacer/>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Input type='text' />
          </FormControl>
          <Spacer/>
          <Spacer/>
          <Flex>
          <FormControl w='40%'>
            <FormLabel>Amount in $ inr</FormLabel>
            <NumberInput defaultValue={0} min={10}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput> 
          </FormControl>
          <Spacer/>
          <Spacer/>
          <FormControl  w='40%'>
            <FormLabel>Stock</FormLabel>
            <NumberInput defaultValue={0}  min={0}>
            <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput> 
          </FormControl>
          </Flex>
          <Spacer/>
          <Spacer/>
          <Flex justifyContent='flex-end' mt='40px'>
          <Button mt="10px"
          width="6rem"
          bg="whitesmoke"
          fontSize="1.2rem"
          border='1px solid black'
          mr='40px'
          color="black">
          cancel
        </Button>
        <Button
          mt="10px"
          bg="#fb641b"
          width="6rem"
          fontSize="1.2rem"
          color="white"
          mr='7px'
          onClick={addItems}
        >
          Add Item 
        </Button>
          </Flex>
        </form> */}
        <Flex w='100%'>
            {/* <InitialFocus ISonOpen={isOpen}></InitialFocus> */}
            <form style={{boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,borderRadius:'2%',backgroundColor:'#F7FAFC',width:'50%',padding:'40px',fontFamily:'roboto',fontWeight:"bold",textShadow:"revert",margin:'auto'}}>
         <Text fontSize='4xl' color='#fb641b'>Edit Item </Text>
          <FormControl >
            <FormLabel>name</FormLabel>
            <Input type="text" />
          </FormControl>
          <Spacer/>
          <Spacer/>
          <FormControl>
            <FormLabel>description</FormLabel>
            <Textarea placeholder="write description here..." />
          </FormControl>
          <Spacer/>
          <Spacer/>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Input type='text' />
          </FormControl>
          <Spacer/>
          <Spacer/>
          <Flex>
          <FormControl w='40%'>
            <FormLabel>Amount in $ inr</FormLabel>
            <NumberInput defaultValue={0} min={10}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput> 
          </FormControl>
          <Spacer/>
          <Spacer/>
          <FormControl  w='40%'>
            <FormLabel>Stock</FormLabel>
            <NumberInput defaultValue={0}  min={0}>
            <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput> 
          </FormControl>
          </Flex>
          <Spacer/>
          <Spacer/>
          <Flex justifyContent='space-between' mt='40px'>
        
          <Button
          mt="10px"
          bg="red"
          width="7rem"
          p="1.4rem"

          fontSize="1.2rem"
          color="white"
          onClick={deleteItems}
        >
          Delete Item 
        </Button>
        
          <Button mt="10px"

          width="7rem"
          p="1.4rem"

          bg="whitesmoke"
          fontSize="1.2rem"
          border='1px solid black'
          color="black">
          cancel
        </Button>
        <Button
          mt="10px"
          bg="#fb641b"
          width="7rem"
          p="1.4rem"
          fontSize="1.2rem"
          color="white"
          onClick={updateItems}
        >
          update Item 
        </Button>
          </Flex>
        </form>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UpdateStore;
