import React from "react";
import {
  CafeBox,
  CafeBoxLeft,
  CafeBoxRight,
  CafeBoxRightCards,
  CafeBoxRightCardsCard,
  CafeBtn,
  CafeContent,
  CafeImg,
  CafeImgLinear,
  CafeSection,
} from "./cafeStyle";
import { Link } from "react-router-dom";
import images from "../../constants/images.js";

const Cafe = () => {
  return (
    <>
      <CafeSection>
        <div className="container">
          <CafeContent>
            <CafeBox className="row">
              <CafeImgLinear src={images.cafelineargradient} />
              <CafeBoxLeft className="col-12 col-lg-6">
                <h3>Наше Кафе</h3>
                <p>
                  Мы расположены в одном из самых живописных мест города — на
                  берегу реки, это ваш оазис в черте города, куда можно сбежать
                  от шумного и пыльного мегаполиса. Мы, действительно
                  уникальные, ведь все продумано до мелочей: проект построен из
                  дикого закарпатского сруба, камин в основном зале ресторана и
                  панорамные окна с видом на реку, уютные беседки на берегу реки
                  и лучшая видовая террасса, шатер с посадкой на 200 человек,
                  сказочный детский домик и бассейн.
                </p>
                <Link to="/">
                  <CafeBtn>ПОСМОТРЕТЬ МЕНЮ</CafeBtn>
                </Link>
              </CafeBoxLeft>
              <CafeBoxRight className="col-12 col-lg-6">
                <CafeBoxRightCards>
                  <div>
                    <CafeBoxRightCardsCard>
                      <img src={images.onion} alt="icon" />
                      <p>Свежайшие продукты</p>
                    </CafeBoxRightCardsCard>
                    <CafeBoxRightCardsCard>
                      <img src={images.chef} alt="icon" />
                      <p>Быстрая доставка</p>
                    </CafeBoxRightCardsCard>
                  </div>
                  <div>
                    <CafeBoxRightCardsCard>
                      <img src={images.flash} alt="icon" />
                      <p>Лучшие повора</p>
                    </CafeBoxRightCardsCard>
                    <CafeBoxRightCardsCard>
                      <img src={images.onion} alt="icon" />
                      <p>Свежайшие продукты</p>
                    </CafeBoxRightCardsCard>
                  </div>
                </CafeBoxRightCards>
              </CafeBoxRight>
              <CafeImg src={images.cafe} />
            </CafeBox>
          </CafeContent>
        </div>
      </CafeSection>
    </>
  );
};

export default Cafe;
