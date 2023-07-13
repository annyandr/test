import React from "react";
import './style.css'
import lobby from './img/lobby.jpg'
import clock from './img/icon_clock.png'
import cinema from './img/cinema.png'

const Tariffs = () => {
    return (
        <>
            <h3 className="titleTariffs">Наши тарифы</h3>
            <>
                <img className="picture" src={lobby} alt="Lobby"/>
            </>
            <div className="blockTime">

                <div className='blockTariffs'>
                    <img className='imgIcon' src={clock} alt="Clock"/>
                    <div className='blockDescriptionTariffs'>
                        <div>Кино-утро</div>
                        <div>Аренда зала с 06:00 до 12:00</div>
                        <p>2500р / 2,5ч</p>
                    </div>
                </div>
                <div className='blockTariffs'>
                    <img className='imgIcon' src={clock} alt="Clock"/>
                    <div className='blockDescriptionTariffs'>
                        <div>Кино-день</div>
                        <div>Аренда зала с 12:00 до 18:00</div>
                        <p>4000р / 2,5ч</p>
                    </div>
                </div>
                <div className='blockTariffs'>
                    <img className='imgIcon' src={clock} alt="Clock"/>
                    <div className='blockDescriptionTariffs'>
                        <div>Кино-ночь</div>
                        <div>Аренда зала с 18:00 до 06:00</div>
                        <p>5000р / 2,5ч</p>
                    </div>
                </div>
            </div>
            <div className="blockPackets">
                <div className='blockTariffs'>
                    <img className='imgIcon' src={cinema} alt="Cinema"/>
                    <div className='blockDescriptionTariffs'>
                        <p>Пакет "Романтика":</p>
                        <div>Романтическая обстановка (ароматические свечи, лепестки роз)</div>
                        <div>Газировка 2 х 0,5л на Ваш выбор</div>
                        <div>Горячий чай на Ваш выбор</div>
                        <div>2 десерта на Ваш выбор</div>
                        <div>Стоимость: 2000 руб</div>
                    </div>
                </div>
                <div className='blockTariffs'>
                    <img className='imgIcon' src={cinema} alt="Cinema"/>
                    <div className='blockDescriptionTariffs'>
                        <p>Пакет "Вечеринка"</p>
                        <div>Попкорн 2 х 200г на Ваш выбор (соленый, сырный, карамельный)</div>
                        <div>Газировка 4 х 0,5л на Ваш выбор</div>
                        <div>Чипсы 4 х 70г на Ваш выбор</div>
                        <div>2 пиццы</div>
                        <div>Стоимость: 2500 руб</div>
                    </div>
                </div>
                <div className='blockTariffs'>
                    <img className='imgIcon' src={cinema} alt="Cinema"/>
                    <div className='blockDescriptionTariffs'>
                        <div>Продление аренды кинозала на 1 час</div>
                        <p></p>
                        <div>1000 руб (с 06:00 до 12:00)</div>
                        <div>1500 руб (с 12:00 до 18:00)</div>
                        <div>2000 руб (с 18:00 до 06:00)</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tariffs;