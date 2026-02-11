import { Button } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var[a,seta]=useState(0)

    const increment=()=>{
        seta(a+1)

    }

    const decrement=()=>{
        seta(a-1)

    }
  return (
    <div>
      <h2>Count {a}</h2>
      <Button variant='contained' color="error" onClick={decrement }>-</Button>&nbsp;
        <Button variant='contained' color='success'  onClick={increment }>+</Button> 

    </div>
  )
}

export default Count
