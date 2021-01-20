import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,
        Toolbar,
        Typography,
        Box }     from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  position="static">
        <Toolbar >
        
        <Typography component="div" variant="h6" className={classes.title}>
        <Box textAlign="center" m={1}>

          People of Star Wars
          </Box>
          </Typography>
     
          
        </Toolbar>
      </AppBar>
    </div>
  );
}