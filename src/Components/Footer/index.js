import React from "react";
import "./style.css"

const Footer = () => {
    return (
        <div className='footerContainer'>
            <footer>
                <ul className="contacts">
                    <p>Наши Контакты:</p>
                    <div>Бронирование: +7 965 163-50-11</div>
                    <div>Ваши предложения: ask@kinoroomloft.ru</div>
                    <div>Адрес: г. Москва, Страстной бульвар 11</div>
                    <div>Режим работы: круглосуточно</div>
                </ul>
            </footer>

        </div>
    );
};

export default Footer;