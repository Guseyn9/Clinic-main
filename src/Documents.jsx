import React, { useState, useEffect } from "react";
import documents from './documents.json'
import './libs/accordion.min.css';
import Accordion from 'accordion-js';

const servicesList = [
    { title: "Нормативно-правовые документы", value: "regulatory_documents" },
    { title: "Учредительные документы", value: "statutory_documents" },
    { title: "Социальные услуги", value: "social_services" },
    { title: "Платные услуги", value: "paid_services" }
];

export default function Documents() {
  useEffect(() => {
    new Accordion('.accordion-documents');
  }, []);

    const [currentItem, setCurrrentItem] = useState(servicesList[0]);

    return (
        <div className="container-0" id="documents">
            <div className="services-hover">
                <h2 className="name-services">Документы</h2>
            </div>
            <div className="documents">
            <ul className="questions-list accordion accordion-documents">
              {servicesList.map((item) => {
                return (
                  <li className="questions-item js-enabled ac" id='ac-0'>
                    <button className="questions-btn ac-trigger" id='ac-trigger-0' onClick={() => setCurrrentItem(item.value)}>
                      {item.title}
                      <div className="questions-icon-block">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="25" cy="25" r="23.5" fill="#F8FFFF" stroke="#CDCDCD" stroke-width="3"/>
                          <rect x="24.8028" y="31.039" width="2.02574" height="15" rx="1" transform="rotate(-135 24.8028 31.039)" fill="#CDCDCD"/>
                          <rect x="26.0208" y="29.8209" width="2" height="15" rx="1" transform="rotate(135 26.0208 29.8209)" fill="#CDCDCD"/>
                        </svg>
                      </div>
                    </button>
                    <div className="ac-panel" id='ac-panel-0'>
                      {documents[item.value].map((obj) => {
                          return (
                              <div key={obj} className="services-list-point">
                                  <a href={`../${currentItem}/${obj}`} className="services-title">{obj}
                                  <svg width='24' height='24' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-5.859 5.859a1.2 1.2 0 0 1-1.697 0l-5.858-5.859a1 1 0 0 1 0-1.414Z" fill="#888888"></path>
                                    <path d="M12 17a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1ZM4 20a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" fill="#888888"></path>
                                  </svg></a>
                              </div>
                          );
                      })}
                    </div>
                  </li>
                )
              })}
            </ul>
                {/* <div className="services-point">
                    {servicesList.map((listItem) => {
                        let classes = "services-point-item";
                        if (listItem.value === currentItem.value) {
                            classes += " point-is-active";
                        }
                        return (
                            <div
                                className={classes}
                                key={listItem.value}
                                onClick={() => setCurrrentItem(listItem)}
                            >
                                {listItem.title}
                            </div>
                        );
                    })}
                </div> */}
                {/* <div className="services-list">
                    {documents[currentItem.value].map((obj) => {
                        return (
                            <div key={obj} className="services-list-point">
                                <a href={`../${currentItem.value}/${obj}`} className="services-title">{obj}</a>
                            </div>
                        );
                    })}
                </div> */}
            </div>
        </div>
    )
}