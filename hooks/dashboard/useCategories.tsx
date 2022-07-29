import { FormEvent, useState } from "react";

export default function useCategories() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    description: "",
    images: "",
  });

  const handleInputChange = (e) => {
    setCategory((category) => ({
      ...category,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };
  return {
    handleInputChange,
    handleSubmit,
    loading,
  };
}
