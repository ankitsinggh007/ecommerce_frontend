import { Box,Text,Flex,Image ,Button,Spacer} from "@chakra-ui/react"; 
import { Link } from "react-router-dom/dist";
import { ExternalLinkIcon } from '@chakra-ui/icons'

function Account() {
  return (
    <Flex flexDirection='column' align='space-between' rowGap='30px' >
    <Flex m='auto' fontFamily='Roboto' mt='2rem' boxShadow='base'  rounded='md' bg='white'>
        <Box display="flex" flexDirection='column' alignItems="center" boxSize='sm'boxShadow='outline' p='6' rounded='md' bg='white'>
  <Image src='https://bit.ly/dan-abramov' 
  alt='Dan Abramov'
  borderRadius='full'
  boxSize='250px'
   />
 <Text fontSize='3rem' fontWeight='bold'>ankit singh</Text>

</Box>

        <Flex flexDirection='column' borderLeft='1px solid black' borderRight='1px solid black' px='4rem' ml='1rem' p='30px' rowGap="85px" justify='space-evenly'>
         <Flex align='center' >   <Text fontSize='1.9rem'   fontWeight='2rem' >Email:</Text><Text fontSize='1.6rem'>ankit@gmail.com</Text></Flex>
         
         <Flex align='center' >   <Text fontSize='1.9rem'   fontWeight='2rem' >Phone:</Text><Text fontSize='1.6rem'>9205741057</Text></Flex>
        <Flex align='center' > <Text fontSize='1.9rem'   fontWeight='2rem' >Address:</Text><Text w='20rem' fontSize='1.6rem' noOfLines={2}>929/8  puri kalkaji new delhi</Text></Flex>
      
        </Flex>
        <Flex flexDirection='column' justify='space-evenly'  px='4rem'   letterSpacing='2px'>
        <Flex align='center' >    <Text fontSize='1.9rem'   fontWeight='2rem' >Cart :</Text><Link style={{backgroundColor:'#242425',padding:'10px',borderRadius:'50px',color:'white'}} >Click Me<ExternalLinkIcon/></Link></Flex>
        <Flex align='center' >   <Text fontSize='1.9rem'   fontWeight='2rem' >Order :</Text><Link style={{backgroundColor:'#242425',padding:'10px',borderRadius:'50px',color:'white'}} >Click Me<ExternalLinkIcon/></Link></Flex>
        <Flex align='center' >   <Text fontSize='1.9rem'   fontWeight='2rem' >Change Password :</Text><Link to='/update_password'  style={{backgroundColor:'#242425',padding:'10px',borderRadius:'50px',color:'white'}} >Click Me<ExternalLinkIcon mx='3px' /></Link></Flex>
        </Flex>
        
    </Flex>
    <Spacer />
    <Link to='/update_account'style={{backgroundColor:'#242425',padding:'10px',borderRadius:'50px',color:'white',width:"10rem" ,margin:'auto'}}  >Update Profile<ExternalLinkIcon /></Link>
    
    </Flex>
  )
}

export default Account