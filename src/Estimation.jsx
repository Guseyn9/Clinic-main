import React from 'react'
import protectionIcon from './images/protecIcon.png'
import qrIcon from './images/qr.jpg'
import icon from './images/Group-7.svg'
import likeIcon from './images/likeIcon.svg'
import letterIcon from './images/letterIcon.svg'
import searchIcon from './images/docIcon.svg'

export const Estimation = () => {
  return (
    <div className="estimation">
      <div className="estimation-content">
        <div className="container-0 content-container">
        <div className="protection-block">
          <img src={protectionIcon} alt="" className="protection-img" />
        </div>
          <h2 className="estimation-title">Оцените <br /> нашу работу</h2>
            <p className="estimation-descr">
              Чтобы оценить условия предоставления услуг наведите камеру вашего телефона и сканируйте QR-код
            </p>
        </div>
        </div>
    <div className='container-0 estimation-container'>
        <div className="estimation-content-2">
          <div className="qr-block">
            <img src={qrIcon} alt="" className="qr-img" />
            <p className="qr-descr">
              Ваша оценка поможет нам стать лучше и убедиться, что все хорошо!
            </p>
          </div>
          <div className="youcan">
            <h2 className="youcan-title">Вы можете:</h2>
            <div className="youcan-services">
              <img src={likeIcon} alt="" className="youcan-services-img" />
              <div className="youcan-services-content">
                <h3 className="youcan-block-title">Оценить условия оказания услуг:</h3>
                <ul className="youcan-list">
                  <li className="youcan-item">
                    <img src={icon} alt="" className="youcan-img" />
                    <p className="youcan-text">Комфорт и чистота помещений</p>
                  </li>
                  <li className="youcan-item">
                    <img src={icon} alt="" className="youcan-img" />
                    <p className="youcan-text">Доброжелательность и вежливость персонала</p>
                  </li>
                  <li className="youcan-item">
                    <img src={icon} alt="" className="youcan-img" />
                    <p className="youcan-text">Легкость получения информации о работе организации и ее точность</p>
                  </li>
                  <li className="youcan-item">
                    <img src={icon} alt="" className="youcan-img" />
                    <p className="youcan-text">Удобство записи для получения услуги и своевременность ее оказания</p>
                  </li>
                  <li className="youcan-item">
                    <img src={icon} alt="" className="youcan-img" />
                    <p className="youcan-text">Доступность для граждан с инвалидностью</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="youcan-block">
              <img src={letterIcon} alt="" className="youcan-services-img" />
              <h3 className="youcan-block-title">Оставить свое сообщение</h3>
            </div>
            <div className="youcan-block">
              <img src={searchIcon} alt="" className="youcan-services-img" />
              <h3 className="youcan-block-title">Ознакомиться с рейтингом организации</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
