import React,{useState} from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Copyright} from './Copyright'
import axios from 'axios'


const theme = createTheme();


export const Register=()=> {
  const [succesfull,setSuccessfull]=useState(false)
  const [msg,setMsg]=useState('')
  const [validUsername,setValidUsername]=useState(false)
  const [validEmail,setValidEmail]=useState(false)

  const checkUsername=(e)=>{
    if(e.target.value.length>0){
      const url='http://localhost:5000/api/auth/checkUserName'
      axios.post(url,{"username":e.target.value})
        .then(response=>{
        console.log('szerver oldalról:',response.status,response.data,response.data[0].nr)
        response.data[0].nr==1 ? setValidUsername(false):setValidUsername(true)
        console.log('validusername:',validUsername)
      })
    }
  }

  const checkEmail=(e)=>{
    if(e.target.value.length>0){
      const url='http://localhost:5000/api/auth/checkUserEmail'
      axios.post(url,{"email":e.target.value})
        .then(response=>{
        console.log('szerver oldalról:',response.status,response.data)
        response.data[0].nr===1 ? setValidEmail(false):setValidEmail(true)
     })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log(data.get('email').length)
    
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
     const url='http://localhost:5000/api/auth/register'
     axios.post(url,{
       "username":data.get('username'),
       "email":data.get('email'),
       "password":data.get('password'),
     }).then(response=>{
       console.log('szerver oldalról:',response.status,response.data)
       response.status===200 ? setSuccessfull(true):setSuccessfull(false)
       setMsg(response.data.message)
      })
   }
   const fakeInputStyle = {opacity: '0', float: 'left', border: 'none', height: '0', width: '0'}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column',alignItems: 'center', }} >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5"> Sign up</Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <input type="password" name='fake-password' autoComplete='new-password' tabIndex='-1' style={fakeInputStyle} />
                <TextField className={validUsername? "" : "border-bottom border-danger"} name="username" required  fullWidth id="username" label="Username" autoFocus onBlur={(e)=>checkUsername(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField className={validEmail? "" : "border-bottom border-danger"} required fullWidth id="email" label="Email Address" name="email" onBlur={(e)=>checkEmail(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password" />
              </Grid>
              
            </Grid>
            <Button disabled={!validUsername || !validEmail} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2"> Already have an account? Sign in </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography>{succesfull? "Sikeres regisztráció!":""}</Typography>
                <Typography>{msg}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}