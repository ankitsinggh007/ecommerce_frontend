import {
  FormControl,
  FormLabel,
  Textarea,
  Text,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { updateUser } from "../slices/User";
export const UpdateProfile = () => {
  const dispatch = useDispatch();
  const { loading, message, error, user } = useSelector((state) => state.User);
    console.log(user,"user");
  const [userDetails, setuserDetails] = useState({
    ...user,
  });
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar?.url);

  const formHandler = (e) => {
    e.preventDefault();
    console.log(userDetails,"userDetails");
    dispatch(updateUser(userDetails));
    console.log(userDetails);
  };
  const handleImageUploding=(e)=>{
    const reader=new FileReader();
    reader.onload=()=>{
      if(reader.readyState==2){
        setAvatarPreview(reader.result);
        setuserDetails({...userDetails,avatar:reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  }
  useEffect(() => {
  
    if(message){
        toast(`${message}`);
      }
  
    },[message]);
  
  

  return (
    <form
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding: "15px",
        margin: "auto",
        marginTop: "30px",
        width: "40%",
      }}
      onSubmit={formHandler}
    >
      <Text fontSize="2rem" color="#2874f0">
        Update Profile
      </Text>
      <FormControl   display="flex" flexDirection='column' alignItems="center">
        <Image
            src={avatarPreview}
            alt={user.name}
            // fallbackSrc={profilePic}
            borderRadius="full"
            boxSize="250px"
          />
        <Input
        display='flex'
          type="file"
          name='avatar'
          accept="image/*"
          width='50%'
          onChange={handleImageUploding}
        />
        <FormLabel> Upload</FormLabel>

      </FormControl>
      <FormControl isRequired>
        <FormLabel> Name</FormLabel>
        <Input
          type="text"
          placeholder="Name"
          value={userDetails.name}
          onChange={(e) =>
            setuserDetails({ ...userDetails, name: e.target.value })
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={userDetails.email}
          onChange={(e) =>
            setuserDetails({ ...userDetails, email: e.target.value })
          }
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel> Phone no.</FormLabel>
        <Input
          type="phone"
          placeholder="Phone no."
          value={userDetails.phone}
          onChange={(e) =>
            setuserDetails({ ...userDetails, phone: e.target.value })
          }
        />
      </FormControl>

      <FormControl>
        <FormLabel> Address</FormLabel>
        <Textarea
          placeholder="Address.."
          value={userDetails.address}
          onChange={(e) =>
            setuserDetails({ ...userDetails, address: e.target.value })
          }
        />
      </FormControl>
      <br />
      <br />

      <Button
          isLoading={loading}
          align="center"
          bg="#fb641b"
          loadingText="Updating..."
          colorScheme="grey"
          // variant="outline"
          type="submit"
        >
          Submit
        </Button>
      {message && <ToastContainer />}

    </form>
    
  );
};

export const UpdatePassowrd = () => {
  return (
    <form
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding: "15px",
        margin: "auto",
        marginTop: "30px",
        width: "40%",
      }}
    >
      <Text fontSize="2rem" color="#2874f0">
        Update Passowrd
      </Text>

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
      <br />
      <br />

      <Button type="submit" color="white" bg="#fb641b">
        Submit
      </Button>
    </form>
  );
};
