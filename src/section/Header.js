import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
}));

export default function ButtonAppBar() {

  const classes = useStyles();

  const history = useHistory()

  const to = (name) => {
    history.replace(name)
  }

  return (
    <div className={classes.root} style={{color: "white"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Love Insurance
          </Typography>
          <Button color="inherit" onClick={()=>{to('/login')}}>
            Login
          </Button>
          <Button color="inherit" onClick={()=>{to('/register')}}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
