import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/LoginSignUp";
import Account from "./Pages/Account";
import { UpdatePassowrd, UpdateProfile } from "./Pages/updateUserProfile";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "https://muddy-pike-cardigan.cyclic.app/";
axios.defaults.withCredentials = true;

function App() {
  const userData={
email:"jkjkj@gmail.com",
password:"ankity"
}
    
  const RegisterUser=async(userData)=>{
   try {
        const response =  await fetch('https://muddy-pike-cardigan.cyclic.app/api/v1/user/login', {
          method: "POST",
          headers: {
            // "Content-type": "application/json; charset=UTF-8"
        },
          body: JSON.stringify(userData)
         } );
            console.log(response,"resp");
         const authHeader = response.headers.get('Authorization');
          console.log(authHeader,"auth");

   } catch (error) {
    console.log(error.response.data.message,'error');
   }
  };
  useEffect(()=>{
    RegisterUser({email:"ankit@gmail.com",password:"ankit@gmail.com"});
  },[]);
  
const { loading, message, error,user,isAuthectiacted } = useSelector((state) => state.User);
  
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Product category="featured" />} />

        <Route path="/login" element={<Login />} />
      {isAuthectiacted &&  <Route path="/account" element={<Account />} />}
        <Route path="/update_account" element={<UpdateProfile />} />
        <Route path="/update_password" element={<UpdatePassowrd />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<h1>page not found...</h1>}/>
      </Route>
    </Routes>
  );
}

export default App;
