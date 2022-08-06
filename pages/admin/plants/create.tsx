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
export default function CreatePlant({ categories }) {
  return (
    <Box>
      <Paper sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
        <Stack spacing={2} component={"form"} method="post" onSubmit={() => {}}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="plant-name">Plant name</InputLabel>
            <OutlinedInput
              value={""}
              onChange={() => {}}
              name="name"
              id="plant-name"
              label="plant name"
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="plant-price">Plant price</InputLabel>
            <OutlinedInput
              value={""}
              onChange={() => {}}
              name="price"
              id="plant-price"
              label="Plant price"
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="plant-description">
              Plant description
            </InputLabel>
            <OutlinedInput
              multiline
              value={""}
              onChange={() => {}}
              name="description"
              maxRows={5}
              rows={5}
              id="plant-description"
              label="plant description"
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel id="select-category">Category</InputLabel>
            <Select
              labelId="select-category"
              id="category"
              value={""}
              label="Category"
              onChange={() => {}}
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
          <UploadImages onAddImages={() => {}} multiple />
          <LoadingButton
            type="submit"
            loading={false}
            variant="contained"
            size="large"
          >
            Create
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
