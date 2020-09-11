import React, { Component } from "react";
// import classes from "*.module.css";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import {
  IconButton,
  Typography,
  Switch,
  withStyles,
  InputBase,
} from "@material-ui/core";
import styles from "./styles/NavBarStyles";

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <ToolBar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="🇫🇷">
                🇫🇷
              </span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App title
            </Typography>
            <Switch />
            <div className={classes.grow}></div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <searchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
