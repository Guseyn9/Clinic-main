import React from "react";
import { useState } from "react";
import servicesData from "./servicesData.json";
import treatment_room from './images/treatment_room.svg'
import specialists from './images/specialists.svg'
import otheir_services from './images/otheir_services.svg'
import massage_room from './images/massage_room.svg'
import physiotherapy_room from './images/physiotherapy_room.svg'
import physical_therapy from './images/physical_therapy.svg'
import laboratory_diagnostics from './images/laboratory_diagnostics.svg'

const servicesList = [
  { title: "Капельницы", value: "treatment_room", icon: treatment_room },
  { title: "Специалисты", value: "specialists", icon: specialists },
  { title: "Другие услуги", value: "otheir_services", icon: otheir_services },
  { title: "Кабинет массажа", value: "massage_room", icon: massage_room },
  { title: "Кабинет физиолечения", value: "physiotherapy_room", icon: physiotherapy_room },
  { title: "Лечебная физкультура", value: "physical_therapy", icon: physical_therapy },
  { title: "Лабораторная диагностика", value: "laboratory_diagnostics", icon: laboratory_diagnostics },
];

export default function Services() {
  const [currentItem, setCurrrentItem] = useState(servicesList[0]);

  const changeListItemHandle = (item) => {
    setCurrrentItem(item);
  };

  return (
    <>
      <div className="container-0" id="services">
        <div className="services-hover">
          <h2 className="name-services">Услуги</h2>
          <a href="#" className="ms_booking">
            <button className="button-services">
              <a href="https://wa.me/79292939377?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20прием" className="signup-link">
                  ЗАПИСАТЬСЯ
              </a>
            </button>
          </a>
        </div>
        <div className="services">
          <div className="services-point">
            {servicesList.map((listItem) => {
              let classes = "services-point-item";
              if (listItem.value === currentItem.value) {
                classes += " point-is-active";
              }
              return (
                <div
                  className={classes}
                  key={listItem.value}
                  onClick={() => changeListItemHandle(listItem)}
                >
                  <img src={listItem.icon} alt="" />
                  <span className="services-point-text">{listItem.title}</span>
                </div>
              );
            })}
          </div>
          <div className="services-list" key={currentItem.value}>
            {servicesData[currentItem.value].map((obj, index) => {
              return (
                <div 
                  className="services-list-point"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  key={obj.title}
                >
                  <p className="services-title">{obj.title}</p>
                  <p className="services-price">{obj.price} ₽</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
