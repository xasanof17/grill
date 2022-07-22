import React from 'react'
import { ButtonWrapper } from './buttonStyle'
import {IoCartOutline} from 'react-icons/io5'

const Button = ({name,onClick}) => {
  return (
    <>
        <ButtonWrapper onClick={onClick}><span>{name}</span> <IoCartOutline/></ButtonWrapper>
    </>
  )
}

export default Button