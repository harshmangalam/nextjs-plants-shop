import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AdminLayout from "../../layouts/AdminLayout";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CategoryGraph from "../../components/CategoryGraph";
import OrdersGraph from "../../components/OrdersGraph";
import prisma from "../../lib/prisma";
import CountCard from "../../components/Admin/CountCard";
export default function AdminHome({ plantsCount, categoriesCount }) {
  return (
    <Box>
      {/* counts */}
      <Grid container spacing={4}>
        <Grid item md={3}>
          <CountCard
            icon={<PeopleAltOutlinedIcon />}
            title="Customers"
            count={4}
          />
        </Grid>
        <Grid item md={3}>
          <CountCard
            icon={<CategoryOutlinedIcon />}
            title="Categories"
            count={categoriesCount}
          />
        </Grid>
        <Grid item md={3}>
          <CountCard
            icon={<YardOutlinedIcon />}
            title="Plants"
            count={plantsCount}
          />
        </Grid>
        <Grid item md={3}>
          <CountCard
            icon={<ShoppingBagOutlinedIcon />}
            title="Orders"
            count={4}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={4}>
        {/* orders graph in bar chart  */}
        <Grid item md={8}>
          <OrdersGraph />
        </Grid>
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

export async function getServerSideProps() {
  try {
    const plantsCount = await prisma.plant.count();
    const categoriesCount = await prisma.category.count();

    return {
      props: {
        plantsCount,
        categoriesCount,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
