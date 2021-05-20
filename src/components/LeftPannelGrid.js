
import React from 'react';
import {Grid} from "@material-ui/core";

import Introduction from './Introduction';
import Navigators from './Navigators';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { VscGithub } from "react-icons/vsc";
import { IconContext } from "react-icons";
import Typography from '@material-ui/core/Typography';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from  "react-icons/md";

import avatar from "../image/icon.jpeg";

const name = (
    <>
      <p style ={{marginTop: 45}}>Hello, I'm</p>
      <p style ={{marginTop: -120}}>Manh Sy.</p>
    </>
  );
const introduction = <span>Highly motivated Computer Science student at California State University, Sacramento. My love for computer science started when I was introduced to it during my first year of college. At the time, I was a Kinesiology major, 
    however, I quickly learned that I enjoy subjects that allows me to exercise my creative problem solving skills. 
    <br/>
    <br/> 
    Though I am still unsure on what areas of computer science I want to focus on, I have dipped my toes in areas that pertains to Machine Learning, web development, and API development. All of which you can check out on this page, enjoy!

    </span>

function IntroductionGrid(){

    return (
        <Grid container sx = "12" lg = "5" md = "12"  direction="column" justify="flex-start" alignItems="flex-start" style={{ position: "sticky", top: "1rem" }}>
            <div style = {{marginLeft: 100}}> 
                <Grid item>
                <   Introduction name = {name} description = {introduction}/>
                </Grid> 
            </div>
            <Grid item style = {{marginLeft: 100, marginTop: 90}}>
                <Navigators title = "PROJECTS" index = "01" onClick={() => document.querySelector('#project').scrollIntoView({ behavior: 'smooth'})}/>
                <Navigators title = "TECHNOLOGIES" index = "02" onClick={() => document.querySelector('#techonologies').scrollIntoView({ behavior: 'smooth'})}/>
            </Grid> 

            <Grid item style = {{marginLeft: 100, marginTop: 125}}>
                <Grid container id = 'Other' direction="row" justify="flex-start" alignItems="flex-start" spacing = {1}>
                    <Grid item>
                        <Avatar src={avatar}/>
                    </Grid>
                    <Grid item style =  {{marginLeft: 32}}>
                            <Button href = "https://github.com/Manhsy" target="_blank">
                            <IconContext.Provider value={{ color: "white", size: 20}}>
                                <VscGithub/> 
                                    <div style =  {{marginLeft: 10, marginRight: 11}}>
                                        <Typography align = 'left' variant="subtitle" component="p" style = {{color:"#FFFFFF"}}>    GitHub
                                        </Typography> 
                                    </div>
                            </IconContext.Provider>
                        </Button>
                    </Grid>
                    <Grid item style =  {{marginLeft: 16}}>
                            <Button href = "https://linkedin.com/in/Mtsss" target="_blank">
                            <IconContext.Provider value={{ color: "white", size: 20}}>
                                <FaLinkedin/> 
                                    <div style =  {{marginLeft: 10, marginRight: 11}}>
                                        <Typography align = 'left' variant="subtitle" component="p" style = {{color:"#FFFFFF"}}>    LinkedIn
                                        </Typography> 
                                    </div>
                            </IconContext.Provider>
                        </Button>
                    </Grid>
                    <Grid item style =  {{marginLeft: 16}}>
                        <Button href="mailto:manhsy@csus.edu" target="_blank">
                            <IconContext.Provider value={{ color: "white", size: 25}}>
                                <MdEmail/> 
                                    <div style = {{marginLeft: 10, marginRight: 11}}>
                                        <Typography align = 'left' variant="subtitle" component="p" style = {{color:"#FFFFFF"}}>    Manhsy@csus.edu
                                        </Typography> 
                                    </div>
                            </IconContext.Provider>
                        </Button>
                    </Grid>
                </Grid>
            </Grid> 
      </Grid>
    );
}

export default IntroductionGrid;