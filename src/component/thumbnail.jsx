import {
    ImagesProvider,
    URLEditor,
    ThumbnailOptionsProvider,
    Thumbnails
  } from "react-thumbnails";
  
  export default function Thumbnail() {
    return (
      <ImagesProvider
        options={{ maxImagesCount: 5 }}
        urls={[
          "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=634&q=80",
          "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=658&q=80",
                'https://i.stack.imgur.com/GsDIl.jpg'
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
  