
import React from 'react';
import {Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import TechCard from './TechCard';
import ProjectCards from './ProjectCards';
import {makeStyles} from "@material-ui/core/styles";

//icons
import { FaJava } from 'react-icons/fa';
import { IoLogoPython } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import { VscFileBinary } from "react-icons/vsc";
import lambdaIcon from '@iconify-icons/mdi/lambda';
import { Icon } from '@iconify/react';
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import { SiJupyter } from "react-icons/si";
import { DiEclipse } from "react-icons/di";
import { VscCode } from "react-icons/vsc";
import scikitLearn from '@iconify-icons/simple-icons/scikit-learn';
import numpyIcon from '@iconify-icons/file-icons/numpy';

//images
import emailRocketImage from '../image/source.gif'
import yelpImage from '../image/ultimate_guide_to_yelp_for_business_post_image_16.jpeg'
import networkIntrusionImage from '../image/Network-Intrusion.jpeg'
import computerVisionImage from '../image/1_6j34dAOTijqP6HDFnjxPFA_udggex.jpeg'
import antImage from '../image/dcwhdzw-02b0de37-ce78-4b22-95a7-1e458b1fd340.jpeg'
import apiImage from '../image/Callr-Blog-Banners-What-is-an-API-V2-compressor-850x478.jpeg'
import stackOverflowImage from '../image/1_cbiq9DqLP_UEVqIOBb6MqQ.jpeg'
import connectFourImage from '../image/Connect4-2i3b5pb.png'

const emailRocketProject = {
  name: "Email-rocket",
  description: "Using React, I created a web application that allows users to send the same emails to multiple recipients. As the outcome of this project, a senior project group was able to contact thousands of possible clients.",
  image: emailRocketImage,
  link: "https://email-rocket.netlify.app"
}
const yelpRatingProject = {
  name: "Yelp Rating Predictor",
  description: "Using Python and its machine learning frameworks, I created a neural network that can predict a business's Yelp rating based on all the reviews that they've received.",
  image: yelpImage,
  link: "https://github.com/Manhsy/Yelp-Rating-Predictor"
}
const networkIntrusionProject = {
  name: "Network Intrusion Detector",
  description: "Using Python and its machine learning frameworks, I created convolutional and fully connected neural network models that can classify if an incoming network connection is an intrusion.",
  image: networkIntrusionImage,
  link: "https://github.com/Manhsy/Network-Intrusion-Detector"
}
const antProject = {
  name: "Journey of an Ant",
  description: "Using Java and CodeName One, I created a game mobile application that simulates the life of an ant where it can collide with destination flag, spiders, and food stations when it gets hungry.",
  image: antImage,
  link: "https://github.com/Manhsy/Ant-Game"
}

const twitterAPIProject = {
  name: "Twitter API",
  description: "Using JavaScript, Node.js, and MongoDb, I replicated Twitter's API with endpoints that allows clients to follow, like, make posts, and check out other users ",
  image: apiImage,
  link: "https://github.com/Manhsy/twitter-api"
  }
const computerVisionProject = {
  name: "Image Classifier",
  description: "Using Python and its machine learning frameworks, I created a convolutional neural network that can classify an image's category",
  image: computerVisionImage,
  link: "https://github.com/Manhsy/Computer-vision"
}
const stackOverflow = {
  name: "Stack Overflow Difficulty Level",
  description: "Convolutional and fully connected neural network models that can classify an easy, medium, or hard Stack Overflow questions",
  image: stackOverflowImage,
  link: "https://github.com/Manhsy/Stack-Overflow-question-difficulty-level"
  }
const ConnectFour = {
  name: "Image Classifier",
  description: "Using Java, I recreated the Connect Four game with a twist of the opponent being an AI-like algorithm that can calculate one move ahead.",
  image: connectFourImage,
  link: "https://github.com/Manhsy/Connect-Four"
}
const useStyles = makeStyles ((theme) => ({
  grid: {
    content: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
          marginLeft: "-10vw", marginRight: "1vw", marginTop: "1vw"
      },
      [theme.breakpoints.up('md')]: {
          marginLeft: 90, marginRight: 15
      },
      [theme.breakpoints.up('lg')]: {
          marginLeft: "-15%", marginRight: "5vw", marginTop: "-1vw"
      },
  }
  },

}));

