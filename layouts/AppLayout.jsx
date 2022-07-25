import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountMenu from "../components/AccountMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
      {children}
      {/* footer  */}
      footer
    </Box>
  );
}
