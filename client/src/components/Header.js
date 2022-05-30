import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import './Header.css'
import { Typography } from '@mui/material';

const styles = {
    paperContainer: {
        backgroundImage: `url(img/intro-bg.jpg)`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,
        minHeight:`500px`
    }
};

export const Header = (props) => {
  return (
    <Paper sx={{mt:'70px'}} elevation={3} style={styles.paperContainer}>
        <h1>
            {props.data ? props.data.title : 'Loading'}
            <div>{props.data ? props.data.subtitle : 'Loading'}</div>
        </h1>
        <Box sx={{width:'100%',display:'flex',justifyContent: 'center'}}><Typography sx={{margin:'1rem'}}>{props.data ? props.data.paragraph : 'Loading'}</Typography></Box>
        
        <Link to="/kepzesek"><Box sx={{width: '100%',textAlign: 'center',paddingTop: '1rem'}}><Button  variant="contained">Tanulj szakmát!</Button></Box></Link>{' '}
    </Paper>
            
  )
}
