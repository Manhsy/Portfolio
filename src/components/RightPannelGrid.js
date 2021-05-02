
import React from 'react';
import {Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import TechCard from './TechCard';
import ProjectCards from './ProjectCards';

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
import yelpImage from '../image/yelp.jpeg'
import networkIntrusionImage from '../image/Network-Intrusion.jpeg'
import computerVisionImage from '../image/computerVision.jpeg'

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

function RightPannelGrid(){
    return (
          <Grid container sx = "12" lg = "7" md = "12" direction="column" justify="flex-end" alignItems="flex-end" spacing = {7}>
            <Grid item id = "project">
              <div style = {{marginTop: 75, marginRight: 55}}> 
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
              <div style = {{marginRight: 55, marginTop: 15}}> 
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
              <div style = {{marginRight: 55, marginTop: 15}}> 
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
              <div style = {{marginRight: 55, marginTop: 15}}> 
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
            <Grid item id = 'techonologies' >
              <div style = {{marginTop: 55, marginRight: 35}}> 
                <Typography style = {{color: "white", marginBottom: 15, marginTop: 30}}> Programming Languages</Typography>
                <Grid container id = 'Languages' direction="row" justify="flex-start" alignItems="flex-start" spacing = {1}>
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
                <Typography style = {{color: "white", marginBottom: 15, marginTop: 30}}> Frameworks </Typography>
                <Grid container id = 'Frameworks' direction="row" justify="flex-start" alignItems="flex-start" spacing = {1}>
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

                <Typography style = {{color: "white", marginBottom: 15, marginTop: 30}}> Other </Typography>
                <Grid container id = 'Other' direction="row" justify="flex-start" alignItems="flex-start" spacing = {1}>
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
                    <TechCard tech ='NLP'/>
                  </Grid>
                  <Grid item>
                    <TechCard tech ='Jupyter'icon = {<SiJupyter/>}/>
                  </Grid>
                </Grid>

                <Typography style = {{color: "white", marginBottom: 15, marginTop: 30}}> IDE </Typography>
                <Grid container id = 'IDE' direction="row" justify="flex-start" alignItems="flex-start" spacing = {1}>
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


