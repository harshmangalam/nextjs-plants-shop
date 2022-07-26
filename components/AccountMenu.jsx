import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Link from "next/link";
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/57381638?v=4"
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar src="https://avatars.githubusercontent.com/u/57381638?v=4" />
          <Typography ml={2}>Harsh Mangalam</Typography>
        </MenuItem>

        <Divider />

        <Link href="/admin" passHref>
          <MenuItem>
            <ListItemIcon>
              <DashboardOutlinedIcon />
            </ListItemIcon>
            Dashboard
          </MenuItem>
        </Link>
        <MenuItem>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
