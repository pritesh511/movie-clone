import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import BrowseGalleryOutlinedIcon from "@mui/icons-material/BrowseGalleryOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Avatar, Typography } from "@mui/material";
import { Grid, withStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { setAnimationDetailsCard, setMovieDetailsCard } from "../Redux/Action";
import { useDispatch } from "react-redux";

const Drawerbar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = window.location.pathname;
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid className={classes.DrwerWrapper}>
        <List>
          <ListItem
            className={classes.DrawerTopItem}
            onClick={() =>
              dispatch(
                setMovieDetailsCard(null),
                dispatch(setAnimationDetailsCard(false))
              )
            }
          >
            <Avatar
              src="https://www.svgrepo.com/show/61986/avatar.svg"
              className={classes.Avatar}
            />
            <Typography className={classes.AvtarName}>Pritesh M</Typography>
          </ListItem>
          <ListItem
            className={classes.DrawerItem}
            onClick={() => {
              navigate("/");
              dispatch(setMovieDetailsCard(null));
            }}
          >
            <ListItemButton
              className={
                history === "/" ? classes.ItemButtonActive : classes.ItemButton
              }
            >
              <ListItemIcon style={{ minWidth: "35px" }}>
                <SearchRoundedIcon
                  className={
                    history === "/" ? classes.ItemIconActive : classes.ItemIcon
                  }
                />
              </ListItemIcon>
              <ListItemText
                className={
                  history === "/" ? classes.ItemTextActive : classes.ItemText
                }
                primary="Discover"
              />
            </ListItemButton>
          </ListItem>
          {/* <ListItem className={classes.DrawerItem}>
              <ListItemButton className="ItemButton">
                <ListItemIcon style={{ minWidth: "35px" }}>
                  <PlaylistAddRoundedIcon className="ItemIcon" />
                </ListItemIcon>
                <ListItemText className="ItemText" primary="Playlist" />
              </ListItemButton>
            </ListItem> */}
          <ListItem
            className={classes.DrawerItem}
            onClick={() => {
              navigate("/movie");
              dispatch(setMovieDetailsCard(null));
            }}
          >
            <ListItemButton
              className={
                history === "/movie"
                  ? classes.ItemButtonActive
                  : classes.ItemButton
              }
            >
              <ListItemIcon style={{ minWidth: "35px" }}>
                <LiveTvRoundedIcon
                  className={
                    history === "/movie"
                      ? classes.ItemIconActive
                      : classes.ItemIcon
                  }
                />
              </ListItemIcon>
              <ListItemText
                className={
                  history === "/movie"
                    ? classes.ItemTextActive
                    : classes.ItemText
                }
                primary="Movie"
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            className={classes.DrawerItem}
            onClick={() => {
              navigate("/tv-show");
            }}
          >
            <ListItemButton
              className={
                history === "/tv-show"
                  ? classes.ItemButtonActive
                  : classes.ItemButton
              }
            >
              <ListItemIcon style={{ minWidth: "35px" }}>
                <DesktopWindowsRoundedIcon
                  className={
                    history === "/tv-show"
                      ? classes.ItemIconActive
                      : classes.ItemIcon
                  }
                />
              </ListItemIcon>
              <ListItemText
                className={
                  history === "/tv-show"
                    ? classes.ItemTextActive
                    : classes.ItemText
                }
                primary="Tv Shows"
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            className={classes.DrawerItem}
            onClick={() => {
              navigate("/my-list");
            }}
          >
            <ListItemButton
              className={
                history === "/my-list"
                  ? classes.ItemButtonActive
                  : classes.ItemButton
              }
            >
              <ListItemIcon style={{ minWidth: "35px" }}>
                <FormatListBulletedRoundedIcon
                  className={
                    history === "/my-list"
                      ? classes.ItemIconActive
                      : classes.ItemIcon
                  }
                />
              </ListItemIcon>
              <ListItemText
                className={
                  history === "/my-list"
                    ? classes.ItemTextActive
                    : classes.ItemText
                }
                primary="My List"
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider style={{ background: "#394B61" }} />
        <List>
          <ListItem className={classes.DrawerItem}>
            <ListItemButton className={classes.ItemButton}>
              <ListItemIcon style={{ minWidth: "35px" }}>
                <BrowseGalleryOutlinedIcon className={classes.ItemIcon} />
              </ListItemIcon>
              <ListItemText
                className={classes.ItemText}
                primary="Watch Later"
              />
            </ListItemButton>
          </ListItem>
          <ListItem className={classes.DrawerItem}>
            <ListItemButton className={classes.ItemButton}>
              <ListItemIcon style={{ minWidth: "35px" }}>
                <FavoriteBorderOutlinedIcon className={classes.ItemIcon} />
              </ListItemIcon>
              <ListItemText className={classes.ItemText} primary="Recomended" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider style={{ background: "#394B61" }} />
        <List>
          <ListItem className={classes.DrawerItem}>
            <ListItemButton className={classes.ItemButton}>
              <ListItemIcon style={{ minWidth: "35px" }}>
                <SettingsOutlinedIcon className={classes.ItemIcon} />
              </ListItemIcon>
              <ListItemText className={classes.ItemText} primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem className={classes.DrawerItem}>
            <ListItemButton className={classes.ItemButton}>
              <ListItemIcon style={{ minWidth: "35px" }}>
                <LogoutOutlinedIcon className={classes.ItemIcon} />
              </ListItemIcon>
              <ListItemText className={classes.ItemText} primary="Log Out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
    </React.Fragment>
  );
};

const styles = () => ({
  DrwerWrapper: {
    backgroundColor: "#1f2a3c !important",
    height: "100% !important",
    minWidth: "250px",
    width: "250px",
  },
  DrawerTopItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "13px 0 !important",
    cursor: "pointer",
  },
  Avatar: {
    width: "60px !important",
    height: "60px !important",
  },
  AvtarName: {
    fontFamily: "Open Sans !important",
    color: "#d4d7dd",
    margin: "11px 0 0 0 !important",
  },
  DrawerItem: {
    padding: "0 !important",
    margin: "0 0 4px 0",
  },
  ItemButton: {
    justifyContent: "center !important",
    alignItems: "center !important",
    padding: "8px 0 !important",
    borderRight: "1px solid transparent !important",
  },
  ItemButtonActive: {
    justifyContent: "center !important",
    alignItems: "center !important",
    padding: "8px 0 !important",
    borderRight: "1px solid #00e0ff !important",
    backgroundColor: "#1a2536 !important",
  },
  ItemIcon: {
    height: "18px !important",
    width: "18px !important",
    color: "#d4d7dd",
  },
  ItemIconActive: {
    height: "18px !important",
    width: "18px !important",
    color: "#00e0ff",
  },
  ItemText: {
    margin: "0 !important",
    flex: "0 0 60% !important",
    "& span": {
      fontFamily: "Open Sans !important",
      color: "#d4d7dd",
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
  ItemTextActive: {
    margin: "0 !important",
    flex: "0 0 60% !important",
    "& span": {
      fontFamily: "Open Sans !important",
      color: "#00e0ff !important",
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
});

export default withStyles(styles)(Drawerbar);
