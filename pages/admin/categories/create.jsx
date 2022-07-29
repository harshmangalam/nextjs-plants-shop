import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
} from "@mui/material";
import AdminLayout from "../../../layouts/AdminLayout";
import UploadImages from "../../../components/UploadImages";
export default function Create() {
  return (
    <Box>
      <Paper sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
        <Stack spacing={2} component={"form"} method="post">
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="category-name">Category name</InputLabel>
            <OutlinedInput id="category-name" label="Category name" />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="category-description">
              Category description
            </InputLabel>
            <OutlinedInput
              multiline
              maxRows={5}
              id="category-description"
              label="Category description"
            />
          </FormControl>
          <UploadImages />
          <Button variant="contained" size="large">
            Create
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

Create.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
