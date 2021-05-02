
import React from 'react';
import {Grid} from "@material-ui/core";

import Introduction from './Introduction';
import Navigators from './Navigators';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { VscGithub } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { RiExternalLinkLine } from "react-icons/ri";
import Typography from '@material-ui/core/Typography';
import { FaLinkedin } from "react-icons/fa";

import avatar from "../image/icon.jpeg";

const name = (
    <>
      <p style ={{marginTop: 45}}>Hello, I'm</p>
      <p style ={{marginTop: -120}}>Manh Sy.</p>
    </>
  );
const introduction = <span>Pues...En realidad, no es mucho difícil, 
    no es como mis amigos dicen; dicen que español es taaaaaaaan difícil, son (o están?) equivocado. Si sigue en las clases (que no ellos hacen), la aprendizaje no es un problema.
    Solamente he estudiado español durante casi tres años ahora, y mira! Ya mi español es mas o menos! Puedo hablar un poco sin un diccionario, es bastante bien.
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
                                    <div style =  {{marginLeft: 16, marginRight: 16}}>
                                        <Typography align = 'left' variant="subtitle" component="p" style = {{color:"#FFFFFF"}}>    GitHub
                                        </Typography> 
                                    </div>
                                <RiExternalLinkLine/>
                            </IconContext.Provider>
                        </Button>
                    </Grid>
                    <Grid item style =  {{marginLeft: 16}}>
                            <Button href = "https://linkedin.com/in/Mtsss" target="_blank">
                            <IconContext.Provider value={{ color: "white", size: 20}}>
                                <FaLinkedin/> 
                                    <div style =  {{marginLeft: 16, marginRight: 16}}>
                                        <Typography align = 'left' variant="subtitle" component="p" style = {{color:"#FFFFFF"}}>    LinkedIn
                                        </Typography> 
                                    </div>
                                <RiExternalLinkLine/>
                            </IconContext.Provider>
                        </Button>
                    </Grid>
                </Grid>
            </Grid> 
      </Grid>
    );
}

export default IntroductionGrid;