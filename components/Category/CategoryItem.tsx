import { Avatar, Stack, Typography } from "@mui/material";
import { Category } from "@prisma/client";

export default function CategoryItem({ id, name, images }: Category) {
  return (
    <Stack spacing={1}>
      <Avatar
        alt={name}
        src={(images[0] as { url: string }).url}
        sx={{ width: 140, height: 140 }}
        variant="rounded"
      />
      <Typography
        fontSize={14}
        textAlign={"center"}
        sx={{ textTransform: "uppercase" }}
      >
        {name}
      </Typography>
    </Stack>
  );
}
