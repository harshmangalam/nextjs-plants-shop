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

export default function Home() {
  return (
    <Box>
      {/* categories start  */}
      <Stack direction={"row"} spacing={4} sx={{ overflowX: "auto" }}>
        {[...new Array(6)].map((category) => (
          <Stack spacing={1}>
            <Avatar
              alt="garedening"
              src="https://cdn.shopify.com/s/files/1/0047/9730/0847/collections/nurserylive-trending-in-gardening-collection-image_173x173.jpg?v=1652097678"
              sx={{ width: 140, height: 140 }}
              variant="rounded"
            />
            <Typography
              fontSize={14}
              textAlign={"center"}
              sx={{ textTransform: "uppercase" }}
            >
              garedening
            </Typography>
          </Stack>
        ))}
      </Stack>

      {/* categories end  */}

      {/* plants start  */}

      <Grid container spacing={4} mt={4}>
        {[...new Array(10)].map((plant) => (
          <Grid item md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <Link href={"/123"} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-magical-aloe-vera-plant_c3575d29-9805-40e8-88b5-472cc9dca88f.jpg?v=1634223557"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Stack direction={"row"} spacing={1} alignItems="center">
                      <CurrencyRupeeIcon fontSize="medium" />
                      <Typography variant="h5">399</Typography>
                    </Stack>
                    <Typography variant="subtitle1">
                      Peace Lily, Spathiphyllum - Plant
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

const categories = [
  {
    _id: 1,
    name: "garedening",
    image:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-gardening-menu_96x108.png?v=1652634796",
  },
];
