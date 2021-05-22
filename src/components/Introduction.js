//rafce
import React from 'react';
import Typography from '@material-ui/core/Typography';

function Introduction({name, description}){
    return(
        <div align = 'left'>
                <Typography variant = 'h1' style={{color: "#fff", fontWeight: 'medium', fontSize: "calc(3vw + 3vh)", fontFamily: 'Helvetica'}}>
                    {name}
                </Typography>
                <Typography variant = 'subtitle5' style={{fontWeight: 'light', fontFamily: 'Helvetica', color: "#ccc", fontSize: "calc(.3vw + 1.5vh)"}}>
                    {description}
                </Typography>
        </div>

    );
}
export default Introduction;