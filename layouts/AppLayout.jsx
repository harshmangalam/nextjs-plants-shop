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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plants
          </Typography>
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

          <Typography textAlign="center" component={"h6"} mt={1}>
            Made Open Source By Harsh Mangalam
          </Typography>
        </Container>
      </Paper>
    </Stack>
  );
}
