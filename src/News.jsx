import React from 'react'

export const News = () => {
  return (
    <div className='container-0'>
      <div class="arrows">
        <h2>Новости</h2>
      </div>
      <div className="stock-container">
        <div className="stock-content">
          <div className="stock-discount">-18%</div>
          <div className="stock-block-1">
            <h3 className="stock-title">Прием врача терапевта</h3>
            <div className="stock-price-block">
              <div className="stock-price-before-block">
                <span className="stock-price-before">2200 ₽</span>
                <div className="stock-price-line"></div>
              </div>
              <span className="stock-price">1800 ₽</span>
            </div>
          </div>
          <div className="stock-block-2">
            <p className="stock-block-2-descr">Индивидуальный осмотр и консультация</p>
            <p className="stock-block-2-text">Быстрое обслуживание</p>
            <p className="stock-block-2-text">Здоровое восстановление</p>
            <button className="button-services">
              <a href="https://wa.me/79292939377?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20прием" className="signup-link">
                  ЗАПИСАТЬСЯ
              </a>
            </button>
          </div>
        </div>
        <div className="stock-content">
          <div className="stock-block-1">
            <h3 className="stock-title">Оставить отзыв</h3>
          </div>
          <div className="stock-block-2">
            <p className="stock-block-2-descr">
            Ваше мнение важно для нас! Поделитесь своим опытом и помогите другим сделать правильный выбор!
              </p>
            <button className="button-services">
              <a href="https://wa.me/79292939377?text=Здравствуйте!%20Проходил(а)%20процедуры%20в%20вашей%20клинике%20и%20хочу%20выразить%20благодарность..." className="signup-link">
                  Оставить отзыв
              </a>
            </button>
          </div>
        </div>
        <div className="stock-content">
          <div className="stock-block-1">
            <h3 className="stock-title">Задать нам вопрос</h3>
          </div>
          <div className="stock-block-2">
            <p className="stock-block-2-descr">У вас есть вопросы? <br /> Не стесняйтесь! </p>
            <p className="stock-block-2-text">Обратитесь к нашим специалистам и получите квалифицированную консультацию.</p>
            <button className="button-services">
              <a href="https://wa.me/79292939377?text=Здравствуйте!%20Хотел(а)%20бы%20задать%20вопрос" className="signup-link">
                  Задать вопрос
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="discount-container">
        <div className="discount">
          <div className="discount-content">
            <h3 className="discount-title">Скидка при первом посещении</h3>
            <p className="discount-descr">Посетите нашу клинику в первый раз и получите скидку</p>
            <button className="button-services">
              <a href="https://wa.me/79292939377?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20прием" className="signup-link">
                  ЗАПИСАТЬСЯ
              </a>
            </button>
          </div>
          <div className="discount-block">
            <span className="discount-block-text">-20%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
