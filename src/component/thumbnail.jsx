import { useState } from "react";
import {
    ImagesProvider,
    URLEditor,
    ThumbnailOptionsProvider,
    Thumbnails
  } from "react-thumbnails";
  
  export default function Thumbnail({ImageURL,message}) {
    console.log(ImageURL,"imageURL");
    return (
      <ImagesProvider
        options={{ maxImagesCount: 4 }}
        urls={[
          ...ImageURL
        ]}
      >
        <ThumbnailOptionsProvider
        // showOptions={new Set(["autoSize"])}
        defaults={{
          size: "small",
          shape: "square",
          shadow: true,
          border: true
        }}
      >
        <Thumbnails />
        </ThumbnailOptionsProvider>
      </ImagesProvider>
    );
  }
  