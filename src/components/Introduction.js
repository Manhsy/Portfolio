//rafce
import React from 'react';
import Typography from '@material-ui/core/Typography';

function Introduction({name, description}){
    return(
        <div align = 'left'>
            <Typography style={{color: "#fff", fontWeight: 'light', fontSize: 90, fontFamily: 'Helvetica'}}>
                {name}
            </Typography>
            <Typography variant = 'subtitle1' style={{color: "#D3D3D3", fontSize: 25}}>
                {description}
            </Typography>
            
        </div>
    );
}
export default Introduction;