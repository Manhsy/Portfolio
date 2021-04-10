//libary import
import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

//component import
import Introduction from './components/Introduction';
import ProjectCards from './components/ProjectCards';

//images
import emailRocketImage from './image/source.gif'
import yelpImage from './image/yelp.jpeg'
import networkIntrusionImage from './image/Network-Intrusion.jpeg'
import computerVisionImage from './image/computerVision.jpeg'

const useStyles = makeStyles ((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
  },

}));


function App() {
  const classes = useStyles();
  const name = <p>Hello, I'm <br/> Manh Sy</p>
  const introduction = <span>I’m a Staff Software Engineer currently working as Tech Lead of the Doc Squad at Algolia. I mostly do front-end development, and I’m a Vue.js and CSS nerd. I can't shut up about test-driven development and utility-first CSS. I also share what I learn on my blog frontstuff.io, or at meetups and conferences.</span>
  const emailRocketProject = {
    name: "Email-rocket",
    description: "Using React, I created a web application that allows users to send the same emails to multiple recipients.",
    image: emailRocketImage,
    link: "https://email-rocket.netlify.app"
  }
  const yelpRatingProject = {
    name: "Yelp Rating Predictor",
    description: "Using React, I created a web application that allows users to send the same emails to multiple recipients.",
    image: yelpImage,
    link: "https://github.com/Manhsy/Yelp-Rating-Predictor"
  }
  const networkIntrusionProject = {
    name: "Network Intrusion Detector",
    description: "Using React, I created a web application that allows users to send the same emails to multiple recipients.",
    image: networkIntrusionImage,
    link: "https://github.com/Manhsy/Network-Intrusion-Detector"
  }
  const computerVisionProject = {
    name: "Computer Vision",
    description: "Using React, I created a web application that allows users to send the same emails to multiple recipients.",
    image: computerVisionImage,
    link: "https://github.com/Manhsy/Computer-vision"
  }

  return (
    <div> 
      <Grid container sx = "12" md = "12" lg = "12" className={classes.grid} direction="row" justify="flex-start" alignItems="flex-start" >
          <Grid container sx = "12" lg = "5" md = "12"  direction="column-reverse" justify="flex-start" alignItems="flex-start">
            <div style = {{marginLeft: 90}}> 
                <Grid item>
                  <Introduction name = {name} description = {introduction}/>
                </Grid> 
            </div>
          </Grid>
          
          <Grid container sx = "12" lg = "7" md = "12" direction="column" justify="flex-end" alignItems="flex-end" spacing = {7}>
            <div style = {{marginTop: 100, marginRight: 80}}> 
              <Grid item>
                <Grid container direction="row" justify="flex-end" alignItems="flex-start" spacing = {2}>
                  <Grid item >
                    <ProjectCards info = {emailRocketProject}/> 
                  </Grid>
                  <Grid item >
                    <ProjectCards info = {yelpRatingProject}/> 
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div style = {{marginRight: 80, marginTop: 15}}> 
              <Grid item>
                <Grid container direction="row" justify="flex-end" alignItems="flex-start" spacing = {2} >
                  <Grid item >
                    <ProjectCards info = {networkIntrusionProject}/>
                  </Grid>
                  <Grid item >
                    <ProjectCards info = {computerVisionProject}/>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div style = {{marginRight: 80, marginTop: 15}}> 
              <Grid item>
                <Grid container direction="row" justify="flex-end" alignItems="flex-start" spacing = {2} >
                  <Grid item >
                    <ProjectCards info = {networkIntrusionProject}/>
                  </Grid>
                  <Grid item >
                    <ProjectCards info = {computerVisionProject}/>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div style = {{marginRight: 80, marginTop: 15}}> 
              <Grid item>
                <Grid container direction="row" justify="flex-end" alignItems="flex-start" spacing = {2} >
                  <Grid item >
                    <ProjectCards info = {networkIntrusionProject}/>
                  </Grid>
                  <Grid item >
                    <ProjectCards info = {computerVisionProject}/>
                  </Grid>
                </Grid>
              </Grid>
            </div>


          </Grid>
      </Grid>
    </div>

  );
}

export default App;
