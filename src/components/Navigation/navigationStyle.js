import styled from "styled-components";

export const NavigationSection = styled.nav`
padding: 30px 0;
background: var(--lightWhiteShadow);
border-bottom: 1px solid var(--lightWhiteShadow);
@media (max-width: 800px)  {  
  white-space: nowrap;
  overflow-y: hidden;
  padding: 20px 0;
  &::-webkit-scrollbar {
   display: none;
  }
}
@media (max-width: 375px)  {
   padding: 15px 0;
 }
`;

export const NavigationContent = styled.div`

`;

export const NavigationNav = styled.div`
@media (max-width: 1199px)  {  
   /* overflow-x: scroll; */
}
`;

export const NavigationNavList = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;


`;

export const NavigationNavListItem = styled.li`
margin: 0 30px;

&:nth-of-type(1){
   margin-left: 0;
}

&:last-child{
   margin-right: 0;
}

@media (max-width: 1199px)  {  
   margin: 0 22px;
}
@media (max-width: 1024px)  {  
   margin: 0 16px;
}
@media (max-width: 990px)  {  
   margin: 0 13px;
}
@media (max-width: 800px)  {  
   margin: 0 15px;
   &:nth-last-of-type(1){
   padding-right: 15px;
}
}


`;

export const NavigationNavListItemLink = styled.a`
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: var(--grey);
padding: 30px 0;
transition: .5s ease-in-out;
position: relative;
&::before{
   content: '';
   position: absolute;
   bottom: -4px;
   left: 0;
   width: 0;
   height: 2px;
   background: var(--darkGreen);
   box-shadow: 0px 5px 12px var(--linkShadow);
   transition: .5s ease;
}
&.active, &:hover{
   color: var(--white);
   &::before{
      width: 100%;
   }
}

@media (max-width: 1024px)  {  
   font-size: 16px;
}
@media (max-width: 800px)  {  
font-size: 17px;
padding: 20px 0;
}
@media (max-width: 424px)  {  
font-size: 16px;
padding: 20px 0;
}
@media (max-width: 375px)  {
   padding: 15px 0;
 }
`;