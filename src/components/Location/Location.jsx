import React from "react";
import {Link} from 'react-router-dom'
import {
  LocationBottom,
  LocationBottomBox,
  LocationBox,
  LocationBoxLeft,
  LocationBoxRight,
  LocationBtn,
  LocationCard,
  LocationCardCenter,
  LocationCardTop,
  LocationContent,
  LocationSection,
  LocationSmallBtn,
  LocationSocial,
  LocationSocialLinks,
  LocationSocialLinksLink,
  LocationTitle,
} from "./locationStyle";

import { GoLocation } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import {FaFacebookSquare,FaInstagram,FaTelegram,FaYoutube} from "react-icons/fa";

const Location = () => {
  return (
    <>
      <LocationSection>
        <div className="container">
          <LocationContent>
            <LocationCard>
              <LocationCardTop>
                <LocationTitle>Контакты</LocationTitle>
              </LocationCardTop>
              <LocationCardCenter>
                <LocationBox>
                  <LocationBoxLeft>
                    <GoLocation />
                  </LocationBoxLeft>
                  <LocationBoxRight>
                    <span>Наш адрес:</span>
                    <p>
                      МО, городской округ Красногорск, село Ильинкое,
                      Экспериментальная улица, 10
                    </p>
                  </LocationBoxRight>
                </LocationBox>
                <LocationBox>
                  <LocationBoxLeft>
                    <IoMailOutline />
                  </LocationBoxLeft>
                  <LocationBoxRight>
                    <span>Наша почта:</span>
                    <a
                      href="mailto:xasanof17@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      title="mail"
                    >
                      auto.wash@gmail.com
                    </a>
                  </LocationBoxRight>
                </LocationBox>
              </LocationCardCenter>
              <LocationBottom>
                <Link to='/xaxa'>
              <LocationBtn>Забронировать СТОЛ</LocationBtn>
              </Link>
                <Link to='/xaxa'>
              <LocationSmallBtn>ПРОЛОЖИТЬ МАРШРУТ</LocationSmallBtn>
              </Link>
              <LocationBottomBox href="tel:+998 90 019 85 05">
                <span>+998 (90) 019-85-05</span>
                <p>Звоните или оставляйте заявку</p>
              </LocationBottomBox>
              </LocationBottom>
              <LocationSocial>
                <p>Мы в соц сетях:</p>
                <LocationSocialLinks>
                <LocationSocialLinksLink href="#!" /* target="_blank" */><FaFacebookSquare/></LocationSocialLinksLink>
                <LocationSocialLinksLink href="#!" /* target="_blank" */><FaInstagram/></LocationSocialLinksLink>
                <LocationSocialLinksLink href="#!" /* target="_blank" */><FaYoutube/></LocationSocialLinksLink>
                <LocationSocialLinksLink href="#!" /* target="_blank" */><FaTelegram/></LocationSocialLinksLink>
                </LocationSocialLinks>
              </LocationSocial>
            </LocationCard>
          </LocationContent>
        </div>
      </LocationSection>
    </>
  );
};

export default Location;
