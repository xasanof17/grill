import styled from "styled-components";


export const DeliveryAccordion = styled.div `
background: var(--darkGreen);
border-radius: 10px;
margin: 10px 0;
user-select: none;
&:nth-child(1){
  margin-top: 0;
}
&:nth-last-child(1){
  margin-bottom: 0;
}
`;

export const DeliveryAccordionTop = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 25px;
@media (max-width: 800px) {
  padding: 15px 20px; 
}
`;

export const DeliveryAccordionBottom = styled.div `
padding: 30px;
transition: .5s ease-in-out;
background: var(--cardBg);
border-radius: 0 0 10px 10px;
@media (max-width: 800px) {
  padding:20px; 
}
`;

export const DeliveryTitle = styled.h3 `
font-weight: 500;
font-size: 18px;
line-height: 35px;
color: var(--white);
@media (max-width: 575px) {
  font-weight: 500;
font-size: 16px;
line-height: 22px; 
}
`;

export const DeliveryTxt = styled.p `
font-weight: 400;
font-size: 16px;
line-height: 25px;
color: var(--white);
max-width:547px;
width: 100%;
@media (max-width: 575px) {
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
}
`;

export const DeliveryAccordionBtn = styled.button `
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
background: transparent;
color: var(--white);
svg{
  width: 100%;
  height: 100%;
  color: inherit;
}
@media (max-width: 575px) {
width: 20px;
height: 20px;
}
`;