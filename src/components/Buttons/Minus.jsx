import React from 'react'
import { AllBtn } from './buttonsStyles'
import {HiOutlineMinus} from 'react-icons/hi'

const Minus = ({onClick}) => {
  return (
    <>
        <AllBtn onClick={onClick}><HiOutlineMinus/></AllBtn>
    </>
  )
}

export default Minus