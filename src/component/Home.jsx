import React from 'react'
import { Outlet } from 'react-router-dom'
import Button from './Button'
import Form from './Model.jsx/Form'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Button></Button>
    </>
  )
}

export default Home