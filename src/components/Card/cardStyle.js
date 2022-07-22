import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 330px;
  width: 100%;
  margin: 0px 10px;
  transition: 0.5s ease-in-out;
  display: inline-block;
  &:hover {
    box-shadow: 0px 30px 45px #121111;
    cursor: pointer;
  }
`;
export const CardImg = styled.div`
  min-height: 230px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    user-select: none;
    pointer-events: none;
  }
`;
export const CardTopNum = styled.div`
  position: absolute;
  top: -4%;
  right: -4%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--cardNum);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: var(--white);
  }
`;
export const CardBody = styled.div`
  padding: 20px 25px;
  background: var(--cardBg);
  border-radius: 0 0 10px 10px;
`;

export const CardBodyTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    display: inline-block;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    color: var(--white);
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: var(--white);
  }
`;

export const CardBodyCenter = styled.div`
  padding: 8px 0 15px 0;
  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: var(--grey);
    max-width: 249px;
    width: 100%;
  }
`;

export const CardBodyBottom = styled.div`
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: var(--white);
    display: inline-block;
  }
`;
export const CardBodyBottomInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.notshow {
    display: none;
  }
  &.show {
    display: flex;
  }
`;
