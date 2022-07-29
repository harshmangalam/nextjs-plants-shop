import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  Grid,
  Stack,
  DialogContentText,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoIcon from "@mui/icons-material/AddAPhoto";
import useImage from "../hooks/useImage";

export default function UploadImages() {
  const [open, setOpen] = useState(false);

  const {
    deleteImage,
    handleAddUrlImage,
    handleFileInputChange,
    handleInputChange,
    imageUrl,
    images,
  } = useImage();

  return (
    <>
      <Button onClick={() => setOpen(true)} size="large" variant="outlined">
        Upload Images
      </Button>
      <Dialog
        maxWidth="xs"
        fullWidth
        onClose={() => setOpen(false)}
        open={open}
      >
        <DialogTitle>Add Images</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Button
              variant="outlined"
              size="large"
              component="label"
              startIcon={<ImageIcon />}
            >
              Choose from your system
              <input
                hidden
                onChange={handleFileInputChange}
                accept="image/*"
                multiple
                type="file"
              />
            </Button>
            <Divider>From url</Divider>
            <FormControl variant="outlined">
              <InputLabel htmlFor="image-url-input">Add Image Url</InputLabel>
              <OutlinedInput
                id="image-url-input"
                type="text"
                value={imageUrl}
                onChange={handleInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleAddUrlImage}
                      edge="end"
                    >
                      <AddPhotoIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Add Image Url"
              />
            </FormControl>
          </Stack>
          {images.length ? (
            <Stack spacing={2} mt={2}>
              <Divider>Preview</Divider>
              <Grid container spacing={2}>
                {images.map((image) => (
                  <Grid item md={6} key={image.id} position="relative">
                    <img
                      src={image.src}
                      width={"100%"}
                      height={"100%"}
                      style={{ objectFit: "contain" }}
                    />
                    <Box position={"absolute"} top={0} right={0}>
                      <Fab
                        color="error"
                        aria-label="delete"
                        size="small"
                        onClick={deleteImage(image)}
                      >
                        <DeleteIcon fontSize="small" />
                      </Fab>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          ) : (
            <DialogContentText mt={2} textAlign="center">
              Add images to see preview
            </DialogContentText>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
