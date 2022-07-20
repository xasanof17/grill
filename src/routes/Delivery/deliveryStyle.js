import styled from "styled-components";

export const Delivery = styled.section `

`;

export const DeliveryTop = styled.div `
padding: 45px 0px;

h2 {
  margin-left: 15px;
  @media (max-width: 575px) {
    font-size: 20px;
line-height: 24px; 
  }
}
@media (max-width: 575px) {
padding: 40px 0;
  }
`;

export const DeliveryContent = styled.div `
padding-bottom: 40px;
`;

export const DeliveryContentInner = styled.div `
@media (max-width: 767px) {
  flex-direction: column-reverse;
  div{
    margin: 10px 0;
    &:nth-child(1){
      margin-bottom: 0;
    }
    &:nth-last-child(1){
      margin-top: 0;
    }
  }
}
`;

export const DeliveryLeft = styled.div `

`;

export const DeliveryRight = styled.div `

`;

export const DeliveryInner = styled.div `
filter: drop-shadow(0px 40px 40px rgba(43, 40, 40, 0.6));
img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  user-select: none;
  pointer-events: none;
}
@media (max-width: 767px) {
  filter: none;
}
`;

export const DeliveryGrafik = styled.div `
margin: 30px 0;
display: flex;
@media (max-width: 575px) {
 flex-direction: column; 
}
`;

export const DeliveryGrafikInner = styled.div `
display: flex;
flex-direction:column;
&:nth-child(1){
  margin-right: 100px;
}
@media (max-width: 575px) {
  &:nth-child(1){
  margin: 0 0 15px 0;
}
}
`;

export const GrafikTitle = styled.h3 `
font-weight: 700;
font-size: 17px;
line-height: 35px;
color: var(--white);
`;

export const GrafikSpan = styled.span `
font-weight: 700;
font-size: 16px;
line-height: 35px;
color: var(--grey);
`;

export const Zakaz = styled.div `
display: inline-block;
`;

export const ZakazTitle = styled.h3 `
font-weight: 700;
font-size: 17px;
line-height: 35px;
color: var(--white);
`;

export const ZakazTxt = styled.p `
max-width: 697px;
width: 100%;
font-weight: 400;
font-size: 16px;
line-height: 30px;
color: var(--grey);
`;