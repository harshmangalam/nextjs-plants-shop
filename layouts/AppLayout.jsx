import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountMenu from "../components/AccountMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GitHubIcon from "@mui/icons-material/GitHub";
import YardIcon from "@mui/icons-material/Yard";
export default function AppLayout({ children }) {
  return (
    <Box>
      {/* navbar  start */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plants
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="cart"
          >
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <AccountMenu />
        </Toolbar>
      </AppBar>
      {/* navbar end  */}
      {/* main  */}
      <Box component={"main"} py={4}>
        <Container>{children}</Container>
      </Box>

      {/* footer  */}
      <Paper
        component={"footer"}
        elevation={0}
      
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
    </Box>
  );
}
