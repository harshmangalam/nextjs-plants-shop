import { Avatar, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";

export default function Cart() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item md={8}>
          {[...new Array(4)].map((item) => (
            <Paper>
              <Avatar
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-plants-peace-lily-spathiphyllum-plant_600x600.jpg?v=1637123920"
                variant="square"
                sx={{ width: 100, height: 100 }}
              />
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
