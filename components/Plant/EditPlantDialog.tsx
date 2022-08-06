import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Category, Plant } from "@prisma/client";
import UploadImages from "../UploadImages";
import { LoadingButton } from "@mui/lab";
import usePlants from "../../hooks/dashboard/usePlants";

interface Props {
  defaultPlant: Plant;
  categories: Category[];
}
export default function EditPlantDialog({ defaultPlant, categories }: Props) {
  console.log(defaultPlant);
  console.log(categories);
  const { plant, handleAddImageUrls, handleInputChange, editing, editPlant } =
    usePlants(defaultPlant);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditCategory = async (e) => {
    e.preventDefault();
    await editPlant();
    setOpen(false);
  };
  return (
    <Box>
      <IconButton onClick={handleClickOpen} aria-label="edit" color="primary">
        <BorderColorOutlinedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">Edit category</DialogTitle>
        <DialogContent>
          <Stack
            spacing={2}
            component={"form"}
            method="post"
            onSubmit={handleEditCategory}
            mt={2}
          >
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="name">Plant name</InputLabel>
              <OutlinedInput
                value={plant.name}
                onChange={handleInputChange}
                name="name"
                id="name"
                label="Plant name"
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="price">Plant price</InputLabel>
              <OutlinedInput
                value={plant.price}
                onChange={handleInputChange}
                name="price"
                id="price"
                label="Plant price"
                type="number"
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="description">Plant description</InputLabel>
              <OutlinedInput
                multiline
                value={plant.description}
                onChange={handleInputChange}
                name="description"
                rows={5}
                id="description"
                label="Plant description"
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel id="categoryId">Category</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                value={plant.categoryId}
                label="Category"
                name="categoryId"
                onChange={handleInputChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    <Stack direction={"row"} spacing={2} alignItems="center">
                      <Avatar
                        src={(category.images[0] as { url: string }).url}
                      />
                      <Typography>{category.name}</Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <UploadImages
              onAddImages={handleAddImageUrls}
              multiple
              defaultImages={plant.images}
            />
            <LoadingButton
              type="submit"
              loading={editing}
              variant="contained"
              size="large"
            >
              Edit Plant
            </LoadingButton>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
