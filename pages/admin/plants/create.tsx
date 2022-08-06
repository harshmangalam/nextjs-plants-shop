import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AdminLayout from "../../../layouts/AdminLayout";
import UploadImages from "../../../components/UploadImages";
import prisma from "../../../lib/prisma";
import usePlants from "../../../hooks/dashboard/usePlants";
export default function CreatePlant({ categories }) {
  const {
    plant,
    createPlant,
    handleAddImageUrls,
    handleInputChange,
    creating,
  } = usePlants({
    name: "",
    images: [],
    price: 0,
    description: "",
    categoryId: "",
  });
  return (
    <Box>
      <Paper sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
        <Stack
          spacing={2}
          component={"form"}
          method="post"
          onSubmit={createPlant}
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
                    <Avatar src={category.images[0].url} />
                    <Typography>{category.name}</Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <UploadImages onAddImages={handleAddImageUrls} multiple />
          <LoadingButton
            type="submit"
            loading={creating}
            variant="contained"
            size="large"
          >
            Create Plant
          </LoadingButton>
        </Stack>
      </Paper>
    </Box>
  );
}

CreatePlant.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export async function getServerSideProps() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      images: true,
      name: true,
    },
  });
  return {
    props: {
      categories,
    },
  };
}
