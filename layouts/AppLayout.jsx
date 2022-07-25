import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountMenu from "../components/AccountMenu"
export default function AppLayout({ children }) {
  return (
    <Box>
      {/* navbar  start */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plants
          </Typography>

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
