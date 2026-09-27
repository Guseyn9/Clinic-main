import React, { useSate, useState } from "react";

export default function Description() {

  return (
    <>
      <div className="container-description">
        <div className="short-description">
          <p className="mimi-p">Медицина оздоровления в Сургуте</p>
          <h1>Заботимся о вашем здоровье</h1>
          <p className="mini-p">
            В своей практике мы используем передовые методы диагностики и
            лечения заболеваний
          </p>
          <a href="#" className="ms_booking">
            <button className="description-button">
              <a href="https://wa.me/79292939377?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20прием" className="signup-link">
                ЗАПИСАТЬСЯ
              </a>
            </button>
          </a>
        </div>
        <div className="video">
          <img
            src="/img/video-pic.svg"
            className="video-svg"
          />
          <img src="/img/elipse-1.svg" className="eliple-1" />
          <img src="/img/elipse-2.svg" className="eliple-2" />
          <img src="/img/elipse-5.svg" className="eliple-5" />
          <img src="/img/elipse-6.svg" className="eliple-6" />
          <img src="/img/elipse-8.svg" className="eliple-8" />
          <img src="/img/elipse-9.svg" className="eliple-9" />
        </div>
      </div>
    </>
  );
}
