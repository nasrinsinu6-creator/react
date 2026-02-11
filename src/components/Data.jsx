import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Data = () => {
  var[user,setUser]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    setUser(res.data)
    console.log(user)
  })
  return (
    <div>
      <h2>Table</h2><center>
      <TableContainer>
        <Table border="1">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>UserNmame</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>City</TableCell>


                </TableRow>
            </TableHead>
            <TableBody>
              {user.map((val)=>
              {
                return(
              
                <TableRow>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.username}</TableCell>
                    <TableCell>{val.email}</TableCell>
                     <TableCell>{val.address.city}</TableCell>

                </TableRow>

                )
              })}

            </TableBody>
            
</Table>
      </TableContainer>
      </center>
    </div>
  )
}

export default Data
