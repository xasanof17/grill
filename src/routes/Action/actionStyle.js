import styled from "styled-components";

export const Aksiya = styled.section `

`;

export const AksiyaTop = styled.div `
padding: 45px 0px;
border-bottom: 1px solid var(--lightWhiteShadow);

h2 {
  margin-left: 15px;
}
@media (max-width: 575px) {
padding: 40px 0;
  }
`;

export const AksiyaContent = styled.div `
padding: 40px 0 70px 0;
@media (max-width: 575px) {
padding: 30px 0 50px;
  }
`;

export const AksiyaCards = styled.div `

`;

export const AksiyaCard = styled.div `
margin-bottom: 25px;
&:nth-last-child(1),
&:nth-last-child(2),
&:nth-last-child(3){
  margin-bottom: 0;
  @media (max-width: 768px) {
    margin-bottom: 25px; 
  }
  @media (max-width: 575px) {
   &:last-child{
    margin-bottom: 0;
   }
  }
}
`;

export const AksiyaCardInner = styled.div `
background: var(--cardBg);
border-radius: 10px;
`;

export const AksiyaCardInnerTop = styled.div `
img{
  border-radius: 10px 10px 0px 0px;
  width: 100%;
pointer-events: none;
user-select: none;
}
`;

export const AksiyaCardInnerBottom = styled.div `
padding: 15px 25px;
h3{
  font-weight: 700;
font-size: 19px;
line-height: 22px;
color: var(--white);
}
p{
  font-weight: 400;
font-size: 16px;
line-height: 16px;
color: var(--cardText);
max-width:392px;
width: 100%;
margin: 5px 0 20px 0;
display: inline-block;
}
a{
  font-weight: 400;
font-size: 14px;
line-height: 16px;
color: var(--darkGreen) !important;
}
@media (max-width: 575px) {
padding: 15px;
  }
`;