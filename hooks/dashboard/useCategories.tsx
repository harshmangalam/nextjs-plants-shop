import { FormEvent, useState } from "react";

export default function useCategories() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    description: "",
    images: [],
  });

  const handleInputChange = (e) => {
    setCategory((category) => ({
      ...category,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddImageUrls = (imageUrls: string[]) => {
    console.log(imageUrls)
    setCategory((category) => ({ ...category, images: imageUrls }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(category)
    } catch (error) {}
  };
  return {
    handleInputChange,
    handleSubmit,
    loading,
    handleAddImageUrls,
    category
  };
}
