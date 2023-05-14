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

axios.defaults.baseURL = "https://muddy-pike-cardigan.cyclic.app";
axios.defaults.withCredentials = true;

function App() {
//   const userData={name:"ankit",
// email:"jkjkj@gmail.com",
// password:"ankity"
// }
    
//   const RegisterUser=async(userData)=>{
//    try {
//         const {data} =  await axios.post('https://muddy-pike-cardigan.cyclic.app/api/v1/user/register',userData, {
//   Headers: {
//     Accept: 'application.json',
//     'Content-Type': 'application/json'
//   },
// })
// console.log(data.message ,"response from app.js");

//    } catch (error) {
//     console.log(error.response.data.message,'error');
//    }
//   };
//   useEffect(()=>{
//     RegisterUser({name:"ankit",email:"as3824@gmail.com",password:"ankita"});
//   },[]);
  
  
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Product category="featured" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/update_account" element={<UpdateProfile />} />
        <Route path="/update_password" element={<UpdatePassowrd />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
