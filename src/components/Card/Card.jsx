import React, { useState } from "react";
import {
  CardBody,
  CardBodyBottom,
  CardBodyBottomInner,
  CardBodyCenter,
  CardBodyTop,
  CardImg,
  CardTopNum,
  CardWrapper,
} from "./cardStyle";
import images from "../../constants/images";
import Button from "../KorzinaBtn/Button";
import { Minus, Plus } from "../Buttons";

const Card = ({ imgSrc,productTitle,productWeight,productTxt,productDefaultCost}) => {

  const [clicked, setClicked] = useState(false);
  const CartKorzinka = () => {
    setClicked(true);
  };

  return (
    <>
      <CardWrapper>
        <CardImg>
          <img src={images.card1} alt="card-img" />
          <CardTopNum>
            <span>3</span>
          </CardTopNum>
        </CardImg>
        <CardBody>
          <CardBodyTop>
            <h3>{productTitle}</h3>
            <span>{productWeight}</span>
          </CardBodyTop>
          <CardBodyCenter>
            <p>{productTxt}</p>
          </CardBodyCenter>
          <CardBodyBottom>
            <CardBodyBottomInner className={clicked ? 'notshow' : ''}>
              <h3>{productDefaultCost}</h3>
              <Button name="В корзину" onClick={CartKorzinka} />
            </CardBodyBottomInner>
            <CardBodyBottomInner className={clicked ? 'show' : 'notshow'}>
              <Minus/>
              <h3 >{productDefaultCost}</h3>
              <Plus/>
            </CardBodyBottomInner>
          </CardBodyBottom>
        </CardBody>
      </CardWrapper>
    </>
  );
};

export default Card;
