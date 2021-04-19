import React,  { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 377,
      backgroundColor: "#202022",
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
      },
  }));


function ProjectCards({info}){
    const classes = useStyles();
    const [state, setState] = useState({
        raised:false,
        shadow:10,
      })
    return(
        <Card className={classes.root} 
                classes={{root: state.raised ? classes.cardHovered : ""}}
                onMouseOver={()=>setState({ raised: true, shadow:10})} 
                onMouseOut={()=>setState({ raised:false, shadow:1 })} 
                raised={state.raised} zdepth={state.shadow}>
            <CardActionArea>
                <CardMedia 
                    component = "img"
                    image = {info.image}
                />
                <CardContent>
                    <Typography align = 'left' gutterBottom variant="h5" component="h2" style = {{color:"#FFFFFF"}}>
                        {info.name}
                    </Typography>
                    <Typography align = 'left' variant="body2" component="p" style = {{color:"#FFFFFF"}}>
                        {info.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider variant = "middle" light = {true} />
            <CardActions>
                <Button color="inherit" href= {info.link} target="_blank" style = {{color:"#FFFFFF"}}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
export default ProjectCards
