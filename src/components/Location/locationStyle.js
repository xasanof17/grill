import styled from "styled-components";
import location from '../../assets/img/location.svg'

export const LocationSection = styled.section`
background: url(${location}) no-repeat center /  cover;
min-height: 665px;
display: flex;
align-items: flex-end;
`;

export const LocationContent = styled.div`
padding-bottom: 40px;
max-width: 530px;
width: 100%;
`;

export const LocationCard = styled.div`
background: var(--dark);
width: 100%;
min-height: 405px;
box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.15);
border-radius: 15px;
padding: 25px 40px;
`;

export const LocationCardTop = styled.h3`
padding-bottom: 25px;
border-bottom: 1px solid #dddd;
`;

export const LocationTitle = styled.h3`
display: inline-block;
font-weight: 700;
font-size: 30px;
line-height: 36px;
text-align: center;
text-transform: uppercase;
color: var(--white);
`;

export const LocationCardCenter = styled.div`
padding: 15px 0 30px 0;
border-bottom: 1px solid #dddd;
`;

export const LocationBox = styled.div`
display: flex;
margin-bottom: 20px;
&:last-child{
  margin-bottom: 0; 
}
svg{
   color: var(--darkGreen);
   font-size: 20px;
}

`;
export const LocationBoxLeft = styled.div`
margin: 0 10px;
`;
export const LocationBoxRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
span{
   font-weight: 400;
font-size: 15px;
line-height: 16px;
color: var(--grey);
margin-bottom: 5px;
}
p{
   font-weight: bold;
font-size: 14px;
line-height: 16px;
color: var(--white);

}
`;

