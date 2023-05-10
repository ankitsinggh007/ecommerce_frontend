import { FormControl, FormLabel,Textarea, Text,Input,Button } from "@chakra-ui/react";
export const UpdateProfile = () => {
  return (
    <form style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',padding:'15px',margin:"auto", marginTop:"30px",width:"40%"}}
    
    
    >
<Text fontSize='2rem' color='#2874f0'>Update Profile</Text>
<FormControl isRequired>
  <FormLabel> Name</FormLabel>
  <Input type='text' placeholder='Name' />
</FormControl>
        <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email'  />
</FormControl>
<FormControl isRequired>
<FormLabel> Phone no.</FormLabel>
  <Input type='phone' placeholder='Phone no.' />
</FormControl>

<FormControl>
<FormLabel> Address</FormLabel>
<Textarea placeholder='Address..' />
</FormControl>
<br/>
      <br/>

<Button type="submit" color="white" bg='#fb641b' >Submit</Button>

    </form>
  )
};

export const UpdatePassowrd = () => {
  return (
    <form style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',padding:'15px',margin:"auto", marginTop:"30px",width:"40%"}}>

<Text fontSize='2rem' color='#2874f0'>Update Passowrd</Text>

      <FormControl isRequired>
        <FormLabel>Old Password</FormLabel>
        <Input type="password" placeholder="Old Password" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>New Password</FormLabel>
        <Input type="password" placeholder="New Password" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Conform Password</FormLabel>
        <Input type="password" placeholder="Conform Password" />

      </FormControl>
      <br/>
      <br/>

<Button type="submit" color="white" bg='#fb641b' >Submit</Button>

    </form>
  );
};
