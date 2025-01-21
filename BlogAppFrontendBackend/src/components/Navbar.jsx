import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    sessionStorage.removeItem('logintoken');
    navigate('/');
  }
  return (
    <>
    {/* IF BOX TAG IS THERE NO NEED TO GIVE DIV */}
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{background:'purple'}}>
          
          <Typography style={{marginLeft:'0px'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog App
          </Typography>
            <Link to={'/blogs'}> <Button style={{color:'white'}}>Home</Button></Link> 
          <Link to={'/addblogs'}><Button style={{color:'white'}}>Add Blog</Button></Link>
          <Button style={{color:'white'}} onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar