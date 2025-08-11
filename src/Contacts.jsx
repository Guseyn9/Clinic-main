import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import telIcon from './images/i-4.svg';
import whatsappIcon from './images/whatsapp.svg'

export default function Contacts() {
  const defaultState = {
    center: [61.25073, 73.431852],
    zoom: 15,
  };

  return (
    <>
      <div className="container-0">
        <div className="arrows">
          <h2>Мы на связи</h2>
        </div>
        <div className="container-contacts">
          <YMaps>
            <Map defaultState={defaultState} className="y-map">
              <Placemark geometry={[61.25073, 73.431852]} />
            </Map>
          </YMaps>
          <div className="contacts">
            <div className="contacts-tel">
              <h2>Контакты</h2>
              <p>​Сургут, Университетская, 23/5</p>
              <a className="tel" href="tel:>+73462380894">
                <img src={telIcon} alt="" className="contacts-img" />
                Позвонить
              </a>
              <a className="tel contacts-whatsapp" href="https://wa.me/79292939377?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20прием">
                <img src={whatsappIcon} alt="" className="contacts-img" />
                WhatsApp
              </a>
              <br />
              <p className="contacts-descr">
                Записаться на прием можно по телефону, WhatsApp или по кнопке
                ниже.
              </p>
              <div className="contacts-block" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <img src="../img/qr.jpg" alt="QR-code" width={150}/>
                <h2>Оцените наши услуги</h2>
              </div>
            </div>
            <div className="working-hours">
              <div>
                <div className="work-day">
                  <p>Будни:</p>
                  <p>8:00 - 21:00</p>
                </div>
                <div className="work-day">
                  <p>Сб, вс:</p>
                  <p>10:00 - 20:00</p>
                </div>
              </div>
              <a href="#" className="ms_booking">
                <button className="button-services">
                <a href="https://wa.me/79292939377?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20прием" className="signup-link">
                  ЗАПИСАТЬСЯ
                </a>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <div>
          <img src="../img/poster.png" alt="Постер" width={1000}/>
        </div> */}
      </div>
      {/* <div className="container">
            
            
        </div> */}
    </>
  );
}
