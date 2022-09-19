import React from 'react'
import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

const Login = (e) => {
  function handleform(){
    alert(e.target.value +" in handleform")
  }
  return (
    <div>
      <Grid container spacing={1}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <h1>Login</h1>
            <br></br>

          <FormControl>
            
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" 
            onBlur={(e)=>{handleform(e.target.value)

            }}/>
          </FormControl>
          <br></br>
          <br></br>


          <FormControl>
            
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-Password" onClick={handleform}/>
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>

            
          </Grid>
          <Grid item xs={4}></Grid>


      </Grid>
    </div>
  )
}

export default Login
