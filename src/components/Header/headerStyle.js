import styled from "styled-components";
import images from '../../constants/images'

export const HeaderSection = styled.div`
background: url(${images.header}) no-repeat center /cover;
min-height: 500px;
@media (max-width: 575px) {
background: url(${images.headerbgsmall}) no-repeat center /cover;
min-height: 400px;
}
@media (max-width: 375px) {
min-height: 370px;
}
`;

export const HeaderContent = styled.div`
padding: 70px 0px 120px 0;

`; 

export const HeaderTitle = styled.h1`
text-transform: uppercase;
font-family: var(--font-zingrustdemo);
font-size: 67px;
font-weight: 400;
line-height: 109.2%;
font-style: italic;
text-align: center;
color: var(--white);
transform: rotate(-1.37deg);
@media (max-width: 1024px) {
 img{
    width: 90%;
 }   
}
@media (max-width: 575px) {
    img{
        width: 100%;
    }
}
`;

export const HeaderImg = styled.img`

`;
export const HeaderBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
button{
background: transparent;
position: absolute;
top: -5%;
left: 0;
z-index: 2;
width: 100%;
height: 100%;
transform: rotate(-8.37deg);
font-weight: 400;
font-size: 20px;
line-height: 109.2%;
color: var(--white);
img{
    position: absolute;
    top: 0;
    left: 30%;
    width: 100%;
    height: 100%;
    z-index: 1;
}
}
`;