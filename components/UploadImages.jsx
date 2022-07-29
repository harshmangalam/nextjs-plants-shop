import { Box, Button, Fab, Grid, Stack } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export default function UploadImages() {
  const [localImages, setLocalImages] = useState([]);
  const fileRef = useRef(null);

  useEffect(() => {
    return () => {
      if (localImages.length) {
        localImages.forEach((url) => URL.revokeObjectURL(url));
      }
    };
  }, []);

  const handleFileChange = (e) => {
    const files = e.target.files;

    const images = [];
    for (const file of files) {
      const url = { id: images.length, src: URL.createObjectURL(file) };
      images.push(url);
    }

    setLocalImages(images);
  };

  const deleteImage = (image) => () => {
    console.log(image.id);
    URL.revokeObjectURL(image.src);
    const images = localImages.filter((i) => i.id !== image.id);

    setLocalImages(images);
  };
  return (
    <Stack spacing={2}>
      <Button
        variant="outlined"
        size="large"
        component="label"
        startIcon={<ImageIcon />}
      >
        Upload Images
        <input
          hidden
          ref={fileRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          type="file"
        />
      </Button>
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
  );
}
