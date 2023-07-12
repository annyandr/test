import React from "react";
import {Link} from "react-router-dom";
import "./style.css"
import logo from './logo.jpg'

const Header = ({hHeader}) => {

    return (
    <>
    <header>
      <div>
        <ul className='nav'>
          <Link to="/"><li>Главная</li></Link>
          <Link to="/rooms"><li>Залы</li></Link>
          <Link to="/tariffs"><li>Тарифы</li></Link>
          <Link to="/films"><li>Фильмы для вас</li></Link>
          <img width="300" height="80" src={logo} alt="Logo" />
          <li>Бронирование: +7 965 163-50-11</li>
        </ul>
      </div>
    </header>
    </>
    );  
};

export default Header;