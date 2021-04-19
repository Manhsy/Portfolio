//libary import
import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

//component import
import RightPannelGrid from './components/RightPannelGrid';
import LeftPannelGrid from './components/LeftPannelGrid';

const useStyles = makeStyles ((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
  },

}));

function App() {
  const classes = useStyles();
  return (
    <div> 
      <Grid container sx = "12" md = "12" lg = "12" className={classes.grid} direction="row" justify="flex-start" alignItems="flex-start" >
            <LeftPannelGrid/>
            <RightPannelGrid/>
      </Grid>
    </div>

  );
}

export default App;
