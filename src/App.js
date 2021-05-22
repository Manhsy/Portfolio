//libary import
import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


//component import
import RightPannelGrid from './components/RightPannelGrid';
import LeftPannelGrid from './components/LeftPannelGrid';


const useStyles = makeStyles ((theme) => ({
  grid: {
    content: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
          marginLeft: "1vw", marginRight: "1vw", marginTop: "1vw"
      },
      [theme.breakpoints.up('md')]: {
          marginLeft: 90, marginRight: 15
      },
      [theme.breakpoints.up('lg')]: {
          marginLeft: "5.5vw", marginRight: "5vw", marginTop: "-1vw"
      },
  }
  },

}));

function App() {
  const classes = useStyles();
  return (
    <div> 
      <Grid container sx = "12" md = "12" lg = "12" className={classes.grid} direction="row" justify="flex-start" alignItems="flex-start" >
          <Grid item md>
            <LeftPannelGrid/>
          </Grid>
          <Grid item md className={classes.grid}>
            <RightPannelGrid/>
            </Grid>
      </Grid>
    </div>

  );
}

export default App;
