import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { searchFilter } from "../Redux/Action";
import { withStyles } from "@material-ui/core";
import { IconButton } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#1A2536",
  "&:hover": {
    backgroundColor: "#1A2536",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Appbar = (props) => {
  const dispatch = useDispatch();
  const { classes } = props;

  return (
    <React.Fragment>
      <Box>
        <AppBar position="static" className="MainAppBar">
          <Toolbar className={classes.Toolbar}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              className={classes.MobileButton}
            >
              <MenuIcon />
            </IconButton>
            <Search className={classes.SearchWrapper}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => dispatch(searchFilter(e.target.value))}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

const styles = () => ({
  Toolbar: {
    padding: "0 !important",
  },
  SearchWrapper: {
    width: "567px !important",
    maxWidth: "567px",
    backgroundColor: "#1a2536",
    margin: "0 !important",
  },
  MobileButton: {
    display: "none !important",
  },
});

export default withStyles(styles)(Appbar);
