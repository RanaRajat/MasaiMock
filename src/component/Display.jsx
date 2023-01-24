import React, { useState } from 'react'
import { useEffect } from 'react';
import './Display.css';

const Display = () => {
    const [arr, setArr] = useState([]);
    useEffect(()=>{
        setInterval(()=>{
            let array = localStorage.getItem('array');
            array = JSON.parse(array);
            setArr([...array]);
        },5000);
    },[arr])
    
  return (
    // eslint-disable-next-line array-callback-return
    <div className='display'>{arr.map((e)=> (
        <div className='innerDiv'><h1>Title: {e.title}</h1>
        <p>Description: {e.description}</p>
        </div>
    ))}</div>
  )
}

export default Display