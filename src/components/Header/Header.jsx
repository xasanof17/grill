import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  HeaderBtn,
  HeaderContent,
  HeaderImg,
  HeaderSection,
  HeaderTitle,
} from "./headerStyle";
import images from "../../constants/images";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <div className="container">
          <HeaderContent>
            <Row>
              <Col md={6}>
                <HeaderTitle>
                  <HeaderImg src={images.headertitle} />
                </HeaderTitle>
                <HeaderBtn>
                  <HeaderImg src={images.headerbtnbg} />
                  <button type="button">Ещё не пробовал?</button>
                </HeaderBtn>
              </Col>
            </Row>
          </HeaderContent>
        </div>
      </HeaderSection>
    </>
  );
};

export default Header;
