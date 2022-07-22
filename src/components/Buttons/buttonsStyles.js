import styled from "styled-components";

export const AllBtn = styled.button`
width: 60px;
height: 45px;
background: var(--darkGreen);
border-radius: 10px;
transition: .5s ease;
svg{
    color: var(--white);
    font-size: 20px;
}
&:hover{
    box-shadow: 0px 5px 10px rgba(114, 163, 121, 0.7);
}
`;