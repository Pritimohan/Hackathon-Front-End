import React from 'react'

function Button(props) {
    const {text}= props
  return (
    <button className=' w-fit px-5 py-2 bg-white rounded-md font-poppins font-medium'>{text}</button>
  )
}

export default Button