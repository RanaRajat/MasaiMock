import React, { useState } from 'react'

const Form = () => {

    const [dvalue ,setDvalue] = useState({
        title:"",
        description:""
    })

    const [arr, setArr] = useState([]);


    const change = (e)=>{
        e.preventDefault();
      setDvalue({...dvalue, [e.target.name]: e.target.value })
    }
    const onSubmit = (e)=>{
        e.preventDefault();

        console.log(dvalue);
         setArr([...arr, dvalue]);

    
    }


  return (
 
    <>
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
    </>
  )
}

export default Form