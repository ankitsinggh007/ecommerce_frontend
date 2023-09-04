import { Button, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addItemToCart, loadUser } from "../slices/User";

const AddToCartCounter = ({ stock, id }) => {
  const dispatch = useDispatch();
  const [counter, setcounter] = useState(stock ? stock : 1);

  const [message, setmessage] = useState("");
  const [disable, setdisable] = useState(false);

  const handleCounter = (e) => {
    if (e.target.innerHTML == "+") {
      if (stock > counter) {
        setcounter(counter + 1);
      } else {
        setmessage("item is out of stock");
      }
    } else {
      if (counter == 1) {
        setmessage(`item can't be in negative`);

        disable(true);
      } else {
        setcounter(counter - 1);
      }
    }
  };

  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);

  const addToCartHandler = () => {
    console.log(id, "id");
    console.log(counter, "counter");
    dispatch(addItemToCart({ id, counter }));
    dispatch(loadUser());
  };

  return (
    <div className="w-full h-40 flex  flex-col justify-around">
      <div className="md:w-[40%] flex flex-row justify-between">
        <div className="flex flex-row border w-32 justify-between rounded-3xl px-3 border-gray-400">
          <button className="text-2xl  " onClick={handleCounter}>
            -
          </button>
          <span className="text-2xl cursor-pointer  border-x border-gray-500 px-2  ">
            {counter}
          </span>
          <button className="text-2xl " onClick={handleCounter}>
            +
          </button>
        </div>
        {stock < 2 && stock == 0 && (
          <Text spacing="2px">
            only <b>{stock}</b> item left
          </Text>
        )}
        {stock <= 0 && (
          <span className="text-red-600 text-xl">Out of stock</span>
        )}
      </div>

      <div className="md:w-[50%] flex flex-row justify-between">
        <button
          className={`border border-white w-32 h-12 rounded-md text-white bg-[#FF9F00]`}
        >
          Buy Now{" "}
        </button>
        <button
          onClick={addToCartHandler}
          className={`border border-white w-32 h-12 rounded-md text-white bg-[#FB641B]`}
        >
          Add To Cart {counter}
        </button>
      </div>
      {message && <ToastContainer />}
    </div>
  );
};

export default AddToCartCounter;
