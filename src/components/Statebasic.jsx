import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var[name,setName]=useState("Sinu")
    var[input,setInput]=useState("")
    const inputHandler=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const buttonHandler=()=>{
        setInput(name)

    }
  return (
    <div>
        <h2>Welcome {input} !</h2>
        <TextField variant='outlined' onChange={inputHandler}/> <br /><br />
     <Button  variant='contained' onClick={buttonHandler} >Click</Button>
    </div>
  )
}

export default Statebasic
