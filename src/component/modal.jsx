import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { useEffect, useRef,useState } from 'react'
function InitialFocus({ISonOpen,setSearchFun}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  



    
const [Search, setSearch] = useState('');
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const searching=(e)=>{
     e.preventDefault();
        if(Search) {
          setSearchFun(Search);
        }

        onClose();
    }

    useEffect(()=>{
            if(ISonOpen){
                onOpen();
            }
    },[ISonOpen,onOpen])
    return (
      <>  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Search for product </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl >
                <Input ref={initialRef} placeholder='product id' onChange={(e)=>{setSearch(e.target.value)}}/>

              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}
              type='submit'
              onClick={searching}
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default InitialFocus;