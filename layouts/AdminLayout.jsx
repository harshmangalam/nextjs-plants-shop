import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';


const drawerWidth = 300;
export default function AdminLayout({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box>
      {/* appbar  start */}

      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Tooltip title={openDrawer ? "Close" : "Open"}>
            <IconButton
              color="inherit"
              aria-label="toggle drawer"
              onClick={() => setOpenDrawer((o) => !o)}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      {/* appbar end  */}

      {/* drawer start  */}

      <Drawer
        variant="persistent"
        anchor="left"
        open={openDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {/* <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      {/* drawer end  */}
      {children}
    </Box>
  );
}


// const menus =[
//     {
//         name:"Dashboard",
//         href:"/admin",
//         icon:
//     }
// ]