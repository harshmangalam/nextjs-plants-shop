import { Box } from "@mui/system";
import AdminLayout from "../../layouts/AdminLayout"
export default function AdminHome() {
  return <Box>Admin</Box>;
}

AdminHome.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
