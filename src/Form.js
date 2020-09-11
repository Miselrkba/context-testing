import React, { Component } from "react";
import {
  withStyles,
  Paper,
  Avatar,
  Typography,
  Select,
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "./FormStyles";

class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign In</Typography>
          <Select value='english'>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='german'>German</MenuItem>
            <MenuItem value='slovak'>Slovak</MenuItem>
          </Select>
          <form className={classes.form} action="">
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoFocus></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" name="password" autoFocus></Input>
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember Me"
            />
          </form>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
