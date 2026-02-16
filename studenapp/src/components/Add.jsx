import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var Navigate=useNavigate()
  var location=useLocation()
  console.log(location.state)
  
var[student,setStudent]=useState({
  Name:"",
  Age:"",
  Department:"",
  Mark:""
})

// axios.post("http://localhost:3004/add",student)


const HandleInput=(e)=>{
  console.log(e)
  setStudent({...student,[e.target.name]:e.target.value})
  console.log(student)
}

if(location.state !== null){
  useEffect(()=>{
    setStudent({...student,
      Name:location.state.e.Name,
      Age:location.state.e.Age,
      Department:location.state.e.Department,
      Mark:location.state.e.Mark,
      
    })
  },[])
} 


const Handleadd=(res)=>{

  if(location.state !== null){
    //upate
  axios.put("http://localhost:3004/update/"+location.state.e._id,student)
  .then((res)=>{
    alert(res.data)
    Navigate("/view")
  })
}
else{
  axios.post("http://localhost:3004/add",student)
  .then((res)=>{
    alert(res.data)
    Navigate("/view")
  })
}
}






  return (
    <div>
      <br /><br /><br /><br />
      <h1>ADD DETAILS</h1>
      <br /><br />
      <TextField name="Name" label="Name" variant="outlined" value={student.Name} onChange={HandleInput}/><br /><br />
      <TextField name="Age" label="Age" variant="outlined" value={student.Age} onChange={HandleInput}/><br /><br />
      <TextField name="Department" label="Department" variant="outlined" value={student.Department} onChange={HandleInput}/><br /><br />
      <TextField name="Mark" label="Mark" variant="outlined" value={student.Mark} onChange={HandleInput}/><br />
      <br />
      <Button variant="contained" color="success" onClick={Handleadd}>Add</Button>
    </div>
  )
}

export default Add
