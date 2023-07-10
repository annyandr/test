import React from "react";
import {Link} from "react-router-dom";
import "./style.js"
import logo from './logo.jpg'
import { HeaderContainer } from "./style.js";
import Grid from '@mui/material/Grid';

const Header = ({hHeader}) => {
    return (
    <nav>
            <HeaderContainer>  

                <Grid container spacing={7}>
                  <Grid item xs={1}>
                    <Link to="/">Главная</Link>
                  </Grid>
                  <Grid item xs={1}>
                    <Link to="/rooms">Залы</Link>
                  </Grid>
                  <Grid item xs={1}>
                    <Link to="/tariffs">Тарифы</Link>
                  </Grid>
                  <Grid item xs={1}>
                    <Link to="/contacts">Контакты</Link>
                  </Grid>
                  <Grid item xs={1}>
                    <Link to="/films">Фильмы для тебя</Link>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={logo} alt="Logo" />
                  </Grid>
                  <Grid item xs={3}>
                    <div>Бронирование: +7 965 163-50-11</div>
                  </Grid>
                </Grid>
   
            </HeaderContainer>  
    </nav>
    );  
};

export default Header;