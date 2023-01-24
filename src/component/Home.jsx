import React from 'react'
import { Outlet } from 'react-router-dom'
import Buttons from './Button'
import Display from './Display'
import Form from './Model.jsx/Form'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
    <Display/>
    <Buttons/>
    <Outlet/>
    </>
  )
}

export default Home