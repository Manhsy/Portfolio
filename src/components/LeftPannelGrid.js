
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
const useStyles = makeStyles((theme) => ({
    size: {
      width: theme.spacing("2w"),
      height: theme.spacing("2h"),
    },
  }));
const name = (
    <>
      <p>Hello, I'm Manh Sy.</p>
    </>
  );
const introduction = <span>Highly motivated fourth year Computer Science student. My love for computer science started when I was introduced to it during my first year of college. At the time, I was a Kinesiology major, 
    however, I quickly learned that I enjoy subjects that allow me to exercise my creative problem solving skills. 
    <br/>
    <br/>
    Though I am still unsure on what areas of computer science I would like to focus on, I have experience with areas that pertains to Machine Learning, web development, and API development. All of which you can check out on this page, enjoy!
    </span>
const sickyStyle = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        position: "relative",
      },
      [theme.breakpoints.up('md')]: {
        position: "relative",
      },
      [theme.breakpoints.up('lg')]: {
        position: "fixed",
      },
    },
    content: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            marginLeft: "1vw", marginRight: "1vw", marginTop: "-1vw"
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: 90, marginRight: 15
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: "5.5vw", marginRight: "5vw", marginTop: "-1vw"
        },
    },

  }));
function LeftPannelGrid(props){
    const classes = useStyles();
    const stickyClass = sickyStyle();
    return (
            <Grid className={stickyClass.root} container sx = "12" lg = "6" md = "12"  direction="column" justify="flex-start" alignItems="flex-start" >
                <Grid item className={stickyClass.content}> 
                    <Introduction name = {name} description = {introduction}/>
                </Grid> 
                <Grid item className={stickyClass.content} style = {{ marginTop: 10}}>
                    <Navigators title = "PROJECTS" index = "01" onClick={() => document.querySelector('#project').scrollIntoView({ behavior: 'smooth'})}/>
                    <Navigators title = "TECHNOLOGIES" index = "02" onClick={() => document.querySelector('#techonologies').scrollIntoView({ behavior: 'smooth'})}/>
                </Grid> 
                <Grid item item className={stickyClass.content} style = {{marginTop: "calc(2.5vw + 2.5vh)"}}>
                    <Grid container id = 'Other' direction="row" justify="flex-start" alignItems="flex-start" spacing = {.2}>
                        <Grid item >
                            <Avatar src={avatar} className={classes.size}/>
                        </Grid>
                        <Grid item style =  {{marginLeft: ".2vw", }}>
                                <Button href = "https://github.com/Manhsy" target="_blank">
                                <IconContext.Provider value={{ color: "#ccc", size: "calc(.5vw + .5vh)"}}>
                                    <VscGithub/> 
                                        <div style =  {{marginLeft: 10, marginRight: 11}}>
                                            <Typography align = 'left' variant="subtitle3" component="p" style = {{color:"#ccc", fontSize: "calc(.5vw + .3vh)"}}>    GitHub
                                            </Typography> 
                                        </div>
                                </IconContext.Provider>
                            </Button>
                        </Grid>
                        <Grid item style = {{marginLeft: ".2vw", }}>
                                <Button href = "https://linkedin.com/in/Mtsss" target="_blank">
                                <IconContext.Provider value={{ color: "#ccc", size: "calc(.5vw + .5vh)"}}>
                                    <FaLinkedin/> 
                                        <div style =  {{marginLeft: 10, marginRight: 11}}>
                                            <Typography align = 'left' variant="subtitle3" component="p" style = {{color:"#ccc", fontSize:"calc(.5vw + .3vh)"}}>    LinkedIn
                                            </Typography> 
                                        </div>
                                </IconContext.Provider>
                            </Button>
                        </Grid>
                        <Grid item style =  {{marginLeft: ".2vw",}}>
                            <Button href="mailto:manhsy@csus.edu" target="_blank">
                                <IconContext.Provider value={{ color: "#ccc", size: "calc(.5vw + .5vh)"}}>
                                    <MdEmail/> 
                                        <div style = {{marginLeft: 10, marginRight: 11}}>
                                            <Typography align = 'left' variant="subtitle3" component="p" style = {{color:"#ccc", fontSize: "calc(.5vw + .3vh)"}}>    Manhsy@csus.edu
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

export default LeftPannelGrid;