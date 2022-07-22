import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";
import {
  CardsBottom,
  CardsContent,
  CardsTop,
  CardsWrapper,
} from "./cardsStyle";

const Cards = ({ title, productTitle,productWeight,productTxt,productDefaultCost, imgSrc}) => {
  return (
    <>
      <CardsWrapper>
        <CardsContent>
          <CardsTop>
            <div className="container">
              <Title title={title} />
            </div>
          </CardsTop>
          <CardsBottom>
            <Card imgSrc={imgSrc} productTitle={productTitle} productWeight={productWeight} productTxt={productTxt} productDefaultCost={productDefaultCost}/>
          </CardsBottom>
        </CardsContent>
      </CardsWrapper>
    </>
  );
};

export default Cards;
