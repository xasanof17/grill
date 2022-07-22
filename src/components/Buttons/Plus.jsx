import React from 'react'
import { AllBtn } from './buttonsStyles'
import {FaPlus} from 'react-icons/fa'

const Plus = ({onClick}) => {
  return (
    <>
        <AllBtn onClick={onClick}><FaPlus/></AllBtn>
    </>
  )
}

export default Plus