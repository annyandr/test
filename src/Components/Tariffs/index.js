import React, { useState } from "react";
import './style.css'
// import ImageWithText from './lobby.jpg'
import lobby from './lobby.jpg'

const Tariffs = ({hTariffs}) => {
    return (
        
    <div className="tariffs">
        <div>
            <img width="1000" className="picture" height="600" src={lobby} alt="Lobby" />
        </div>

        {/* <div>
        <ImageWithText
            imageUrl="./lobby.jpg"
            imageAlt="Lobby"
            text="Тарифы"
        />
        </div> */}

        <div>
            <div>Кино-утро</div>
            <div>Аренда зала с 06:00 до 12:00</div>
            <p>2500р / 2,5ч</p>
        </div>
        <div>
            <div>Кино-день</div>
            <div>Аренда зала с 12:00 до 18:00</div>
            <p>4000р / 2,5ч</p>
        </div>
        <div>
            <div>Кино-ночь</div>
            <div>Аренда зала с 18:00 до 06:00</div>
            <p>5000р / 2,5ч</p>
        </div>
        <p></p>
        <div>
            <p>Пакет "Романтика":</p>
            <div>Романтическая обстановка (ароматические свечи, лепестки роз)</div>
            <div>Газировка 2 х 0,5л на Ваш выбор</div>
            <div>Горячий чай на Ваш выбор</div>
            <div>2 десерта на Ваш выбор</div>
            <div>Стоимость: 2000 руб</div>
        </div>
        <div>
            <p>Пакет "Вечеринка"</p>
            <div>Попкорн 2 х 200г на Ваш выбор (соленый, сырный, карамельный)</div>
            <div>Газировка 4 х 0,5л на Ваш выбор</div>
            <div>Чипсы 4 х 70г на Ваш выбор</div>
            <div>2 пиццы</div>
            <div>Стоимость: 2500 руб</div>
        </div>
        <p></p>
        <div>
            <div>Продление аренды кинозала на 1 час</div>
            <p></p>
            <div>1000 руб (с 06:00 до 12:00)</div>
            <div>1500 руб (с 12:00 до 18:00)</div>
            <div>2000 руб (с 18:00 до 06:00)</div>
        </div>
    </div>
    );
};

export default Tariffs;