import { useEffect, useState } from "react";
import shortId from "shortid";
enum ImageType {
  FILE_SYSTEM = "file-system",
  NETWORK_URL = "network-url",
}

export default function useImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    return () => {
      if (images.length) {
        images
          .filter((image) => image.type === ImageType.FILE_SYSTEM)
          .forEach((url) => URL.revokeObjectURL(url));
      }
    };
  }, []);

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    console.log(files);

    const data = [];
    for (const file of files) {
      const image = {
        id: shortId(),
        src: URL.createObjectURL(file),
        type: ImageType.FILE_SYSTEM,
      };
      data.push(image);
    }

    setImages((images) => [...images, ...data]);
  };

  const handleInputChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleAddUrlImage = () => {
    const image = {
      id: shortId(),
      src: imageUrl,
      type: ImageType.NETWORK_URL,
    };

    setImages((images) => [...images, image]);
    setImageUrl("");
  };

  const deleteImage = (image) => () => {
    if (image.type === ImageType.FILE_SYSTEM) {
      URL.revokeObjectURL(image.src);
    }
    const filterImages = images.filter((i) => i.id !== image.id);
    setImages(filterImages);
  };
  return {
    handleFileInputChange,
    images,
    imageUrl,
    handleInputChange,
    handleAddUrlImage,
    deleteImage,
  };
}
