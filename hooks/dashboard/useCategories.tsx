import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
export default function useCategories() {
  const { enqueueSnackbar } = useSnackbar();
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
      const res = await fetch("/api/categories", {
        body: JSON.stringify(category),
        method: "post",
      });
      setLoading(false);

      const data = await res.json();

      if (res.ok) {
        enqueueSnackbar(data.message, {
          variant: "success",
        });
        return router.replace("/admin/categories");
      }

      if (data?.error) {
        enqueueSnackbar(data.error, {
          variant: "error",
        });
      }
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
