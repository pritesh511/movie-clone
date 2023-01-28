import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import BrowseGalleryOutlinedIcon from "@mui/icons-material/BrowseGalleryOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Avatar, Typography } from "@mui/material";

const Drawerbar = ({ toggleDrawer, openDrawer, anchor }) => {
  const list = (anchor) => (
    <Box
      className="DrawerMain"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className="drawerItem">
          <Avatar
            src="https://www.svgrepo.com/show/61986/avatar.svg"
            className="Avatar"
          />
          <Typography className="AvtarName">Pritesh M</Typography>
        </ListItem>
        <ListItem className="DrawerItem">
          <ListItemButton className="ItemButton active">
            <ListItemIcon style={{ minWidth: "35px" }}>
              <SearchRoundedIcon className="ItemIcon active" />
            </ListItemIcon>
            <ListItemText className="ItemText active" primary="Discover" />
          </ListItemButton>
        </ListItem>
        <ListItem className="DrawerItem">
          <ListItemButton className="ItemButton">
            <ListItemIcon style={{ minWidth: "35px" }}>
              <PlaylistAddRoundedIcon className="ItemIcon" />
            </ListItemIcon>
            <ListItemText className="ItemText" primary="Playlist" />
          </ListItemButton>
        </ListItem>
        <ListItem className="DrawerItem">
          <ListItemButton className="ItemButton">
            <ListItemIcon style={{ minWidth: "35px" }}>
              <LiveTvRoundedIcon className="ItemIcon" />
            </ListItemIcon>
            <ListItemText className="ItemText" primary="Movie" />
          </ListItemButton>
        </ListItem>
        <ListItem className="DrawerItem">
          <ListItemButton className="ItemButton">
            <ListItemIcon style={{ minWidth: "35px" }}>
              <DesktopWindowsRoundedIcon className="ItemIcon" />
            </ListItemIcon>
            <ListItemText className="ItemText" primary="Tv Shows" />
          </ListItemButton>
        </ListItem>
        <ListItem className="DrawerItem">
          <ListItemButton className="ItemButton">
            <ListItemIcon style={{ minWidth: "35px" }}>
              <FormatListBulletedRoundedIcon className="ItemIcon" />
            </ListItemIcon>
            <ListItemText className="ItemText" primary="My List" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider style={{ background: "#394B61" }} />
      <List>
        <ListItem className="DrawerItem">
          <ListItemButton className="ItemButton">
            <ListItemIcon style={{ minWidth: "35px" }}>
              <BrowseGalleryOutlinedIcon className="ItemIcon" />
            </ListItemIcon>
            <ListItemText className="ItemText" primary="Watch Later" />
          </ListItemButton>
        </ListItem>
        <ListItem className="DrawerItem">
          <ListItemButton className="ItemButton">
            <ListItemIcon style={{ minWidth: "35px" }}>
              <FavoriteBorderOutlinedIcon className="ItemIcon" />
            </ListItemIcon>
            <ListItemText className="ItemText" primary="Recomended" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider style={{ background: "#394B61" }} />
      <List>
        <ListItem className="DrawerItem">
          <ListItemButton className="ItemButton">
            <ListItemIcon style={{ minWidth: "35px" }}>
              <SettingsOutlinedIcon className="ItemIcon" />
            </ListItemIcon>
            <ListItemText className="ItemText" primary="Setting" />
          </ListItemButton>
        </ListItem>
        <ListItem className="DrawerItem">
          <ListItemButton className="ItemButton">
            <ListItemIcon style={{ minWidth: "35px" }}>
              <LogoutOutlinedIcon className="ItemIcon" />
            </ListItemIcon>
            <ListItemText className="ItemText" primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={anchor}
          open={openDrawer[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Drawerbar;
