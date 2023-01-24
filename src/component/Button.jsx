import React, { useState } from 'react'

const Button = () => {
    const [active, setActive] = useState("inactive");

  return (
    <>
    <button className={active} type='submit'>Button</button>
    </>
  )
}

export default Button;