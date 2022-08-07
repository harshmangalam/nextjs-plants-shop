import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Link from "next/link";
import AppLayout from "../layouts/AppLayout";
import prisma from "../lib/prisma";
import { Category, Plant } from "@prisma/client";
import CategoryItem from "../components/Category/CategoryItem";

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
          <Grid item md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <Link href={plant.id} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={(plant.images[0] as { url: string }).url}
                    alt={plant.name}
                  />
                  <CardContent>
                    <Stack direction={"row"} spacing={1} alignItems="center">
                      <CurrencyRupeeIcon fontSize="medium" />
                      <Typography variant="h5">{plant.price}</Typography>
                    </Stack>
                    <Typography variant="subtitle1">
                     {plant.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Stack spacing={2} width="100%">
                  <Stack direction="row" spacing={1}>
                    <Rating
                      size="small"
                      name="plant-feedbacks"
                      value={4.5}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    <Typography variant="caption">44 reviews</Typography>
                  </Stack>

                  <Button fullWidth color="primary" variant="contained">
                    Add to cart
                  </Button>
                </Stack>
              </CardActions>
            </Card>
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
