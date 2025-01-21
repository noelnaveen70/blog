
import React from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
        <h2>SIGN UP</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 6 }}>
          <TextField fullWidth label='Name' variant='outlined' name ="name"></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
        <TextField fullWidth label='Email' variant='outlined' name="email"></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
        <TextField fullWidth label='Password' variant='outlined'name="password"></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
        <TextField fullWidth label='Phone' variant='outlined' name="phone"></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 12}}>
        <TextField fullWidth label='Address' variant='outlined' multiline rows={4} name="address"></TextField>
        </Grid>
        <Button color='secondary' variant='contained'>REGISTER</Button><br /><br />
      </Grid>
      <div>
        <Link to={'/'} style={{textDecoration:'none'}}>Already registered?Login here</Link>
      </div>
    
    </div>
  )
}

export default Signup