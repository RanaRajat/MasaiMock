import React, { useState } from 'react'
import './Button.css';
import Form from './Model.jsx/Form';
const Buttons = () => {
    const [active, setActive] = useState("inactive");
    const handleClick = ()=>{
        console.log(active);
        if(active === 'active'){
            setActive("inactive");
        }
        else{
        setActive("active");
        }
    }
  return (
<>
<div className={active}><Form/></div>
    <button id='buttonId'  onClick={()=>handleClick()} type='submit'>Button</button>
 </> 
  )
}

export default Buttons;