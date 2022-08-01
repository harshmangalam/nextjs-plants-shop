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
  DialogActions,
  Avatar,
  Alert,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useImagePreview from "../hooks/useImagePreview";
import { LoadingButton } from "@mui/lab";

export default function UploadImages({ onAddImages }) {
  const [open, setOpen] = useState(false);

  const { deleteImage, images, handeFileChange, isUploading, error } =
    useImagePreview();

  const handleDone = () => {
    onAddImages(images);
    setOpen(false);
  };

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
            {error && <Alert severity="error">{error}</Alert>}
            <LoadingButton
              variant="outlined"
              size="large"
              component="label"
              loading={isUploading}
              startIcon={<ImageIcon />}
            >
              Choose from your system
              <input
                hidden
                onChange={handeFileChange}
                accept="image/*"
                multiple
                type="file"
              />
            </LoadingButton>
          </Stack>
          {images.length ? (
            <Stack spacing={2} mt={2}>
              <Divider>Preview</Divider>
              <Grid container spacing={2}>
                {images.map((image) => (
                  <Grid item key={image.asset_id} position="relative">
                    <Avatar src={image.url} sx={{ width: 120, height: 120 }} />
                    <Box position={"absolute"} bottom={0} left={0}>
                      <Fab
                        color="error"
                        aria-label="delete"
                        size="small"
                        onClick={() => deleteImage(image.asset_id)}
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
        <DialogActions>
          <Button onClick={handleDone} variant="contained">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
