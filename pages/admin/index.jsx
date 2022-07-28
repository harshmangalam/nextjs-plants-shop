import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AdminLayout from "../../layouts/AdminLayout";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CategoryGraph from "../../components/CategoryGraph"
export default function AdminHome() {
  return (
    <Box>
      {/* countings */}
      <Grid container spacing={4}>
        {[...new Array(4)].map((item) => (
          <Grid item md={3}>
            <Paper sx={{ padding: 2 }}>
              <Stack direction={"row"} spacing={2} alignItems="center">
                <Avatar
                  sx={{ bgcolor: (theme) => theme.palette.success.light }}
                >
                  <PeopleAltOutlinedIcon />
                </Avatar>
                <Stack>
                  <Typography variant="body1">Users</Typography>
                  <Typography variant="h6">459</Typography>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} mt={4}>
        {/* orders graph in bar chart  */}
        <Grid item md={4}>
          <CategoryGraph />
        </Grid>
       
      </Grid>
    </Box>
  );
}

AdminHome.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
