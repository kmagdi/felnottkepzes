import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SchoolIcon from '@mui/icons-material/School';


export const KozpontCard=(props)=> {
  return (
   
      <Grid  item xs={12} sm={6} md={3} sx={{margin:'1rem'}}>
          <Card sx={{ minWidth: 275,margin:'1rem',boxShadow:3 }}>
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><SchoolIcon sx={{fontSize:'3rem'}} color="primary" /></Typography>
          </CardContent>
          <CardActions>
              <Button size="small"><a  href={props.data.webpage_url}>{props.data.name} </a></Button>
          </CardActions>
          </Card>
      </Grid> 
    
  );
}
