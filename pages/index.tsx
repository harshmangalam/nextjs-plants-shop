import { Box, Grid, Stack } from "@mui/material";
import AppLayout from "../layouts/AppLayout";
import prisma from "../lib/prisma";
import { Category, Plant } from "@prisma/client";
import CategoryItem from "../components/Category/CategoryItem";
import PlantCard from "../components/Plant/PlantCard";

interface Props {
  categories: Category[];
  plants: Plant[];
}
export default function Home({ categories, plants }: Props) {
  return (
    <Box>
      {/* categories start  */}
      <Stack direction={"row"} spacing={4} sx={{ overflowX: "auto" }}>
        {categories.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
      </Stack>

      {/* categories end  */}

      {/* plants start  */}

      <Grid container spacing={4} mt={4}>
        {plants.map((plant) => (
          <Grid key={plant.id} item md={3}>
            <PlantCard plant={plant} />
          </Grid>
        ))}
      </Grid>

      {/* plants end  */}
    </Box>
  );
}

export async function getServerSideProps() {
  try {
    const categories = await prisma.category.findMany();
    const plants = await prisma.plant.findMany();
    return {
      props: {
        categories: JSON.parse(JSON.stringify(categories)),
        plants: JSON.parse(JSON.stringify(plants)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
