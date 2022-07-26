import {
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function PlantDetails({ plant }) {
  const [previewImage, setPreviewImage] = useState(plant.images[0]);

  return (
    <Box>
      <Grid container>
        <Grid item md={6}>
          <Stack spacing={2}>
            <Box
              component="img"
              sx={{ height: 500,objectFit:"cover" }}
              src={previewImage}
              alt={plant.name}
            />
            <Stack direction={"row"} spacing={2}>
              {plant.images.map((image) => (
                <Card>
                  <CardActionArea onClick={() => setPreviewImage(image)}>
                    <CardMedia
                      sx={{ height: 100, width: 100, objectFit: "cover" }}
                      component={"img"}
                      image={image}
                    />
                  </CardActionArea>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps({ params }) {
  const { plantId } = params;
  return {
    props: {
      plant: {
        _id: plantId,
        name: "Peace Lily, Spathiphyllum - Plant",
        description: `Peace Lily Plant is a very popular and very rare indoor flowering houseplant. It is also an excellent air purifier plant.`,
        reviews: {
          total: 56,
          avgRating: 4.5,
        },
        price: 346,

        images: [
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-plants-peace-lily-spathiphyllum-plant_600x600.jpg?v=1637123920",
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-peace-lily-spathiphyllum-plant-1_540x720.jpg?v=1637123918",
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-peace-lily-spathiphyllum-plant-2_540x720.jpg?v=1637123917",
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-peace-lily-spathiphyllum-plant-3_540x720.jpg?v=1637123917",
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-peace-lily-spathiphyllum-plant-4_540x720.jpg?v=1637123921",
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-peace-lily-spathiphyllum-plant-5_540x720.jpg?v=1637123917",
        ],
      },
    },
  };
}
