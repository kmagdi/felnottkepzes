import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {KepzesCard} from './KepzesCard'
import './Kepzesek.css'
import {AgazatPaper} from './AgazatPaper'
import { Box,Typography,Paper } from '@mui/material';



export const Kepzesek = () => {
  const [agazat,setAgazat]=useState([])
  const [kepzesek,setKepzesek]=useState([]) 
  const [filter,setFilter]=useState(0)
 
  useEffect(() => {
    const source = axios.CancelToken.source()
    axios.get(`http://localhost:5000/api/agazatok`).then(res =>setAgazat(res.data))
    axios.get(`http://localhost:5000/api/tanfolyamok`).then(res =>setKepzesek(res.data))
    return () => {
      console.log('clean up')
      source.cancel()
  }
  },[])
 
  return (
    <Paper sx={{mt:'70px'}}>
          <Typography variant="h4" sx={{mx:'auto',textAlign: 'center',color:'#1976d2'}}>Képzések felnőtteknek</Typography>
          <Typography sx={{mx:'auto',textAlign: 'center'}}>Válassz egy ágazatot !</Typography>    
         <Box sx={{display:'flex',flexWrap:'wrap',justifyContent: 'center'}}>
         <AgazatPaper key={0} data={{id:0,name:'Minden ágazat',icon:'select_all'}} setFilter={setFilter}/>
          {agazat ? agazat.map((obj) => (
                  <AgazatPaper key={obj.id} data={obj} setFilter={setFilter}/>
              ))
            : 'loading'}
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap',backgroundColor:'lightgray', justifyContent: 'center'}}>
           <KepzesCard data={kepzesek} filter={filter}/>
      </Box>
    </Paper>
  )
}
