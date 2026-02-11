import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

const Namess = () => {
  const [n, setn] = useState()

  const angular = () => {
    setn("Angular")
  }

  const python = () => {
    setn("Python")
  }

  const java = () => {
    setn("JavaScript")
  }
  useEffect(()=> {
    python()

  },[])

  return (
    <div><br />
      <h2>Welcome {n} !</h2>

      <Button variant='contained' onClick={angular}>Angular</Button>&nbsp;
      <Button variant='contained' onClick={python}>Python</Button>&nbsp;
      <Button variant='contained' onClick={java}>JavaScript</Button>&nbsp;
    </div>
  )
}

export default Namess
