import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import { UpdatePassowrd, UpdateProfile } from "./Pages/updateUserProfile";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateStore from "./Pages/UpdateStore";
import { loadUser } from "./slices/User";
import { fetchAllProduct } from "./slices/Product";
import ProductPage from "./component/ProductDescription";
import { SignUp, Login } from "./component/LoginSignUp Componenet";
import LoginSignUp from "./Pages/LoginSignUp";
import ProductList from "./component/ProductList";

axios.defaults.baseURL = "http://localhost:3000/";
// axios.defaults.baseURL = "https://muddy-pike-cardigan.cyclic.app/";
axios.defaults.withCredentials = true;

function App() {

const dispatch=useDispatch();


const { loading, message, error,user,isAuthectiacted } = useSelector((state) => state.User);


  useEffect(() => {
    
    if(!isAuthectiacted){
      dispatch(loadUser());
    }
  
    
  }, [dispatch,isAuthectiacted]);
  
  

  return (
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/" element={<Product category="featured" />} />
        <Route path="/product/:categories" element={<ProductList/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      {isAuthectiacted &&  <Route path="/account" element={<Account />} />}
        <Route path="/update_account" element={<UpdateProfile />} />
        <Route path="/update_store" element={<UpdateStore />} />
        <Route path="/update_password" element={<UpdatePassowrd />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path='*' element={<h1>page not found...</h1>}/>
      </Route>
    </Routes>
  );
}

export default App;
