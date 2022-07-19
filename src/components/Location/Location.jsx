import React from "react";
import {
  LocationBox,
  LocationBoxLeft,
  LocationBoxRight,
  LocationCard,
  LocationCardCenter,
  LocationCardTop,
  LocationContent,
  LocationSection,
  LocationTitle,
} from "./locationStyle";

import { GoLocation } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";

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
                    <a href="mailto:xasanof17@gmail.com" target="_blank" rel="noreferrer" title="mail">
                    auto.wash@gmail.com
                    </a>
                  </LocationBoxRight>
                </LocationBox>
              </LocationCardCenter>
            </LocationCard>
          </LocationContent>
        </div>
      </LocationSection>
    </>
  );
};

export default Location;
