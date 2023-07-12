import React from "react";
import {Link} from "react-router-dom";
import "./style.css"
import logo from './image/logo.jpg'

const Header = () => {

    return (
        <div className='headerContainer'>
            <div className='header'>
                <Link className='link' to="/">
                    <p>Главная</p>
                </Link>
                <Link className='link' to="/rooms">
                    <p>Залы</p>
                </Link>
                <Link className='link' to="/tariffs">
                    <p>Тарифы</p>
                </Link>
                <Link className='link' to="/films">
                    <p>Фильмы для вас</p>
                </Link>
                <p className='booking'>Бронирование: +7 965 163-50-11</p>
            </div>
            <img className='img' src={logo} alt="Logo" />
        </div>
    );
};

export default Header;