import styled from "styled-components";

export const CafeSection = styled.section`
  @media (max-width: 400px) {
    display: none;
  }
`;

export const CafeContent = styled.div`
  overflow: hidden;
`;

export const CafeBox = styled.div`
  display: flex;
  padding: 100px 70px;
  z-index: 1;
  position: relative;
  @media (max-width: 1024px) {
    padding: 50px 20px;
  }
`;
export const CafeImg = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
  @media (max-width: 800px) {
    height: 80%;
  }
  @media (max-width: 500px) {
    height: 32%;
  }
`;
export const CafeImgLinear = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
`;
export const CafeBoxLeft = styled.div`
  z-index: 1;
  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 25px !important;
    display: inline-block;
    @media (max-width: 500px) {
      font-size: 25px;
    }
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey);
    max-width: 563px;
    width: 100%;
    @media (max-width: 425px) {
      font-size: 16px;
    }
  }
`;
export const CafeBtn = styled.button`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: var(--white);
  background: var(--lightWhite);
  border: 1px solid var(--lightWhiteShadow);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 22px 25px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s ease-in-out;
  margin-top: 60px;
  display: inline-block;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--darkGreen);
    z-index: -1;
    transition: 0.5s ease;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    margin-top: 15px;
  }
`;

export const CafeBoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const CafeBoxRightCards = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;

  &:nth-child(1),
  &:nth-child(2) {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      @media (max-width: 1024px) {
        margin: 0px 5px;

        div {
          margin: 5px;
          @media (max-width: 800px) {
            margin: 15px;
          }
        }
      }
      @media (max-width: 800px) {
        margin: 0;
      }
    }
  }
  @media (max-width: 800px) {
    margin-top: 15px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const CafeBoxRightCardsCard = styled.div`
  max-width: 230px;
  width: 100%;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  background: rgba(80, 75, 74, 0.9);
  backdrop-filter: blur(4px);
  padding: 65px 20px 40px 20px;
  margin: 7.5px;
  transition: 0.5s ease;
  img {
    margin-bottom: 25px;
    svg path {
      fill: var(--white);
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: var(--white);
    transition: 0.5s ease;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  &:hover {
    cursor: pointer;
    p {
      color: var(--darkGreen);
    }
  }
  @media (max-width: 800px) {
    max-width: 80%;
  }
`;