function RightPannelGrid(){
    const style = useStyles();
    return (
          <Grid container className = {style.grid} sx = "12" lg = "12" md = "12" direction="column" justify="flex-end" alignItems="flex-end" spacing = {7} style= {{marginTop: 7}}>
            <Grid item id = "project" >
            <Grid container id = 'Other' direction="column" justify="flex-start" alignItems="flex-end" spacing = {2}>
              <Grid item>
                <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing = {1} >
                    <Grid item>
                      <ProjectCards info = {emailRocketProject}/> 
                    </Grid>
                    <Grid item>
                      <ProjectCards info = {yelpRatingProject}/> 
                    </Grid>
                  </Grid>
              </Grid>
              <Grid item>
                  <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing = {1} >
                    <Grid item>
                      <ProjectCards info = {networkIntrusionProject}/>
                    </Grid>
                    <Grid item >
                      <ProjectCards info = {antProject}/>
                    </Grid>
                  </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing = {1} >
                    <Grid item >
                      <ProjectCards info = {twitterAPIProject}/>
                    </Grid>
                    <Grid item >
                      <ProjectCards info = {computerVisionProject}/>
                    </Grid>
                  </Grid>
              </Grid>  
              <Grid item>
                <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing = {1} >
                    <Grid item >
                      <ProjectCards info = {stackOverflow}/>
                    </Grid>
                    <Grid item >
                      <ProjectCards info = {ConnectFour}/>
                    </Grid>
                  </Grid>
                </Grid>            
            </Grid>
            </Grid>
            <Grid item id = 'techonologies'>
              <div style = {{marginLeft: 19}}> 
                <Typography style = {{color: "white", marginBottom: 15, marginTop: 3, fontFamily: 'Helvetica'}}> Programming Languages</Typography>
                <Grid container id = 'Languages' direction="row" justify="flex-start" alignItems="flex-end" spacing = {1}>
                  <Grid item>
                    <TechCard tech = 'Java'icon = {<FaJava/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech = 'Python' icon = {<IoLogoPython/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech = 'JavaScript' icon = {<DiJavascript1/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech = 'Assembly Language'icon = {<VscFileBinary/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech = 'Scheme'icon = {<Icon icon={lambdaIcon}/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech = 'SQL'icon = {<AiOutlineConsoleSql/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech = 'HTML'icon = {<TiHtml5/>}/>
                  </Grid>
                </Grid>
                <Typography style = {{color: "white", marginBottom: 15, marginTop: 30, fontFamily: 'Helvetica'}}> Frameworks </Typography>
                <Grid container id = 'Frameworks' direction="row" justify="flex-start" alignItems="flex-end" spacing = {1}>
                  <Grid item>
                    <TechCard tech = 'React'icon = {<FaReact/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech ='Node.js' icon = {<FaNodeJs/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech ='Tensorflow'icon = {<SiTensorflow/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech ='sci-kit-learn' icon = {<Icon icon={scikitLearn} />}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech = 'Pandas'/>
                  </Grid>
                  <Grid item>
                    <TechCard tech ='NumPy'icon = {<Icon icon={numpyIcon} />}/>
                  </Grid>
                </Grid>

                <Typography style = {{color: "white", marginBottom: 15, marginTop: 30, fontFamily: 'Helvetica'}}> Tools </Typography>
                <Grid container id = 'Other' direction="row" justify="flex-start" alignItems="flex-end" spacing = {1}>
                  <Grid item>
                    <TechCard tech ='Github'icon = {<VscGithub/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech = 'JFlap'/>
                  </Grid>
                  <Grid item>
                    <TechCard tech ='Flying Donut'/>
                  </Grid>
                  <Grid item>
                    <TechCard tech ='SCRUM'icon = {<DiScrum/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech ='Jupyter'icon = {<SiJupyter/>}/>
                  </Grid>
                </Grid>
                <Typography style = {{color: "white", marginBottom: 15, marginTop: 30, fontFamily: 'Helvetica'}}> IDE </Typography>
                <Grid container id = 'IDE' direction="row" justify="flex-start" alignItems="flex-end" spacing = {1}>
                  <Grid item>
                    <TechCard tech ='VS Code' icon = {<VscCode/>}/>
                  </Grid>
                  <Grid item>
                    <TechCard tech ='JGRASP'/>
                  </Grid>
                  <Grid item>
                    <TechCard tech = 'Eclipse'icon = {<DiEclipse/>}/>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
    );
}
export default RightPannelGrid


