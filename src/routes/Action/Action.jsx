import React from 'react'
import { Location, Navigation, Title } from '../../components'
import { Aksiya, AksiyaCard, AksiyaCardInner, AksiyaCardInnerBottom, AksiyaCardInnerTop, AksiyaCards, AksiyaContent, AksiyaTop } from './actionStyle'
import images from '../../constants/images'

const Action = () => {
  return (
    <>
      <Navigation />
      <Aksiya>
        <AksiyaTop>
          <div className="container">
            <Title title="АКЦИИ" />
          </div>
        </AksiyaTop>
        <div className="container">
          <AksiyaContent>
            <AksiyaCards className="row">
              <AksiyaCard className="col-12 col-lg-4 col-sm-6">
                <AksiyaCardInner>
                  <AksiyaCardInnerTop><img src={images.vegetarian} alt="" /></AksiyaCardInnerTop>
                  <AksiyaCardInnerBottom>
                    <h3>Без мяса? Здесь!</h3>
                    <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
                      пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                      суп с гренками, Грибной Стартер, Рулетики с сыром,
                      Картофель из печи, Картофельные оладьи или Греческий
                      салат. Выберите свой вкус!</p>
                    <a href='/'>до 31 июля.</a>
                  </AksiyaCardInnerBottom>
                </AksiyaCardInner>
              </AksiyaCard>
              <AksiyaCard className="col-12 col-lg-4 col-sm-6">
                <AksiyaCardInner>
                  <AksiyaCardInnerTop><img src={images.combo} alt="" /></AksiyaCardInnerTop>
                  <AksiyaCardInnerBottom>
                    <h3>Выгодное комбо c напитками</h3>
                    <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
                      пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                      суп с гренками, Грибной Стартер, Рулетики с сыром,
                      Картофель из печи, Картофельные оладьи или Греческий
                      салат. Выберите свой вкус!</p>
                    <a href='/'>до 31 июля.</a>
                  </AksiyaCardInnerBottom>
                </AksiyaCardInner>
              </AksiyaCard>
              <AksiyaCard className="col-12 col-lg-4 col-sm-6">
                <AksiyaCardInner>
                  <AksiyaCardInnerTop><img src={images.cheease} alt="" /></AksiyaCardInnerTop>
                  <AksiyaCardInnerBottom>
                    <h3>Сырный бортик</h3>
                    <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
                      пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                      суп с гренками, Грибной Стартер, Рулетики с сыром,
                      Картофель из печи, Картофельные оладьи или Греческий
                      салат. Выберите свой вкус!</p>
                    <a href='/'>до 31 июля.</a>
                  </AksiyaCardInnerBottom>
                </AksiyaCardInner>
              </AksiyaCard>
              <AksiyaCard className="col-12 col-lg-4 col-sm-6">
                <AksiyaCardInner>
                  <AksiyaCardInnerTop><img src={images.combo} alt="" /></AksiyaCardInnerTop>
                  <AksiyaCardInnerBottom>
                    <h3>Выгодное комбо c напитками</h3>
                    <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
                      пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                      суп с гренками, Грибной Стартер, Рулетики с сыром,
                      Картофель из печи, Картофельные оладьи или Греческий
                      салат. Выберите свой вкус!</p>
                    <a href='/'>до 31 июля.</a>
                  </AksiyaCardInnerBottom>
                </AksiyaCardInner>
              </AksiyaCard>
              <AksiyaCard className="col-12 col-lg-4 col-sm-6">
                <AksiyaCardInner>
                  <AksiyaCardInnerTop><img src={images.vegetarian} alt="" /></AksiyaCardInnerTop>
                  <AksiyaCardInnerBottom>
                    <h3>Без мяса? Здесь!</h3>
                    <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
                      пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                      суп с гренками, Грибной Стартер, Рулетики с сыром,
                      Картофель из печи, Картофельные оладьи или Греческий
                      салат. Выберите свой вкус!</p>
                    <a href='/'>до 31 июля.</a>
                  </AksiyaCardInnerBottom>
                </AksiyaCardInner>
              </AksiyaCard>
              <AksiyaCard className="col-12 col-lg-4 col-sm-6">
                <AksiyaCardInner>
                  <AksiyaCardInnerTop><img src={images.combo} alt="" /></AksiyaCardInnerTop>
                  <AksiyaCardInnerBottom>
                    <h3>Выгодное комбо c напитками</h3>
                    <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
                      пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                      суп с гренками, Грибной Стартер, Рулетики с сыром,
                      Картофель из печи, Картофельные оладьи или Греческий
                      салат. Выберите свой вкус!</p>
                    <a href='/'>до 31 июля.</a>
                  </AksiyaCardInnerBottom>
                </AksiyaCardInner>
              </AksiyaCard>
              <AksiyaCard className="col-12 col-lg-4 col-sm-6">
                <AksiyaCardInner>
                  <AksiyaCardInnerTop><img src={images.cheease} alt="" /></AksiyaCardInnerTop>
                  <AksiyaCardInnerBottom>
                    <h3>Сырный бортик</h3>
                    <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
                      пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                      суп с гренками, Грибной Стартер, Рулетики с сыром,
                      Картофель из печи, Картофельные оладьи или Греческий
                      салат. Выберите свой вкус!</p>
                    <a href='/'>до 31 июля.</a>
                  </AksiyaCardInnerBottom>
                </AksiyaCardInner>
              </AksiyaCard>
              <AksiyaCard className="col-12 col-lg-4 col-sm-6">
                <AksiyaCardInner>
                  <AksiyaCardInnerTop><img src={images.combo} alt="" /></AksiyaCardInnerTop>
                  <AksiyaCardInnerBottom>
                    <h3>Выгодное комбо c напитками</h3>
                    <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
                      пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                      суп с гренками, Грибной Стартер, Рулетики с сыром,
                      Картофель из печи, Картофельные оладьи или Греческий
                      салат. Выберите свой вкус!</p>
                    <a href='/'>до 31 июля.</a>
                  </AksiyaCardInnerBottom>
                </AksiyaCardInner>
              </AksiyaCard>
              <AksiyaCard className="col-12 col-lg-4 col-sm-6">
                <AksiyaCardInner>
                  <AksiyaCardInnerTop><img src={images.vegetarian} alt="" /></AksiyaCardInnerTop>
                  <AksiyaCardInnerBottom>
                    <h3>Без мяса? Здесь!</h3>
                    <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
                      пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                      суп с гренками, Грибной Стартер, Рулетики с сыром,
                      Картофель из печи, Картофельные оладьи или Греческий
                      салат. Выберите свой вкус!</p>
                    <a href='/'>до 31 июля.</a>
                  </AksiyaCardInnerBottom>
                </AksiyaCardInner>
              </AksiyaCard>
            </AksiyaCards>
          </AksiyaContent>
        </div>
      </Aksiya>
      <Location />
    </>
  )
}

export default Action