import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <h1>Student</h1>
          <Link to='/add' >
          <Button color='inherit'>ADD</Button>
          </Link>
          <Link to='/view' >
          <Button color='inherit'>VIEW</Button>
          </Link>
        </Toolbar>
      </AppBar>
    
    </div>
  )
}

export default Navbar
