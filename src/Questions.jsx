import React, { useEffect } from 'react';
// import './libs/accordion.js';
import './libs/accordion.min.css';
// import './libs/accordion.min.js';
import Accordion from 'accordion-js';
import icon from './images/Group-7.svg'

export const Questions = () => {
  useEffect(() => {
    new Accordion('.accordion-questions');
  }, []);

  return (
    <div className='container-0'>
        <div className="arrows">
          <h2>Часто задаваемые вопросы</h2>
        </div>
      <div className="questions">
        <ul className="questions-list accordion accordion-questions">
          <li className="questions-item js-enabled ac" id='ac-0'>
            <button className="questions-btn ac-trigger" id='ac-trigger-0'>
              У ребенка диагноз задержка психо-речевого развития, можно ли к вам попасть на реабилитацию? И какие услуги можно получить?
              <div className="questions-icon-block">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="23.5" fill="#F8FFFF" stroke="#CDCDCD" stroke-width="3"/>
                  <rect x="24.8028" y="31.039" width="2.02574" height="15" rx="1" transform="rotate(-135 24.8028 31.039)" fill="#CDCDCD"/>
                  <rect x="26.0208" y="29.8209" width="2" height="15" rx="1" transform="rotate(135 26.0208 29.8209)" fill="#CDCDCD"/>
                </svg>
              </div>
            </button>
            <div className="ac-panel" id='ac-panel-0'>
              <p className="question-descr">
                ООО «Медмел - медицина оздоровления» оказывает услуги социальной реабилитации при наличии ИППСУ. Разработать программу можно в Агенстве социального благополучия населения Югры по адресу: г. Сургут, ул. Лермонтово 3/1, тел. 8(3462)55-05-51. <br />
                В нашей клинике вы можете получить следующие услуги: осмотры врача педиатра, физиотерапевтические процедуры, массаж, АФК, БАК, услуги процедурного кабинета, консультация/занятия психолога, логопеда. <br />
                За более подробной информацией необходимо обратиться по телефонам: 
                <a href='tel:>+73462380894' className="tel">8(3462) 38-08-94;</a>
                <a href='tel:>+79292939377' className="tel">8(929)293-93-77</a>
              </p>
            </div>
          </li>
          <li className="questions-item js-enabled ac" id='ac-1'>
            <button className="questions-btn ac-trigger" id='ac-trigger-1'>
              В каком возрасте лучше приводить ребёнка к нейропсихологу? Что выявляет нейропсихологическая диагностика?
              <div className="questions-icon-block">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="23.5" fill="#F8FFFF" stroke="#CDCDCD" stroke-width="3"/>
                  <rect x="24.8028" y="31.039" width="2.02574" height="15" rx="1" transform="rotate(-135 24.8028 31.039)" fill="#CDCDCD"/>
                  <rect x="26.0208" y="29.8209" width="2" height="15" rx="1" transform="rotate(135 26.0208 29.8209)" fill="#CDCDCD"/>
                </svg>
              </div>
            </button>
            <div className="ac-panel" id='ac-panel-1'>
              <p className="question-descr">
                Нейродиагностическое исследование проводится с детьми, начиная с 3–4 лет, но если родители замечают отклонения в развитии ребёнка раньше (развитие ребёнка отстаёт от нормы), то и обращаться за помощью следует раньше. 
                Нейропсихологическая диагностика позволяет выявить причины возможных трудностей в учёбе (невнимательность, низкий уровень усвоения и запоминания материала, большое количество ошибок) и в поведении (неусидчивость, медлительность или излишняя активность, проблемы дисциплины). <br />
                За более подробной информацией необходимо обратиться по телефонам: 
                <a href='tel:>+73462380894' className="tel">8(3462) 38-08-94;</a>
                <a href='tel:>+79292939377' className="tel">8(929)293-93-77</a>
              </p>
            </div>
          </li>
          <li className="questions-item js-enabled ac" id='ac-2'>
            <button className="questions-btn ac-trigger" id='ac-trigger-2'>
              Можно ли получить в вашем центре услуги по ИППСУ?
              <div className="questions-icon-block">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="23.5" fill="#F8FFFF" stroke="#CDCDCD" stroke-width="3"/>
                  <rect x="24.8028" y="31.039" width="2.02574" height="15" rx="1" transform="rotate(-135 24.8028 31.039)" fill="#CDCDCD"/>
                  <rect x="26.0208" y="29.8209" width="2" height="15" rx="1" transform="rotate(135 26.0208 29.8209)" fill="#CDCDCD"/>
                </svg>
              </div>
            </button>
            <div className="ac-panel" id='ac-panel-2'>
              <p className="question-descr">
                ООО «Медмел - медицина оздоровления» оказывает услуги социальной реабилитации при наличии ИППСУ. Разработать программу можно в Агенстве социального благополучия населения Югры по адресу: г. Сургут, ул. Лермонтово 3/1, тел. 8(3462)55-05-51.
                Услуги могут получить следующие категории граждан: дети – инвалиды, дети с ограниченными возможностями здоровья, участники СВО, семья участников СВО. <br />
                За более подробной информацией необходимо обратиться по телефонам: 
                <br />
                <a href='tel:>+73462380894' className="tel">8(3462) 38-08-94;</a>
                <a href='tel:>+79292939377' className="tel">8(929)293-93-77</a>
              </p>
            </div>
          </li>
          <li className="questions-item js-enabled ac" id='ac-3'>
            <button className="questions-btn ac-trigger" id='ac-trigger-3'>
              Какие показания и противопоказания для проведения процедуры БАК?
              Есть ли возрастные ограничения?
              <div className="questions-icon-block">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="23.5" fill="#F8FFFF" stroke="#CDCDCD" stroke-width="3"/>
                  <rect x="24.8028" y="31.039" width="2.02574" height="15" rx="1" transform="rotate(-135 24.8028 31.039)" fill="#CDCDCD"/>
                  <rect x="26.0208" y="29.8209" width="2" height="15" rx="1" transform="rotate(135 26.0208 29.8209)" fill="#CDCDCD"/>
                </svg>
              </div>
            </button>
            <div className="ac-panel" id='ac-panel-3'>
              <p className="question-descr">
                Биоакустическая коррекция (БАК) — это современный неинвазивный и безопасный метод, основанный на преобразовании электрической активности мозга в звуковые колебания и направленный на восстановление и улучшение функций центральной нервной системы. В нашей клинике данный метод успешно применяется для реабилитации детей и взрослых с различными нарушениями, способствуя нормализации их состояния и улучшению качества жизни.
              </p>
              <h3 className="questions-panel-title">Показания к применению БАК:</h3>
              <ul className="questions-panel-list">
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Психо-эмоциональные расстройства любой этиологии.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Синдром гиперактивности с дефицитом внимания.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Задержка психо-речевого развития, неравномерное развитие высших корковых функций.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Расстройство рецептивной, экспрессивной речи (алалия, заикание, дизартрия).</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Расстройства аутистического спектра.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Невроз, неврозоподобные заболевания, энурез.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Гиперкинезы, синдром навязчивых движений.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Нарушения сна.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Последствия ЧМТ, восстановительный период.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Церебро-астенический синдром.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Церебро-астенический синдром.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Церебро-астенический синдром.</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">Церебро-астенический синдром.</p>
                </li>
              </ul>
              <h3 className="questions-panel-title">Противопоказания:</h3>
              <ul className="questions-panel-list">
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">любые острые состояния, в т.ч. инфаркты, кровотечения, нарушения кровообращения, ЧМТ;</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">острые инфекционные заболевания;</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">гипертонический криз;</p>
                </li>
                <li className="questions-panel-item">
                  <img src={icon} alt="" className="youcan-img" />
                  <p className="youcan-text">острый послеоперационный период.</p>
                </li>
              </ul>
              <h3 className="questions-panel-title">Длительность курса:</h3>
              <p className="question-descr">
              Курс состоит из 10-15 сеансов (продолжительность курса определяется врачом). Продолжительность сеанса – 15-20 минут у детей, 25 минут у взрослых
              Пациентам с тяжелой патологией требуется 3-4 курса в год (определяет врач).
              <br />
              За более подробной информацией необходимо обратиться по телефонам: 
              <a href='tel:>+73462380894' className="tel">8(3462) 38-08-94;</a>
              <a href='tel:>+79292939377' className="tel">8(929)293-93-77</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
