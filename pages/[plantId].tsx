import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AppLayout from "../layouts/AppLayout";
import prisma from "../lib/prisma";
export default function PlantDetails({ plant }) {
  const [previewImage, setPreviewImage] = useState(plant.images[0].url);

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Stack spacing={2}>
            <Box
              component="img"
              sx={{ height: 500, objectFit: "cover", width: "100%" }}
              src={previewImage}
              alt={plant.name}
            />
            <Stack direction={"row"} spacing={2}>
              {plant.images.map((image) => (
                <Card>
                  <CardActionArea onClick={() => setPreviewImage(image.url)}>
                    <CardMedia
                      sx={{ height: 100, width: 100, objectFit: "cover" }}
                      component={"img"}
                      image={image.url}
                    />
                  </CardActionArea>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Stack spacing={2}>
            <Typography variant={"h5"}>{plant.name}</Typography>

            <Stack direction={"row"} spacing={1} alignItems="center">
              <CurrencyRupeeIcon fontSize="medium" />
              <Typography variant="h6">{plant.price}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Rating
                name="plant-feedbacks"
                value={4.1}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Typography variant="subtitle1">400 reviews</Typography>
            </Stack>

            <Typography paragraph>{plant.description}</Typography>
            <Box>
              <Button variant="contained" size="large">
                Add to cart
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps({ params }) {
  const { plantId } = params;
  const plant = await prisma.plant.findUnique({
    where: {
      id: plantId,
    },
  });
  return {
    props: {
      plant: JSON.parse(JSON.stringify(plant)),
    },
  };
}

PlantDetails.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
