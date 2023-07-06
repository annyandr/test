import React, { useState } from "react";
import "./style.js"
import Grid from '@mui/material/Grid';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const Films = ({hFilms}) => {
    return (
    <div className="films">
        <p>Давай подберем тебе топ самых интересных для тебя фильмов?</p>
        <p>Какой твой любимый жанр?</p>
        <RadioGroup onChange={(value) => console.log(value)}>
            <RadioButton value="Komedy">Комедия</RadioButton>
            <RadioButton value="Drama">Драма</RadioButton>
            <RadioButton value="Advantures">Приключения</RadioButton>
            <RadioButton value="Fantasy">Фэнтези</RadioButton>
            <RadioButton value="Sci-fi">Фантастика</RadioButton>
            <RadioButton value="Horror">Хоррор</RadioButton>
            <RadioButton value="Detective">Детектв</RadioButton>
            <RadioButton value="Thriller">Триллер</RadioButton>
            <RadioButton value="Historical">Исторический фильм</RadioButton>
            <RadioButton value="Cartoon">Анимация</RadioButton>
        </RadioGroup>
    </div>
    );
};

export default Films;