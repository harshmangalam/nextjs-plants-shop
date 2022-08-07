import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Plant } from "@prisma/client";

interface Props {
  plant: Plant;
}
export default function PlantCard({ plant }: Props) {
  return (
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
            <Typography variant="subtitle1">{plant.name}</Typography>
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
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
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
  );
}
