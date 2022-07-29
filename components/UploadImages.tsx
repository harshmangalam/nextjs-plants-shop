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
import { useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoIcon from "@mui/icons-material/AddAPhoto";
import shortid from "shortid";

enum ImageType {
  FILE_SYSTEM = "file-system",
  NETWORK_URL = "network-url",
}
export default function UploadImages() {
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [localImages, setLocalImages] = useState([]);
  const fileRef = useRef(null);

  useEffect(() => {
    return () => {
      if (localImages.length) {
        localImages
          .filter((image) => image.type === ImageType.FILE_SYSTEM)
          .forEach((url) => URL.revokeObjectURL(url));
      }
    };
  }, []);

  const handleFileChange = (e) => {
    const files = e.target.files;

    const images = [];
    for (const file of files) {
      const image = {
        id: shortid(),
        src: URL.createObjectURL(file),
        type: ImageType.FILE_SYSTEM,
      };
      images.push(image);
    }

    setLocalImages((localImages) => [...localImages, ...images]);
  };

  const handleAddImage = () => {
    const image = {
      id: shortid(),
      src: imageUrl,
      type: ImageType.NETWORK_URL,
    };

    setLocalImages((localImages) => [...localImages, image]);
    setImageUrl("");
  };

  const deleteImage = (image) => () => {
    if (image.type === ImageType.FILE_SYSTEM) {
      URL.revokeObjectURL(image.src);
    }
    const images = localImages.filter((i) => i.id !== image.id);
    setLocalImages(images);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)} size="large" variant="outlined">
        Upload Images
      </Button>
      <Dialog
        maxWidth="sm"
        sx={{ width: "100%" }}
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
                ref={fileRef}
                onChange={handleFileChange}
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
                onChange={(e) => setImageUrl(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleAddImage}
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
          {localImages.length ? (
            <Stack spacing={2} mt={2}>
              <Divider>Preview</Divider>
              <Grid container spacing={2}>
                {localImages.map((image) => (
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
