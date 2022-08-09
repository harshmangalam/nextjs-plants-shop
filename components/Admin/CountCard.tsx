import { Avatar, Paper, Stack, Typography } from "@mui/material";

export default function CountCard({ icon, count, title }) {
  return (
    <Paper sx={{ padding: 2 }}>
      <Stack direction={"row"} spacing={2} alignItems="center">
        <Avatar sx={{ bgcolor: (theme) => theme.palette.success.light }}>
          {icon}
        </Avatar>
        <Stack>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="h6">{count}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
