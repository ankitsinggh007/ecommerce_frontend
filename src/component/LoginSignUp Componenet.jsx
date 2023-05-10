import { Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Box,Text,Flex } from "@chakra-ui/react"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 export function SignUp() {

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const form = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      conformPassword: e.target[3].value,
    };


    if(form.password!==form.conformPassword) return alert("password is not matched");
    console.log("submitted");
  }
  const isError = false;

  return (
   <Flex flexDirection='row'>
    
    <Flex flexDirection='column' rowGap='10px' w='50%' p='10px' bg='royalBlue'>
    <Text color='white' mt='20px' fontSize='1.2rem'>Looks like you're new here</Text>
    <Text color='white' fontSize='1.2rem'>sign up with your email to get started shopping</Text>

      
    </Flex>
     <form onSubmit={handleRegisterForm}>
    <Text color='royalBlue' fontWeight='medium' fontSize='1.6rem' mb='30px' textAlign='center'>Register</Text>

      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Name" />
      </FormControl>

      <FormControl isRequired isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isRequired>
        <FormLabel>password</FormLabel>
        <Input placeholder="password" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>conform password</FormLabel>
        <Input placeholder="conform password" />
      </FormControl>
      <Button
      align='center'
            mt={4}
            bg='#fb641b'
            color='white'
            // isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
    </form>
   </Flex>
  );
}
export function Login() {

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const form = {
      email: e.target[1].value,
      password: e.target[2].value,
    };


    console.log("submitted");
  }
  const isError = false;

  return (
   <Flex flexDirection='row' h='28.5em'  >
    <Flex flexDirection='column' rowGap='10px' p='10px' w='50%' bg='royalBlue'>
    <Text fontWeight='bold' fontSize='1.4rem' color='white' >Login</Text>
    <Text color='white' fontSize='1.2rem'>
Get access to your Orders, Wishlist and Recommendations</Text>

      
    </Flex>
     <form onSubmit={handleRegisterForm}>
     <Text color='royalBlue' fontWeight='medium' fontSize='1.6rem' mb='30px' textAlign='center'>Login</Text>
      <FormControl isRequired isInvalid={isError}>
        <Input type="email" placeholder='abc@xyz.com' />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isRequired>
        <Input placeholder="password" />
      </FormControl>
      <Button
      align='center'
            mt={4}
            bg='#fb641b'
            color='white'
            // isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
    </form>
   </Flex>
  );
}

