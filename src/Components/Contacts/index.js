import React, { useState } from "react";
import "./style.js"

//попробовать добавить карты

const Contacts = ({hContacts}) => {

    return (
    <div className="contacts">
        
        <p>Наши Контакты:</p>
        <div>Бронирование: +7 965 163-50-11</div>
        <div>Ваши предложения: ask@kinoroomloft.ru</div>
        <div>Адрес: г. Москва, Страстной бульвар 11</div>
        <div>Режим работы: круглосуточно</div>
    </div>
    );
};

export default Contacts;