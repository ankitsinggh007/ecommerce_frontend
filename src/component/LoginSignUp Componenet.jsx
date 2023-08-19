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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registeredUser } from "../slices/User";
import { NavLink, useNavigate } from "react-router-dom";
import flipkartLogo from "../assets/flipkart.svg";
import flipkart_Logo from "../assets/flipkart_logo.jpg";

export function SignUp() {
  const [ConfirmPasswordNotMatched, setConfirmPasswordNotMatched] =
    useState(false);

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

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
  };

  useEffect(() => {
    if (message) {
      toast(`${message}`);
    }
  }, [message]);

  return (
    <div className="flex border-2 border-indigo-200 w-1/2 mx-auto my-auto sm:mt-16 rounded-md shadow-md">
      <div className="bg-[#0087CE] basis-1/3 flex flex-col p-5">
        <span className="text-white text-Roboto text-left text-2xl line-clamp-2 font-semibold">
          Looks Like You're new here
        </span>
        <br />
        <span className="line-clamp-2 text-slate-300 font-medium text-left text-md">
          Sign up with your mobile number to get started
        </span>
        <img src={flipkartLogo} className="h-80" />
      </div>
      <div className="basis-2/3">
        <form
          className="text-left ml-16  w-80 flex justify-center flex-col gap-5  h-4/5 "
          onSubmit={handleRegisterForm}
        >
          <div>
            <input
              className="border-b-2 w-80 pb-1 mt-5 border-gray-800 focus:border-primary focus:outline-none"
              type="text"
              placeholder="Name"
              id="name"
            />
          </div>
          <div>
            <input
              className="border-b-2 w-80 pb-1 mt-5 border-gray-800 focus:border-primary focus:outline-none"
              type="email"
              placeholder="Email"
              id="email"
            />
          </div>

          <div>
            <input
              className="border-b-2 w-80 pb-1 mt-5 border-gray-800 focus:border-primary focus:outline-none"
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Conform Password"
              id="C_password"
              className="border-b-2 w-80 pb-1 mt-5 border-gray-800 focus:border-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            // isLoading={loading}
            // mt={4}
            // bg="#fb641b"
            // loadingText="Registering"
            className=" bg-[#fb631b] w-20 self-center p-1 px-2 rounded-sm outline-none text-white"
          >
            Sign up
          </button>
        </form>
        <NavLink to='/login' className="text-primary font-bold ">Already have an account?Sign in</NavLink>

      </div>

    </div>
  );
}
export function Login() {
  const dispatch = useDispatch();
  const { loading, message, isAuthectiacted, error } = useSelector(
    (state) => state.User
  );

  const Navigate = useNavigate();

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
    if (message) {
      toast(`${message}`);

      if (isAuthectiacted) {
        Navigate("/account");
      }
    }
  }, [message, isAuthectiacted, Navigate]);

  return (
    <div className="flex border-2 border-indigo-200 w-1/2 mx-auto my-auto sm:mt-16 rounded-md shadow-md">
      <div className="bg-[#1F7ECE] basis-1/3 flex flex-col p-5">
        <span className="text-white text-Roboto text-left text-2xl line-clamp-2 font-semibold">
          Looks Like You're new here
        </span>
        <br />
        <span className="line-clamp-2 text-slate-300 font-medium text-left text-md">
          Sign up with your mobile number to get started
        </span>
        <img src={flipkart_Logo}  className="h-80 " />
      </div>
      <div className="basis-2/3">
        <form
          className="text-left ml-16  w-80 flex justify-center flex-col gap-5  h-4/5 "
          onSubmit={handleRegisterForm}
        >
          <div>
            <input
              className="border-b-2 w-80 pb-1 mt-5 border-gray-800 focus:border-primary focus:outline-none"
              type="email"
              placeholder="Email"
              id="email"
            />
          </div>

          <div>
            <input
              className="border-b-2 w-80 pb-1 mt-5 border-gray-800 focus:border-primary focus:outline-none"
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>

          <button
            type="submit"
            // isLoading={loading}
            // mt={4}
            // bg="#fb641b"
            // loadingText="Registering"
            className=" bg-[#fb631b] w-20 self-center p-1 px-2 rounded-sm outline-none text-white"
          >
            Log in
          </button>
        </form>
        <NavLink to='/signup' className="text-primary font-bold ">New to Flipkart?Create account</NavLink>

      </div>

    </div>
  );
}
