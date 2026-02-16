import { Button, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'


const View = () => {
  const Navigate=useNavigate()
   var[user,setUser]=useState([])
  axios.get("http://localhost:3004/view")
  .then((res)=>{
    setUser(res.data)
    console.log(user)
  })

  const Handledelete=(id)=>{
    console.log(id)
    axios.delete(`http://localhost:3004/delete/`+id)
    .then((res)=>{
      alert(res.data)
    })
  }

  const Handleupdate=(e)=>{
    console.log("data",e)
    Navigate("/add",{state:{e}})
  }

  return (
    <div><center><br /><br /><br /> <br />
      <TableContainer>
        <Table style={{border:'5 solid black',width:1000,height:600}}>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Mark</TableCell>
            </TableRow>
        </TableHead>
      
        <TableBody>
            {user.map((e)=>{
                return(
                    <TableRow>
                    <TableCell>{e.Name}</TableCell>
                        <TableCell>{e.Age}</TableCell>
                        <TableCell>{e.Department}</TableCell>
                        <TableCell>{e.Mark}</TableCell>
                        <Button variant='contained' color='error' onClick={()=>{Handledelete(e._id)}}>Delete</Button>
                        <Button variant='contained' color='secondary' onClick={()=>{Handleupdate(e)}}>Update</Button>
                    </TableRow>
                )
            })
        }
        </TableBody>
        </Table>
      </TableContainer>
      </center>
    </div>
  )
}


export default View
