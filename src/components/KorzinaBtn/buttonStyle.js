import styled from "styled-components";

export const ButtonWrapper = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
padding: 13px 15px;
background: var(--darkGreen);
border-radius: 10px;
span{
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: var(--white);
    margin-right: 12px;
}
svg{
    font-size: 20px;
    color: var(--white);
}
`;
