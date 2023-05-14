import { Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Text, Flex } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registeredUser } from "../slices/User";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [ConfirmPasswordNotMatched, setConfirmPasswordNotMatched] =useState(false);
  
  const { loading, message, error } = useSelector((state) => state.User);
  
  const dispatch = useDispatch();


  const handleRegisterForm = (e) => {
  
    e.preventDefault();
  
    const form = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      confirmPassword: e.target[3].value,
    };
    if (form.password !== form.confirmPassword) {
  
      setConfirmPasswordNotMatched(true);
  
      return;
    }
    setConfirmPasswordNotMatched(false);

    const userDetails = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    dispatch(registeredUser(userDetails));
  
    e.target[0].value = ""; e.target[1].value = "";
    e.target[2].value = "" ; e.target[3].value = "";
  
  };


  useEffect(() => {
  
    if(message){
        toast(`${message}`);
      }
  
    },[message]);
  
  
  
  
  
  return (
    <Flex flexDirection="row">
      <Flex
        flexDirection="column"
        rowGap="10px"
        w="50%"
        p="10px"
        bg="royalBlue"
      >
        <Text color="white" mt="20px" fontSize="1.2rem">
          Looks like you're new here
        </Text>
        <Text color="white" fontSize="1.2rem">
          sign up with your email to get started shopping
        </Text>
      </Flex>
      <form onSubmit={handleRegisterForm}>
        <Text
          color="royalBlue"
          fontWeight="medium"
          fontSize="1.6rem"
          mb="30px"
          textAlign="center"
        >
          Register
        </Text>

        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>password</FormLabel>
          <Input placeholder="password" />
        </FormControl>

        <FormControl isRequired isInvalid={ConfirmPasswordNotMatched}>
          <FormLabel>conform password</FormLabel>
          <Input placeholder="conform password" />
          <FormErrorMessage>password is not matched</FormErrorMessage>
        </FormControl>

        <Button
          isLoading={loading}
          align="center"
          mt={4}
          bg="#fb641b"
          loadingText="Registering"
          colorScheme="grey"
          variant="outline"
          type="submit"
        >
          Submit
        </Button>
      </form>
      {message && <ToastContainer />}
    </Flex>
  );
}
export function Login() {
  const dispatch=useDispatch();
  const { loading, message,isAuthectiacted, error } = useSelector((state) => state.User);

  const Navigate=useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const form = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    const userDetails = {
      ...form,
    };
    dispatch(loginUser(userDetails));
  };
  
  useEffect(() => {
  
    if(message){
        toast(`${message}`);
      
        if(isAuthectiacted){
          Navigate('/account');
        }
      }
  
    },[message,isAuthectiacted,Navigate]);

  return (
    <Flex flexDirection="row" h="28.5em">
      <Flex
        flexDirection="column"
        rowGap="10px"
        p="10px"
        w="50%"
        bg="royalBlue"
      >
        <Text fontWeight="bold" fontSize="1.4rem" color="white">
          Login
        </Text>
        <Text color="white" fontSize="1.2rem">
          Get access to your Orders, Wishlist and Recommendations
        </Text>
      </Flex>
      <form onSubmit={handleRegisterForm}>
        <Text
          color="royalBlue"
          fontWeight="medium"
          fontSize="1.6rem"
          mb="30px"
          textAlign="center"
        >
          Login
        </Text>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>

          <Input type="email" placeholder="abc@xyz.com" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>

          <Input placeholder="password" />
        </FormControl>
        <Button
          align="center"
          mt={4}
          bg="#fb641b"
          color="white"
          isLoading={loading}
          type="submit"
        >
          Submit
        </Button>
      </form>
      {message && <ToastContainer />}

    </Flex>
  );
}
