import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  Container
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Link from "next/link";


const drawerWidth = 300;
export default function AdminLayout({ children }) {
  const [openDrawer, setOpenDrawer] = useState(true);
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
        <List>
          {menus.map((menu) => (
            <Link href={menu.href} passHref>
              <ListItem key={menu.name} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      {/* drawer end  */}
      <Box ml={openDrawer ? `${drawerWidth}px` : 0} my={12}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

const menus = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <DashboardOutlinedIcon />,
  },
  {
    name: "Categories",
    href: "/admin/categories",
    icon: <CategoryOutlinedIcon />,
  },
  {
    name: "Plants",
    href: "/admin/plants",
    icon: <YardOutlinedIcon />,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: <LocalMallOutlinedIcon />,
  },
  
];
