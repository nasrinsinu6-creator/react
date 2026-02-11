import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar><br />
                <h3>Myapp</h3> &nbsp;&nbsp;
                <Link to='/login'>
                <Button  variant="contained" color="info">LOGIN</Button></Link> &nbsp;&nbsp;
                <Link to='/signup'>
                <Button variant="contained" color="info">SIGNUP</Button></Link> &nbsp;&nbsp;
                <Link to='/data'>
                <Button variant="contained" color="info">TABLE</Button></Link> &nbsp;&nbsp;
                <Link to='/state'>
                <Button variant="contained" color="info">STATE</Button> </Link>&nbsp;&nbsp;
                <Link to='/count'>
                <Button variant="contained" color="info">COUNT</Button> </Link> &nbsp;&nbsp;
                <Link to='/names'>
                <Button variant="contained" color="info">NAMES</Button></Link> &nbsp;&nbsp;
                <Link to='/card'>
                <Button variant="contained" color="info">CARDS</Button>
                </Link>
            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default NavBar
