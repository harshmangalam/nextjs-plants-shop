import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountMenu from "../components/AccountMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import YardIcon from "@mui/icons-material/Yard";
import Link from "next/link";
export default function AppLayout({ children }) {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      {/* navbar  start */}
      <AppBar position="static">
        <Toolbar>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            width="100%"
            alignItems={"center"}
          >
            <Link href="/" passHref>
              <Stack
                sx={{ cursor: "pointer" }}
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <YardIcon fontSize="large" />
                <Typography variant="h6">Plants</Typography>
              </Stack>
            </Link>

            <Stack direction="row" spacing={2}>
              <Link passHref href={"/cart"}>
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="cart"
                >
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Link>
              <AccountMenu />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* navbar end  */}
      {/* main  */}
      <Box component={"main"} py={4} sx={{ flexGrow: 1 }}>
        <Container>{children}</Container>
      </Box>

      {/* footer  */}
      <Paper
        component={"footer"}
        variant={"outlined"}
        sx={{ borderRadius: 0, padding: 4 }}
      >
        <Container>
          <Stack
            spacing={1}
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <YardIcon fontSize="large" />
            <Typography variant="h5">Plants</Typography>
          </Stack>

          <Typography textAlign="center" variant="body1" mt={1}>
            Made Open Source By Harsh Mangalam
          </Typography>
        </Container>
      </Paper>
    </Stack>
  );
}
