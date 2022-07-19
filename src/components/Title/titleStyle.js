import styled from "styled-components";

export const MainTitle = styled.h2`
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
   top: 0;
   bottom: 0;
   left: -15px;
   width: 2px;
   height: 95%;
   background: var(--darkGreen);
}
`;