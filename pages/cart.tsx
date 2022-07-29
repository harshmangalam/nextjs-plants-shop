import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState } from "react";
import AppLayout from "../layouts/AppLayout"
export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  return (
    <Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={8} sm={12}>
          <Stack spacing={2}>
            {[...new Array(2)].map((item) => (
              <Paper variant="outlined" sx={{ padding: 2 }}>
                <Grid container spacing={4}>
                  <Grid item md={4}>
                    <Avatar
                      src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-plants-peace-lily-spathiphyllum-plant_600x600.jpg?v=1637123920"
                      variant="square"
                      sx={{ width: "100%", height: 140, flex: "none" }}
                    />
                  </Grid>
                  <Grid item md={8} width="100%">
                    <Stack flex={1} spacing={1}>
                      <Stack
                        direction="row"
                        justifyContent={"space-between"}
                        alignItems="center"
                      >
                        <Typography fontSize={"medium"} variant="h6">
                          Peace Lily, Spathiphyllum - Plant
                        </Typography>
                        <IconButton color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Stack>

                      <Stack direction={"row"} spacing={1} alignItems="center">
                        <CurrencyRupeeIcon fontSize="small" />
                        <Typography variant="subtitle1">399</Typography>
                      </Stack>

                      <Box>
                        <TextField
                          size="small"
                          id="quantity"
                          label="Quantity"
                          variant="standard"
                          type="number"
                          inputProps={{ min: 1 }}
                          defaultValue={1}
                        />
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Stack>
        </Grid>

        <Grid item md={4} sm={12} width={"100%"}>
          <Paper sx={{ padding: 2 }}>
            <Stack spacing={1}>
              <Stack direction="row" spacing={4} alignItems="center">
                <Typography variant="body1">Subtotal </Typography>
                <Typography variant="h6">3</Typography>
              </Stack>
              <Stack direction="row" spacing={4} alignItems="center">
                <Typography variant="body1">Price </Typography>
                <Stack direction={"row"} spacing={1} alignItems="center">
                  <CurrencyRupeeIcon fontSize="medium" />
                  <Typography variant="h6">399</Typography>
                </Stack>
              </Stack>
              <Button variant="contained">Proceed to pay</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}


Cart.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};