import React from "react";
import {Link} from "react-router-dom";
import "./style.css"

const Footer = ({hFooter}) => {
    return (       
    <>
    <footer>
      <div>
        <ul className='nav'>
          <Link to="/"><li>Главная</li></Link>
          <Link to="/rooms"><li>Залы</li></Link>
          <Link to="/tariffs"><li>Тарифы</li></Link>
          <Link to="/films"><li>Фильмы для вас</li></Link>
        </ul>
        <ul className="contacts">
            <p>Наши Контакты:</p>
            <div>Бронирование: +7 965 163-50-11</div>
            <div>Ваши предложения: ask@kinoroomloft.ru</div>
            <div>Адрес: г. Москва, Страстной бульвар 11</div>
            <div>Режим работы: круглосуточно</div>
        </ul>
      </div>
    </footer>
    </>
    );
};

export default Footer;