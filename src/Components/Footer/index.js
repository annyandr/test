import React from "react";
import {Link} from "react-router-dom";
import "./style.js"

//сделать красивые столбики

const Footer = ({hFooter}) => {
    return (       
        <nav>
            <ul>
                <div>   
                    <div>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/rooms">Залы</Link></li>
                        <li><Link to="/tariffs">Тарифы</Link></li>
                        <li><Link to="/films">Фильмы для тебя</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </div>
                    <div>
                        <div>Бронирование: +7 965 163-50-11</div>
                        <div>E-mail: ask@kinoroomloft.ru</div>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Footer;