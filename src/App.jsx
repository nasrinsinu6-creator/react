import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Data from './components/Data'
import Statebasic from './components/Statebasic'
import Count from './components/Count'
import Namess from './components/Namess'
import CardGet from './components/CardGet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={ <Signup/>}/>
       <Route path='/data' element={  <Data/>}/>
       <Route path='/state' element={  <Statebasic/>}/>
       <Route path='/count' element={ <Count/>}/>
       <Route path='/names' element={ <Namess/>}/>
       <Route path='/card' element={ <CardGet/>}/>


    </Routes>
   
 
   <NavBar/>
   
   </>
  )
}

export default App
