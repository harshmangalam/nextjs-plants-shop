import { useState } from "react";


export default function useImagePreview() {
  const [inputImageURL, setInputImageURL] = useState("");
  const [images, setImages] = useState([]);



  const handleFileInputChange = (e) => {
    const files = e.target.files as File[] ;


    const data = [];
    for (const file of files) {
     console.log(file.name)
    }

    setImages((images) => [...images, ...data]);
  };

  const handleInputChange = (e) => {
    setInputImageURL(e.target.value);
  };

  const handleAddUrlImage = () => {


    setImages((images) => [...images, inputImageURL]);
    setInputImageURL("");
  };

  const deleteImage = (img) => () => {

    const filterImages = images.filter((image) => image !== img);
    setImages(filterImages);
  };
  return {
    handleFileInputChange,
    images,
    inputImageURL,
    handleInputChange,
    handleAddUrlImage,
    deleteImage,
  };
}
