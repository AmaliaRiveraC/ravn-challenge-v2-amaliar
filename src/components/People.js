import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function People(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}> 
      <Accordion TransitionProps={{ unmountOnExit: true }} >
        <a href="#">
        <AccordionSummary
          expandIcon={ <ExpandMoreIcon  />}
          aria-controls="panel1a-content"
          id="panel1a-header"    
        > 
          <Typography  className={classes.heading} type='h1' >{props.name} </Typography>
          <Typography fontSize={8} className={classes.secondaryHeading}> {props.specie}  from {props.homeworld}</Typography>
        </AccordionSummary>
        </a>
      </Accordion>
    </div>
  );
}