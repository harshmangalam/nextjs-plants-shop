import { useState } from "react";
import shortid from "shortid";
const CLOUDINARY_ENDPOINT = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}/image/upload`;

export default function useImagePreview() {
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [removing, setRemoving] = useState(null);
  const [error, setError] = useState("");

  const handeFileChange = async (e) => {
    setIsUploading(true);
    const files = e.target.files as File[];

    try {
      const data = [];
      for await (const file of files) {
        const res = await uploadToCloud(file);
        if (res) {
          data.push(res);
        }
      }

      setImages((images) => [...images, ...data]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const deleteImage = async (publicId) => {
    setRemoving(publicId);
    try {
      const response = await fetch("/api/cloudinary", {
        method: "delete",
        body: publicId,
      });

      if (response.ok) {
        const filterImages = images.filter(
          (image) => image.public_id !== publicId
        );
        setImages(filterImages);
      } else {
        const data = await response.json()
        setError(data.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRemoving(null);
    }
  };

  async function uploadToCloud(file) {
    try {
      const publicId = shortid.generate();
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      formData.append("public_id", publicId);

      const response = await fetch(CLOUDINARY_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        setError("Error while uploading to cloud");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  return {
    handeFileChange,
    images,
    deleteImage,
    isUploading,
    error,
    removing,
  };
}
