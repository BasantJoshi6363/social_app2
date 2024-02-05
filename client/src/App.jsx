import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './compenent/Home'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Register from './compenent/Register'
import Login from './compenent/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
  <Routes>
    <Route path='/create' element = {<Register/>}></Route>
    <Route path='/login' element = {<Login/>}></Route>
    <Route path='/home' element = {<Home/>}></Route>
  </Routes>
      
    </BrowserRouter>
  )
}

export default App
