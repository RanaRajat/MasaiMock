import React, { useState, useEffect } from 'react'
import './form.css';
const Form = () => {
    const [arr, setArr] = useState([]);

    const [dvalue ,setDvalue] = useState({
        title:"",
        description:""
    })

    const change = (e)=>{
        e.preventDefault();
      setDvalue({...dvalue, [e.target.name]: e.target.value })
    }
    const onSubmit = (e)=>{
        e.preventDefault();

        console.log(dvalue);
         setArr([...arr, dvalue]);
    
    }
    useEffect(()=>{
        localStorage.setItem('array', JSON.stringify(arr));
    },[arr])

  return (
 
    <div className='formm'>
    <form action="" onSubmit={onSubmit}>
        <label htmlFor=""
        
        >Title</label>
        <input type="text"
        value={dvalue.title}
        onChange={change}
        placeholder=''
        name='title'
        />
        <label htmlFor=""
        
        >Description</label>
        <input type="text"
        value={dvalue.description}
        onChange={change}
        placeholder=''
        name='description'
        />  
        <button type='submit'>Add Note</button>      
    </form>
    </div>
  )
}

export default Form