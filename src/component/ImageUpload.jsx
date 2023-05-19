import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Thumbnails from './thumbnail'
const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [File, setFile] = useState([]);
  const [FileUrl, setFileUrl] = useState([]);
  const handleChange = (file) => {
    setFile(file);
  };
  useEffect(()=>{
  
    console.log(FileUrl,"FileUrl");

    if(File.length!==0){
    let fileReader=new FileReader();
      console.log("inside")
    fileReader.onload=(e)=>{
        console.log(e,"e");
        
        if(fileReader.status===2){
            // FileUrl.push();
            console.log("deep inside");
            // const data={...FileUrl,fileReader.result}
            setFileUrl(fileReader.result);
            if(error){
                console.log(error,"error");
            }
        }
        else if(fileReader.status===1){
            console.log(fileReader.error);
        // File.forEach(element => {
        //     fileReader.readAsDataURL(element);
        // });
    }
    fileReader.readAsDataURL(File[0]);

    }}

  },[File,FileUrl]);
  console.log(File,"File");
  console.log(FileUrl,"FileUrl");
  

  return (
   <Flex direction='column'  height='200px' >
    <Text fontWeight='light' alignSelf='flex-start'>Upload image's</Text>
    <FileUploader
    style={{width:'20%'}}
     handleChange={handleChange}
     name="file" types={fileTypes}
     multiple
     hoverTitle
    //  onDrop={()=>{console.log('File droped')}}
     maxSize='1mb'
     />
     <Thumbnails></Thumbnails>
   </Flex>
  );
}

export default DragDrop;