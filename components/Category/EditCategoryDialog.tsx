import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Category } from "@prisma/client";
import UploadImages from "../UploadImages";
import { LoadingButton } from "@mui/lab";
import useCategories from "../../hooks/dashboard/useCategories";

export default function EditCategoryDialog(defaultCategory: Category) {
  const {
    category,
    handleAddImageUrls,
    handleInputChange,
    editing,
    handleEditCategory,
  } = useCategories(defaultCategory);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
        <DialogTitle id="alert-dialog-title">{category.name}</DialogTitle>
        <DialogContent>
          <Stack
            spacing={2}
            component={"form"}
            method="post"
            onSubmit={handleEditCategory}
            mt={2}
          >
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="category-name">Category name</InputLabel>
              <OutlinedInput
                value={category.name}
                onChange={handleInputChange}
                name="name"
                id="category-name"
                label="Category name"
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="category-description">
                Category description
              </InputLabel>
              <OutlinedInput
                multiline
                value={category.description}
                onChange={handleInputChange}
                name="description"
                maxRows={5}
                rows={5}
                id="category-description"
                label="Category description"
              />
            </FormControl>
            <UploadImages onAddImages={handleAddImageUrls} />
            <LoadingButton
              type="submit"
              loading={editing}
              variant="contained"
              size="large"
            >
              Edit Category
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
