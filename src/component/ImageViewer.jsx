import { Box, Flex, Image} from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import ImageViewer from "react-simple-image-viewer";
import outOfstock from "../assets/soldout/soldout-md.png"

function ImagesViewer({images,stock}) {
  console.log(images,stock);
    const [Display, setDisplay] = useState(images?.[0]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Flex  
    w='90%' 
    alignItems='center' 
    direction='column' 
    m='auto' 
    pos={"relative"}

    >

    
    
    <Flex    
    alignItems='center'>
        <Image src={Display} 
        width='34rem' 
        height='26rem'
        objectFit='contain'
        backgroundColor='white'
        imageRendering='pixelated'

        onClick={() => openImageViewer(0)}
        />
        {
          stock<=0 && <Image src={outOfstock}
          objectFit='contain'
          pos={"absolute"}
          top="0"
          right="0"

          />
        }
    </Flex>

<br/>
<Flex  justifyContent='space-evenly' width={'105%'}   >
      {images?.map((src, index) => (
            <Box key={index} boxShadow='base' style={{ backgroundImage: `url(${src})`,backgroundSize:'cover',backgroundPosition:'center' }}  width='110px' h='110px' onClick={()=>setDisplay(`${src}`)} />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </Flex>
    </Flex>
  );
}


export default ImagesViewer;