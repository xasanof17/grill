import React from 'react'
import './_input.scss'
const Input = ({search, placeholder,name}) => {
  return (
    <>
      <input type={search} name={name} className="input" placeholder={placeholder} />
    </>
  )
}

export default Input