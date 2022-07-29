import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

import AdminLayout from "../../../layouts/AdminLayout";
import UploadImages from "../../../components/UploadImages";
import useCategories from "../../../hooks/dashboard/useCategories";
export default function Create() {
  const {
    handleAddImageUrls,
    handleInputChange,
    handleSubmit,
    loading,
    category,
  } = useCategories();
  return (
    <Box>
      <Paper sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
        <Stack
          spacing={2}
          component={"form"}
          method="post"
          onSubmit={handleSubmit}
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
          <LoadingButton type="submit" loading={loading}  variant="contained" size="large">
            Create
          </LoadingButton>
        </Stack>
      </Paper>
    </Box>
  );
}

Create.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
