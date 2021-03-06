import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import {
  IconButton,
  Typography,
  Switch,
  withStyles,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const {isDarkMode, toggleTheme} = this.context;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
          <ToolBar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="🇫🇷">
                🇫🇷
              </span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App title
            </Typography>
            <Switch onChange={toggleTheme}/>
            <div className={classes.grow}></div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
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
