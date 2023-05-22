import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Thumbnails from "./thumbnail";
import { ToastContainer, toast } from "react-toastify";
const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({UpdateImage,Image}) {
  
  const [File, setFile] = useState([]);

  // const [FileUrl, setFileUrl] = useState(Image);
  
  const [FileLimit, setFileLimit] = useState(false);
  
  const handleChange = (file) => {
    // setFileLimit(false);
    // const fileValue = Object.values(file);
    if (File.length > 5 || Image?.length>5) {
      setFileLimit(true);
      return;
    }

       setFile([...File,file]);
  };
  const readeAsUrl=(file)=>{
    const reader=new FileReader();
    reader.onload=(e)=>{
    
      if(reader.readyState==2){
        // setFileUrl([...FileUrl,reader.result]);
        UpdateImage([...Image,reader.result]);
      }
      
    };
    reader.readAsDataURL(file);
  }  

  useEffect(() => {
    if (FileLimit) {
      toast("maximum 4 image can be uploaded");
    }
    else{
      if(File.length>0 &&File.length<5 ){
        for(let i=0;i<File.length;i++){
        readeAsUrl(File[i]);
      }
      }
    }
  }, [File, FileLimit]);
  const handleDelete=()=>{
    let file=[...File];
    file.pop();
    setFile(file);
    file=[...FileUrl];
    file.pop();
    setFileUrl(file);
  }

  return (
    <Flex direction="column" height='fit-content'>
      <Text fontWeight="light" alignSelf="flex-start">
        Upload image's
      </Text>
      <FileUploader
        style={{ width: "20%" }}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        hoverTitle
        maxSize="1mb"
      />
     
      <Thumbnails message={'hi'} ImageURL={Image} ></Thumbnails>
      <Button onClick={handleDelete}>Delete</Button>
      {FileLimit && <ToastContainer />}
    </Flex>
  );
}

export default DragDrop;
