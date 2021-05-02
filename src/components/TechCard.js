import React,  { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 377,
      backgroundColor: "#202022",
    },
    cardHovered: {
        transform: "scale3d(1.2, 1.2, 1)"
      },
  }));


function TechCard({tech, icon}){
    const classes = useStyles();
    const [state, setState] = useState({
        raised:false,
        shadow:10,
      })
    return(
        <Card className={classes.root} 
            classes={{root: state.raised ? classes.cardHovered : ""}}
            onMouseOver={()=>setState({ raised: true, shadow:20})} 
            onMouseOut={()=>setState({ raised:false, shadow:1 })} 
            raised={state.raised} zdepth={state.shadow}>
            <CardActionArea>
                <CardContent>
                    <Typography align = 'left' variant="body2" component="p" style = {{color:"#FFFFFF"}}>
                        {icon}   {tech}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default TechCard
