import React, { useState } from 'react'
import { DeliveryAccordion, DeliveryAccordionBottom, DeliveryAccordionBtn, DeliveryAccordionTop, DeliveryTitle, DeliveryTxt } from './accordionStyle'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const Accordion = ({id, title, text}) => {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <>
      <DeliveryAccordion key={id} onClick={() => setExpanded(!expanded)}>
        <DeliveryAccordionTop>
          <DeliveryTitle>{title}</DeliveryTitle>
          <DeliveryAccordionBtn>
            {expanded ? <BsChevronUp /> : <BsChevronDown />}
          </DeliveryAccordionBtn>
        </DeliveryAccordionTop>
        {expanded && (
          <DeliveryAccordionBottom>
            <DeliveryTxt>{text}</DeliveryTxt>
          </DeliveryAccordionBottom>
        )}
      </DeliveryAccordion>
    </>
  )
}

export default Accordion