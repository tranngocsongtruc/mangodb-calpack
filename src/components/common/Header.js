// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#003262', // Berkeley Blue
  },
  title: {
    flexGrow: 1,
    color: '#FDB515', // California Gold
    fontFamily: 'Saira Stencil One',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          CALPACK
        </Typography>
        <Link to="/academics">Academics</Link>
        {/* ...other links */}
      </Toolbar>
    </AppBar>
  );
}
