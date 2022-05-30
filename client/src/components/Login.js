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

export const Login=()=> {
    const [message,setMessage]= useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const url='http://localhost:5000/api/auth/login'
 
    setMessage('')
    axios.post(url,{"email":data.get('email'), "password":data.get('password')})
      .then(response=>{
        console.log(response.data);
        if(response.data.message)
            setMessage(response.data.message)
        else if(response.data.error)
          setMessage(response.data.error)
        else
          setMessage(response.data.result[0].email)
      })
    }
    const fakeInputStyle = {opacity: '0', float: 'left', border: 'none', height: '0', width: '0'}
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box  sx={{marginTop: 8,display: 'flex',flexDirection: 'column', alignItems: 'center',}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>
          <Typography component="h1" variant="h5"> Sign in </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} >
            <input type="password" name='fake-password' autoComplete='new-password' tabIndex='-1' style={fakeInputStyle} />
            <TextField margin="normal" required fullWidth id="email" label="Email Address or Username" name="email"  autoFocus />
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password"  />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign In </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"> Forgot password? </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {message && <p>{message}</p>}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}