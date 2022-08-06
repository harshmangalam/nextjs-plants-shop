import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
export default function usePlants(
  defaultValue = {
    id: "",
    name: "",
    description: "",
    images: [],
    price: 0,
    categoryId: "",
  }
) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [editing, setEditing] = useState(false);
  const [plant, setPlant] = useState(defaultValue);

  const handleInputChange = (e) => {
    setPlant((plant) => ({
      ...plant,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddImageUrls = (imageUrls: string[]) => {
    setPlant((plant) => ({ ...plant, images: imageUrls }));
  };

  const createPlant = async (e: FormEvent) => {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await fetch("/api/plants", {
        body: JSON.stringify(plant),
        method: "post",
      });

      const data = await res.json();

      if (res.ok) {
        enqueueSnackbar(data.message, {
          variant: "success",
        });
        return router.replace("/admin/plants");
      }

      if (data?.error) {
        enqueueSnackbar(data.error, {
          variant: "error",
        });
      }
    } catch (error) {
    } finally {
      setCreating(false);
    }
  };

  const deletePlant = async (plantId) => {
    setDeleting(plantId);
    try {
      const response = await fetch("/api/plants", {
        method: "DELETE",
        body: plantId,
      });
      const data = await response.json();
      if (response.ok) {
        enqueueSnackbar(data.message, {
          variant: "success",
        });
        return router.replace("/admin/categories");
      } else {
        enqueueSnackbar(data.error, {
          variant: "error",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeleting(null);
    }
  };

  const editPlant = async () => {
    setEditing(true);
    try {
      const res = await fetch("/api/plant", {
        body: JSON.stringify(plant),
        method: "put",
      });

      const data = await res.json();

      if (res.ok) {
        enqueueSnackbar(data.message, {
          variant: "success",
        });
        return router.replace("/admin/plants");
      }

      if (data?.error) {
        enqueueSnackbar(data.error, {
          variant: "error",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEditing(false);
    }
  };
  return {
    handleInputChange,
    createPlant,
    creating,
    handleAddImageUrls,
    plant,
    deletePlant,
    editPlant,
    editing,
  };
}
