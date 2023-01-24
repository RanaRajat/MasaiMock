import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Bookmarks from './Bookmarks'
import Home from './Home'
const RoutesPage = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}>
       <Route path='/about' element={<About/>}/>
       <Route path='/bookmarks' element={<Bookmarks/>}/>
       </Route>
   </Routes>
    )
}

export default RoutesPage