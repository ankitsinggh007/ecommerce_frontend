import { Button, Flex,  Spacer } from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import  { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Textarea,
  Text,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import InitialFocus from "../component/modal";
import { AddItem, findProduct } from "../slices/Product";
import { ToastContainer, toast } from "react-toastify";
import DragDrop from "../component/ImageUpload";
function UpdateStore() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.User);
  
  const {fetchedProduct} = useSelector((state) => state.Product);
  const { message, loading } = useSelector((state) => state.Product);
  const [AddItemsActive, setAddItemsActive] = useState("none");
  const [EditItemActive, setEditItemActive] = useState("none");

  const [EditForm, setEditForm] = useState({...fetchedProduct.productDetails})

  const [Search, setSearch] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [updateImage, setupdateImage] = useState([]);

  const addItemHandler = (e) => {
    e.preventDefault();
    const productDetails = {
      name: e.target[0].value,
      description: e.target[1].value,
      category: e.target[4].value,
      price: e.target[5].value,
      stock: e.target[6].value,
      user: user?.id,
      images:updateImage
    };
    dispatch(AddItem(productDetails));
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    e.target[4].value = "";
    setupdateImage([]);
  };

  const toggleModal = () => {
    setEditItemActive("block");
    setSearch("");
    setAddItemsActive("none");
    if (isOpen) return setIsOpen(false);
    return setIsOpen(true);
  };

  const deleteItems = () => {};

  const updateItems = () => {};

  useEffect(() => {
    if (message) {
      toast(`${message}`);
      setEditItemActive("block");
      setSearch("");
      setAddItemsActive("none");
    }
    if(fetchedProduct.message){
      toast(`${message}`);

    }
    if(Search){
      console.log(Search,'Search');
      dispatch(findProduct(Search));
    }
  }, [message,Search]);

  return (
    <Flex p="10px">
      <Flex
        borderRight="1px solid gray"
        p="7px"
        width="17.1vw"
        h="100vh"
        direction="column"
      >
        <Button
          mt="10px"
          bg="#fb641b"
          fontSize="1.2rem"
          color="white"
          onClick={() => {
            setEditItemActive("none");
            setSearch("");
            setAddItemsActive("block");
          }}
        >
          Add Item <AddIcon ml="7px" />
        </Button>
        <Button
          mt="10px"
          bg="#fb641b"
          fontSize="1.2rem"
          color="white"
          // onClick={()=>{setEditItemActive('flex'),setAddItemsActive('none')}}
          onClick={toggleModal}
        >
          Edit Item
          <EditIcon ml="7px" />
        </Button>
      </Flex>
      <Flex w="85%">
        {loading ? (
          <Spinner m="auto" size="xl" />
        ) : (
          <form
            style={{
              boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,
              borderRadius: "2%",
              backgroundColor: "#F7FAFC",
              width: "50%",
              padding: "20px",
              fontFamily: "roboto",
              fontWeight: "bold",
              textShadow: "revert",
              margin: "auto",
              display: `${AddItemsActive}`,
            }}
            onSubmit={addItemHandler}
          >
            <Text fontSize="2xl" color="#fb641b">
              Add Item
            </Text>
            <FormControl>
              <FormLabel>name</FormLabel>
              <Input type="text" />
            </FormControl>
            <Spacer />
            <Spacer />
            <FormControl>
              <FormLabel>description</FormLabel>
              <Textarea placeholder="write description here..." />
            </FormControl>
            <Spacer />
            <Spacer />
            <FormControl>
              <DragDrop UpdateImage={setupdateImage} Image={updateImage}/>
              <FormLabel>Category</FormLabel>
              <Input type="text" />
            </FormControl>
            <Spacer />
            <Spacer />
            <Flex>
              <FormControl w="40%">
                <FormLabel>Price </FormLabel>
                <NumberInput defaultValue={0} min={10}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Spacer />
              <Spacer />
              <FormControl w="40%">
                <FormLabel>Stock</FormLabel>
                <NumberInput defaultValue={0} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>
            <Spacer />
            <Spacer />
            <Flex justifyContent="flex-end" mt="40px">
              <Button
                mt="10px"
                width="6rem"
                bg="whitesmoke"
                fontSize="1.2rem"
                border="1px solid black"
                mr="40px"
                color="black"
              >
                cancel
              </Button>
              <Button
                mt="10px"
                bg="#fb641b"
                width="6rem"
                fontSize="1.2rem"
                color="white"
                mr="7px"
                type="submit"
              >
                Add Item
              </Button>
            </Flex>
          </form>
        )}
        <Flex w="85%" display={EditItemActive}>
          {!Search && (
            <InitialFocus
              setSearchFun={setSearch}
              ISonOpen={isOpen}
            ></InitialFocus>
          )}
    
            {Search && fetchedProduct.loading &&
          <Spinner m="auto" size="xl" />
            }
          
          {Search && ! fetchedProduct.loading &&
            <form
              style={{
                boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,
                borderRadius: "2%",
                backgroundColor: "#F7FAFC",
                width: "50%",
                padding: "40px",
                fontFamily: "roboto",
                fontWeight: "bold",
                textShadow: "revert",
                margin: "auto",
              }}
            >
              <Text fontSize="4xl" color="#fb641b">
                Edit Item{" "}
              </Text>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" value={EditForm.name} />
              </FormControl>
              <Spacer />
              <Spacer />
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder="write description here..." value={EditForm.description} />
              </FormControl>
              <Spacer />
              <Spacer />
              <FormControl>
                <FormLabel> Category</FormLabel>
                <Input type="text" value={EditForm.category} />
              </FormControl>
              <Spacer />
              <Spacer />
              <Flex>
                <FormControl w="40%">
                  <FormLabel>price</FormLabel>
                  <NumberInput defaultValue={0} value={EditForm.price} min={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <Spacer />
                <Spacer />
                <FormControl w="40%">
                  <FormLabel>Stock</FormLabel>
                  <NumberInput defaultValue={0} value={EditForm.Stock} min={0}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </Flex>
              <Spacer />
              <Spacer />
              <Flex justifyContent="space-between" mt="40px">
                <Button
                  mt="10px"
                  bg="red"
                  width="7rem"
                  p="1.4rem"
                  fontSize="1.2rem"
                  color="white"
                  onClick={deleteItems}
                >
                  Delete Item
                </Button>

                <Button
                  mt="10px"
                  width="7rem"
                  p="1.4rem"
                  bg="whitesmoke"
                  fontSize="1.2rem"
                  border="1px solid black"
                  color="black"
                >
                  cancel
                </Button>
                <Button
                  mt="10px"
                  bg="#fb641b"
                  width="7rem"
                  p="1.4rem"
                  fontSize="1.2rem"
                  color="white"
                  onClick={updateItems}
                >
                  update Item
                </Button>
              </Flex>
            </form>
          }
        </Flex>
      </Flex>
      {message && <ToastContainer />}
      {fetchedProduct.message && <ToastContainer />}
    </Flex>
  );
}

export default UpdateStore;
