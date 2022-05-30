import React from 'react';

import Paper from '@mui/material/Paper';
import { Typography,Button,Box } from '@mui/material';

export const AgazatPaper=(props)=>{
    //console.log(props)

  return (
      <Box>
         <Button  onClick={()=>props.setFilter(props.data.id)}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap','& > :not(style)': {m: 1, width: 160, height: 130 },}} >
                <Paper  elevation={3} >
                    <Button><span className="material-icons" >{props.data.icon}</span></Button>
                    <Typography sx={{mx:'auto',padding:'2px',textAlign:'center'}}>{props.data.name}</Typography>
                </Paper>
            </Box>
        </Button>
    </Box>
  );
}
