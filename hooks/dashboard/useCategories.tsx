import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
export default function useCategories() {
  const router = useRouter();
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
    console.log(imageUrls);
    setCategory((category) => ({ ...category, images: imageUrls }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetch("/api/categories", {
        body: JSON.stringify(category),
        method: "post",
      });
      setLoading(false);
      router.replace("/admin/categories");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return {
    handleInputChange,
    handleSubmit,
    loading,
    handleAddImageUrls,
    category,
  };
}
