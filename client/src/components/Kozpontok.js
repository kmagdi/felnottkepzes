import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Kozpontok.css"
import { KozpontCard } from './KozpontCard';

export const Kozpontok = () => {
  const [kozpont,setKozpont]=useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/api/intezmenyek`).then(res =>setKozpont(res.data))
  },[])
    return (
        <Grid container justifyContent="center" sx={{marginTop:'1rem',marginBottom:'1rem'}}>
          <Grid item sx={{width: '100%',textAlign: 'center',color: '#1976d2;'}}>
             <h2> Képzési központjaink</h2>
          </Grid>
          <Grid item  sx={{width: '100%',textAlign: 'center'}}>Felnőttképzés</Grid> 
          <Box >
              <Grid container spacing={2} sx={{display: 'flex',justifyContent:"center"}}>
            {kozpont.length>0 ? kozpont.map((obj) => (
                <KozpontCard key={obj.id} data={obj}/>
                ))
            : 'loading'}
          </Grid>
          </Box>
        </Grid>
    )
  }
  