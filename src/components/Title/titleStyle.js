import styled from "styled-components";

export const MainTitle = styled.h2 `
  font-weight: 700;
font-size: 32px;
line-height: 39px;
text-transform: uppercase;
color: var(--white);
padding-left: 15px;
position: relative;
display: inline-block;
&::before{
   content: "";
   position: absolute;
   top: 7%;
   bottom: 0;
   left: -20px;
   width: 4px;
   height: 88%;
   background: var(--darkGreen);
}
@media (max-width: 575px) {
font-size: 30px;
}
`;