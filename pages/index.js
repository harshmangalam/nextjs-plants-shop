import { Avatar, Box, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Stack direction={"row"} spacing={4} sx={{overflowX:"auto"}}>
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
