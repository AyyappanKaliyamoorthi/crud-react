import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'

function Main() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/edit' element={<Edit/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Main
