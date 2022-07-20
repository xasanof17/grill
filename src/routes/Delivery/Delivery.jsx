import React from 'react'
import { Accordion, Navigation, Title } from '../../components'
import { Delivery, DeliveryContent, DeliveryContentInner, DeliveryGrafik, DeliveryGrafikInner, DeliveryInner, DeliveryLeft, DeliveryRight, DeliveryTop, GrafikSpan, GrafikTitle, Zakaz, ZakazTitle, ZakazTxt, } from './deliveryStyle'
import images from '../../constants/images';

const accordionData = [
  { id: 1, title: 'У наших курьеров всегда должна быть сдача!', text: 'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам' },
  { id: 2, title: 'Вам что-то не довезли?', text: 'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам' },
  { id: 3, title: 'Не понравился продукт?', text: 'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам' },
  { id: 4, title: 'Если появились замечания', text: 'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам' },
  { id: 5, title: 'Оплата Visa, MasterCard и МИР', text: 'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам' },
  { id: 6, title: 'Реквизиты', text: 'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам' },
]

const Delievery = () => {
  return (
    <>
      <Navigation />
      <Delivery>
        <DeliveryTop>
          <div className="container">
            <Title title="Условия доставки" />
          </div>
        </DeliveryTop>
        <div className="container">
          <DeliveryContent>
            <DeliveryContentInner className='row'>
              <DeliveryLeft className='col-12 col-md-6'>
                <DeliveryInner>
                  {accordionData.map(({ id, title, text }) => (
                    <Accordion key={id} title={title} text={text} />
                  ))}
                </DeliveryInner>
              </DeliveryLeft>
              <DeliveryRight className='col-12 col-md-6'>
                <DeliveryInner><img src={images.locationsmall} alt="" /></DeliveryInner>
              </DeliveryRight>
            </DeliveryContentInner>
            <DeliveryGrafik>
            <DeliveryGrafikInner>
              <GrafikTitle>График работы доставки:</GrafikTitle>
              <GrafikSpan>с 10:00-21:00</GrafikSpan>
            </DeliveryGrafikInner>
            <DeliveryGrafikInner>
              <GrafikTitle>График работы кафе:</GrafikTitle>
              <GrafikSpan>с 08:00-21:00</GrafikSpan>
            </DeliveryGrafikInner>
            </DeliveryGrafik>
            <Zakaz>
            <ZakazTitle>Минимальный заказ:</ZakazTitle>
            <ZakazTxt>Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
Доставка оператором такси от любой суммы заказа - по тарифам 
перевозчика.</ZakazTxt>
            </Zakaz>
          </DeliveryContent>
        </div>
      </Delivery>
    </>
  )
}

export default Delievery