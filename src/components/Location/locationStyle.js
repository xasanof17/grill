import styled from "styled-components";
import location from "../../assets/img/location.svg";

export const LocationSection = styled.section`
  background: url(${location}) no-repeat center / cover;
  min-height: 665px;
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  @media (max-width: 540px) {
    min-height: 700px;
    align-items: center;
    justify-content: center;
  }
`;

export const LocationContent = styled.div`
  padding-bottom: 40px;
  max-width: 530px;
  width: 100%;
  @media (max-width: 600px) {
    max-width: 100%;
    padding-bottom: 0;
  }
`;

export const LocationCard = styled.div`
  background: var(--dark);
  width: 100%;
  min-height: 405px;
  box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 25px 40px;
  @media (max-width: 424px) {
    padding: 20px;
  }
`;

export const LocationCardTop = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid #dddd;
  @media (max-width: 325px) {
    display: flex;
    justify-content: center;
  }
`;

export const LocationTitle = styled.h3`
  display: inline-block;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  @media (max-width: 375px) {
    font-size: 25px;
  }
`;

export const LocationCardCenter = styled.div`
  padding: 15px 0 30px 0;
  border-bottom: 1px solid #dddd;
`;

export const LocationBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  svg {
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
  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: var(--grey);
    margin-bottom: 5px;
  }
  p {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: var(--white);
  }
`;

export const LocationBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  margin-bottom: 30px;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LocationBtn = styled.button`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: var(--white);
  padding: 20px 30px;
  text-transform: uppercase;
  background: var(--darkGreen);
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const LocationSmallBtn = styled.button`
  display: none;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: var(--white);
  padding: 20px 30px;
  text-transform: uppercase;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  transition: 0.5s ease-in-out;
  margin: 20px 0;
  &:hover {
    background: var(--darkGreen);
  }
  @media (max-width: 540px) {
    display: block;
  }
`;

export const LocationBottomBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    color: var(--white);
  }
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    color: var(--grey);
  }
`;

export const LocationSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-right: 25px;
    @media (max-width: 375px) {
      display: none;
    }
  }
  @media (max-width: 375px) {
    justify-content: space-between;
  }
`;

export const LocationSocialLinks = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 375px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const LocationSocialLinksLink = styled.a`
  padding: 5px;
  font-size: 19px;
  cursor: pointer;
  svg {
    width: 100%;
  }
  &:hover {
    color: var(--darkGreen);
  }
  @media (max-width: 375px) {
    font-size: 22px;
    padding: 10px;
  }
`;
